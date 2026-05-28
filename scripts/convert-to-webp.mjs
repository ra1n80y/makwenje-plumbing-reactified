import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '..', 'public');   // source images
const outputDir = path.join(__dirname, '..', 'public', 'webp');  // output folder

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Allowed extensions
const allowedExts = ['.png', '.jpg', '.jpeg'];

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (allowedExts.includes(ext)) {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, path.basename(file, ext) + '.webp');

    sharp(inputFile)
      .webp({ quality: 80 })          // adjust quality (80-85 is great)
      .toFile(outputFile)
      .then(() => console.log(`Converted: ${file} → ${path.basename(outputFile)}`))
      .catch((err) => console.error(`Error converting ${file}:`, err));
  }
});