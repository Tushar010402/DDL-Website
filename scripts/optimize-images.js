const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY_SETTINGS = {
  webp: 80,
  jpeg: 80,
  png: { compressionLevel: 9 }
};

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

async function optimizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const { width, height, format } = metadata;
    
    console.log(`Processing: ${path.basename(inputPath)}`);
    console.log(`  Original: ${width}x${height}, Format: ${format}`);
    
    let pipeline = sharp(inputPath);
    
    // Resize if image is too large
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert and optimize based on format
    if (format === 'jpeg' || format === 'jpg') {
      pipeline = pipeline.jpeg({ 
        quality: QUALITY_SETTINGS.jpeg,
        progressive: true,
        mozjpeg: true
      });
    } else if (format === 'png') {
      pipeline = pipeline.png(QUALITY_SETTINGS.png);
    } else if (format === 'webp') {
      pipeline = pipeline.webp({ 
        quality: QUALITY_SETTINGS.webp,
        effort: 6
      });
    }
    
    await pipeline.toFile(outputPath);
    
    const originalStats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(outputPath);
    const reduction = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(2);
    
    console.log(`  Optimized: ${(optimizedStats.size / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    
    return {
      original: originalStats.size,
      optimized: optimizedStats.size,
      reduction: parseFloat(reduction)
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
    throw error;
  }
}

async function optimizeAllImages() {
  const publicDir = path.join(__dirname, '..', 'public', 'PhotosAndLogos');
  
  // List of images to optimize (prioritizing largest ones)
  const imagesToOptimize = [
    'bannerFormobile.webp',
    'Recognization1.webp',
    'DDL-wallpaper.webp',
    'DDL-FRONT.webp',
    'DDL-wallpaper.jpg',
    'DDL-FRONT.jpg',
    'Research8.webp',
    'Research7.webp',
    'Recognization6.webp',
    'Research10.webp',
    'MainBanner.JPG',
    'PB2.jpg',
    'MainBanner.webp',
    'PB2.webp',
    'Research6.webp',
    'Research4.webp',
    'VirtualTOur21.webp',
    'gglab7.jpg',
    'gglab7.webp',
    'hpylori.jpeg'
  ];
  
  // Create backup directory
  const backupDir = path.join(publicDir, 'original-backup');
  try {
    await fs.mkdir(backupDir, { recursive: true });
  } catch (error) {
    console.log('Backup directory already exists or error creating it');
  }
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const image of imagesToOptimize) {
    const inputPath = path.join(publicDir, image);
    const backupPath = path.join(backupDir, image);
    const tempPath = path.join(publicDir, `temp_${image}`);
    
    try {
      // Check if file exists
      await fs.access(inputPath);
      
      // Skip GIF files as Sharp doesn't handle animated GIFs well
      if (image.endsWith('.gif')) {
        console.log(`Skipping GIF file: ${image}`);
        continue;
      }
      
      // Create backup
      await fs.copyFile(inputPath, backupPath);
      
      // Optimize to temp file
      const result = await optimizeImage(inputPath, tempPath);
      
      // Replace original with optimized version
      await fs.rename(tempPath, inputPath);
      
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      
    } catch (error) {
      console.error(`Failed to process ${image}:`, error.message);
      // Clean up temp file if it exists
      try {
        await fs.unlink(tempPath);
      } catch {}
    }
  }
  
  console.log('\n=== Optimization Complete ===');
  console.log(`Total Original Size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total Optimized Size: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total Reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(2)}%`);
  console.log(`\nOriginal files backed up in: ${backupDir}`);
}

// Run the optimization
optimizeAllImages().catch(console.error);