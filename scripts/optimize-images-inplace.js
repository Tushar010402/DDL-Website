const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = path.join(__dirname, '..', 'public', 'PhotosAndLogos');

// Quality settings
const QUALITY_SETTINGS = {
  webp: 85,
  jpeg: 85,
  png: 90
};

// Size thresholds
const SIZE_THRESHOLDS = {
  large: { width: 1920, height: 1080 },  // For hero images
  medium: { width: 1200, height: 800 },  // For content images
  small: { width: 600, height: 400 }     // For thumbnails
};

async function getImageSize(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size;
}

async function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function optimizeImage(inputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const { width, height, format } = metadata;
    const originalSize = await getImageSize(inputPath);
    
    // Skip if already webp
    if (format === 'webp') {
      console.log(`⏭️  ${path.basename(inputPath)} is already WebP`);
      return;
    }
    
    // Skip GIFs
    if (format === 'gif') {
      console.log(`⏭️  ${path.basename(inputPath)} is a GIF (skipping)`);
      return;
    }
    
    // Determine appropriate size based on original dimensions
    let targetDimensions = SIZE_THRESHOLDS.large;
    if (width <= SIZE_THRESHOLDS.medium.width && height <= SIZE_THRESHOLDS.medium.height) {
      targetDimensions = SIZE_THRESHOLDS.medium;
    }
    if (width <= SIZE_THRESHOLDS.small.width && height <= SIZE_THRESHOLDS.small.height) {
      targetDimensions = SIZE_THRESHOLDS.small;
    }
    
    // Create WebP version
    const webpPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    await sharp(inputPath)
      .resize(targetDimensions.width, targetDimensions.height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY_SETTINGS.webp })
      .toFile(webpPath);
    
    const webpSize = await getImageSize(webpPath);
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    // Optimize original format
    const tempPath = inputPath + '.tmp';
    
    if (format === 'jpeg' || format === 'jpg') {
      await sharp(inputPath)
        .resize(targetDimensions.width, targetDimensions.height, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ 
          quality: QUALITY_SETTINGS.jpeg, 
          progressive: true,
          mozjpeg: true 
        })
        .toFile(tempPath);
    } else if (format === 'png') {
      await sharp(inputPath)
        .resize(targetDimensions.width, targetDimensions.height, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ 
          quality: QUALITY_SETTINGS.png, 
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toFile(tempPath);
    }
    
    const optimizedSize = await getImageSize(tempPath);
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    // Replace original with optimized version
    await fs.rename(tempPath, inputPath);
    
    console.log(`✅ ${path.basename(inputPath)}: ${await formatBytes(originalSize)} → ${await formatBytes(optimizedSize)} (${savings}% smaller)`);
    console.log(`   📦 WebP created: ${await formatBytes(webpSize)} (${webpSavings}% smaller)`);
    
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  try {
    const files = await fs.readdir(dir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    console.log(`🖼️  Found ${imageFiles.length} images to optimize\n`);
    
    // Sort by size (largest first)
    const filesWithSizes = await Promise.all(
      imageFiles.map(async (file) => ({
        file,
        size: await getImageSize(path.join(dir, file))
      }))
    );
    
    filesWithSizes.sort((a, b) => b.size - a.size);
    
    // Process images
    for (const { file, size } of filesWithSizes) {
      if (size > 100 * 1024) { // Only process images larger than 100KB
        const inputPath = path.join(dir, file);
        await optimizeImage(inputPath);
      }
    }
    
    console.log('\n✨ Optimization complete!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  await processDirectory(INPUT_DIR);
}

main();