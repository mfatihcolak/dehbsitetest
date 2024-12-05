import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    
    // Create WebP version
    await image
      .webp({ quality: 80, ...options })
      .toFile(outputPath + '.webp');
    
    // Create optimized JPG version
    await image
      .jpeg({ quality: 85, ...options })
      .toFile(outputPath + '.jpg');
      
    console.log(`✓ Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error);
  }
}

async function main() {
  const projectRoot = join(__dirname, '..');
  const imagesDir = join(projectRoot, 'public', 'images');
  
  // Ensure images directory exists
  await fs.mkdir(imagesDir, { recursive: true });
  
  // List of certificates to optimize
  const certificates = [
    {
      input: join(projectRoot, 'certificate-1.jpg'),
      output: join(imagesDir, 'certificate-1')
    },
    {
      input: join(projectRoot, 'certificate-2.jpg'),
      output: join(imagesDir, 'certificate-2')
    }
  ];

  // Process each certificate
  for (const cert of certificates) {
    await optimizeImage(cert.input, cert.output);
  }
}

main().catch(console.error);