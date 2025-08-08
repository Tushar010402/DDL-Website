const fs = require('fs').promises;
const path = require('path');

// Function to recursively get all JS/JSX/TS/TSX files
async function getAllSourceFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-source directories
      if (!['node_modules', '.next', '.git', 'public'].includes(file)) {
        await getAllSourceFiles(filePath, fileList);
      }
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Function to update image references in a file
async function updateImageReferences(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match image paths in various contexts
    const patterns = [
      // Direct image paths in strings
      /(['"])\/PhotosAndLogos\/([^'"]+)\.(jpg|jpeg|png)\1/gi,
      // Image paths in template literals
      /`\/PhotosAndLogos\/([^`]+)\.(jpg|jpeg|png)`/gi,
      // Image paths in JSX src attributes
      /src=\{?['"]\/PhotosAndLogos\/([^'"]+)\.(jpg|jpeg|png)['"]\}?/gi,
    ];
    
    // Store original content for comparison
    const originalContent = content;
    
    // Replace .jpg/.jpeg/.png with .webp
    patterns.forEach(pattern => {
      content = content.replace(pattern, (match, quote, filename, ext) => {
        if (quote) {
          return `${quote}/PhotosAndLogos/${filename}.webp${quote}`;
        }
        return match.replace(/\.(jpg|jpeg|png)/i, '.webp');
      });
    });
    
    // Check if content was modified
    if (content !== originalContent) {
      await fs.writeFile(filePath, content, 'utf8');
      console.log(`✅ Updated: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    console.log('🔍 Searching for source files...\n');
    
    const srcDir = path.join(__dirname, '..', 'src');
    const sourceFiles = await getAllSourceFiles(srcDir);
    
    console.log(`Found ${sourceFiles.length} source files\n`);
    console.log('📝 Updating image references to use WebP format...\n');
    
    let updatedCount = 0;
    
    for (const file of sourceFiles) {
      const updated = await updateImageReferences(file);
      if (updated) updatedCount++;
    }
    
    console.log(`\n✨ Complete! Updated ${updatedCount} files.`);
    
    if (updatedCount > 0) {
      console.log('\n⚠️  Important: Please test your application to ensure all images load correctly.');
      console.log('If any images fail to load, they may not have been converted to WebP format.');
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the script
main();