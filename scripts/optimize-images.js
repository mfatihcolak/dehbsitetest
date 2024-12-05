const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    
    // Create WebP version
    await image
      .webp({ quality: 80, ...options })
      .toFile(outputPath.replace(/\.[^.]+$/, '.webp'));
    
    // Create optimized JPG version
    await image
      .jpeg({ quality: 85, ...options })
      .toFile(outputPath.replace(/\.[^.]+$/, '.jpg'));
      
    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error);
  }
}

async function main() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  
  // Ensure images directory exists
  await fs.mkdir(imagesDir, { recursive: true });
  
  // Optimize certificate images
  const certificates = [
    {
      input: 'certificate-1.jpg',
      output: path.join(imagesDir, 'certificate-1')
    }
  ];

  for (const cert of certificates) {
    await optimizeImage(cert.input, cert.output);
  }
}

main().catch(console.error);