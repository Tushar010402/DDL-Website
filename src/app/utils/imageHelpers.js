export function getOptimizedImageSrc(src) {
  if (!src) return src;
  
  // Check if it's already a WebP image
  if (src.endsWith('.webp')) return src;
  
  // For now, return original src to ensure compatibility
  // In production, you'd check if WebP exists before returning it
  return src;
}

export function getImageDimensions(src, defaultWidth = 800, defaultHeight = 600) {
  // Define specific dimensions for known images
  const imageDimensions = {
    '/PhotosAndLogos/infrastructure.JPG': { width: 1920, height: 1080 },
    '/PhotosAndLogos/DDL-wallpaper.jpg': { width: 1920, height: 1080 },
    '/PhotosAndLogos/MainBanner.JPG': { width: 1920, height: 800 },
    '/PhotosAndLogos/SHouldKnowBackground.JPG': { width: 1920, height: 1080 },
    // Add more as needed
  };
  
  return imageDimensions[src] || { width: defaultWidth, height: defaultHeight };
}