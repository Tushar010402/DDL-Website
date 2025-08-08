const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = path.join(__dirname, '..', 'public', 'PhotosAndLogos');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'PhotosAndLogos');

// Quality settings for different image types
const QUALITY_SETTINGS = {
  webp: 85,
  jpeg: 85,
  png: 90
};

// Maximum dimensions
const MAX_WIDTH = 2048;
const MAX_HEIGHT = 2048;

async function optimizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const { width, height, format } = metadata;
    
    // Calculate new dimensions maintaining aspect ratio
    let newWidth = width;
    let newHeight = height;
    
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const widthRatio = MAX_WIDTH / width;
      const heightRatio = MAX_HEIGHT / height;
      const ratio = Math.min(widthRatio, heightRatio);
      
      newWidth = Math.round(width * ratio);
      newHeight = Math.round(height * ratio);
    }
    
    // Convert to WebP for better compression (except GIFs)
    if (format !== 'gif') {
      const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      await sharp(inputPath)
        .resize(newWidth, newHeight, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: QUALITY_SETTINGS.webp })
        .toFile(webpPath);
        
      const originalSize = (await fs.stat(inputPath)).size;
      const optimizedSize = (await fs.stat(webpPath)).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      
      console.log(`✓ ${path.basename(inputPath)} → ${path.basename(webpPath)} (${savings}% smaller)`);
      
      // Also create an optimized version in original format
      if (format === 'jpeg' || format === 'jpg') {
        await sharp(inputPath)
          .resize(newWidth, newHeight, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ quality: QUALITY_SETTINGS.jpeg, progressive: true })
          .toFile(outputPath);
      } else if (format === 'png') {
        await sharp(inputPath)
          .resize(newWidth, newHeight, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .png({ quality: QUALITY_SETTINGS.png, compressionLevel: 9 })
          .toFile(outputPath);
      }
    }
    
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  try {
    const files = await fs.readdir(dir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.includes('-optimized')
    );
    
    console.log(`Found ${imageFiles.length} images to optimize in ${dir}`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '-optimized.$1'));
      
      await optimizeImage(inputPath, outputPath);
    }
    
    console.log('\nOptimization complete!');
    console.log('\nNext steps:');
    console.log('1. Review the optimized images');
    console.log('2. Replace original images with optimized versions');
    console.log('3. Update your code to use .webp images where possible');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Create scripts directory if it doesn't exist
async function ensureScriptsDir() {
  const scriptsDir = path.dirname(__filename);
  try {
    await fs.access(scriptsDir);
  } catch {
    await fs.mkdir(scriptsDir, { recursive: true });
  }
}

async function main() {
  await ensureScriptsDir();
  await processDirectory(INPUT_DIR);
}

main();