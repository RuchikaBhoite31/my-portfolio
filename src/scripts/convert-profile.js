// Usage: node src/scripts/convert-profile.js
// Converts src/assets/profile.jpg (or png) into multiple webp sizes.
// Requires `sharp` installed: `npm i -D sharp`

const fs = require('fs');
const path = require('path');

async function run() {
  const sharp = require('sharp');
  const projectRoot = path.resolve(__dirname, '..', '..');
  const assetsDir = path.join(projectRoot, 'src', 'assets');
  const inputCandidates = ['profile.jpg', 'profile.png', 'profile.jpeg'];
  const inputPath = inputCandidates.map(n => path.join(assetsDir, n)).find(p => fs.existsSync(p));

  if (!inputPath) {
    console.error('No input image found. Place your photo as src/assets/profile.jpg (or .png) and retry.');
    process.exit(1);
  }

  const sizes = [320, 480, 800];
  try {
    for (const w of sizes) {
      const outPath = path.join(assetsDir, `profile-${w}.webp`);
      await sharp(inputPath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
      console.log('Written', outPath);
    }
    // Also write a main profile.webp (largest)
    const mainOut = path.join(assetsDir, 'profile.webp');
    await sharp(inputPath).resize({ width: 1200 }).webp({ quality: 80 }).toFile(mainOut);
    console.log('Written', mainOut);
    console.log('Done.');
  } catch (err) {
    console.error('Error creating images:', err);
    process.exit(1);
  }
}

run();
