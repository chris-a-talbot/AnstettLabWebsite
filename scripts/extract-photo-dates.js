/**
 * Extract dates from photos for gallery sorting
 *
 * Priority:
 * 1. Embedded metadata (EXIF DateTimeOriginal, etc.)
 * 2. File modification time
 * 3. Manual overrides in gallery.config.json
 *
 * Run: node scripts/extract-photo-dates.js
 */

import { readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PHOTOS_DIR = join(__dirname, '../src/assets/photos');
const OUTPUT_FILE = join(__dirname, '../src/data/photo-dates.json');
const CONFIG_FILE = join(__dirname, '../src/assets/photos/gallery.config.json');

// Supported image extensions (lowercase - we'll compare case-insensitively)
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

/**
 * Try to extract EXIF date from image buffer
 */
async function extractExifDate(buffer) {
  try {
    // Try to dynamically import exifr if available
    const exifr = await import('exifr').catch(() => null);
    if (!exifr) return null;

    const data = await exifr.parse(buffer, {
      pick: ['DateTimeOriginal', 'CreateDate', 'ModifyDate', 'DateTime']
    });

    if (data) {
      // Try various date fields in order of preference
      const dateValue = data.DateTimeOriginal || data.CreateDate || data.DateTime || data.ModifyDate;
      if (dateValue instanceof Date) {
        return dateValue.toISOString();
      }
    }
  } catch (e) {
    // EXIF parsing failed, return null
  }
  return null;
}

/**
 * Get all image files recursively
 */
async function getImageFiles(dir, baseDir = dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip hidden directories
      if (!entry.name.startsWith('.')) {
        files.push(...await getImageFiles(fullPath, baseDir));
      }
    } else if (entry.isFile()) {
      const ext = entry.name.toLowerCase().slice(entry.name.lastIndexOf('.'));
      if (IMAGE_EXTENSIONS.includes(ext)) {
        const relativePath = relative(baseDir, fullPath);
        files.push({ fullPath, relativePath });
      }
    }
  }

  return files;
}

/**
 * Main extraction function
 */
async function extractPhotoDates() {
  console.log('Extracting photo dates...');

  // Load existing config for overrides
  let config = { dates: {} };
  try {
    const configContent = await readFile(CONFIG_FILE, 'utf-8');
    config = JSON.parse(configContent);
  } catch (e) {
    console.log('No existing config found, using defaults');
  }

  const dateOverrides = config.dates || {};
  const imageFiles = await getImageFiles(PHOTOS_DIR);
  const photoDates = {};

  for (const { fullPath, relativePath } of imageFiles) {
    // Check for manual override first
    if (dateOverrides[relativePath]) {
      photoDates[relativePath] = {
        date: dateOverrides[relativePath],
        source: 'config'
      };
      console.log(`  ${relativePath}: ${dateOverrides[relativePath]} (config override)`);
      continue;
    }

    // Try to extract EXIF date
    const buffer = await readFile(fullPath);
    const exifDate = await extractExifDate(buffer);

    if (exifDate) {
      photoDates[relativePath] = {
        date: exifDate,
        source: 'exif'
      };
      console.log(`  ${relativePath}: ${exifDate} (EXIF)`);
      continue;
    }

    // Fall back to file modification time
    const stats = await stat(fullPath);
    const mtime = stats.mtime.toISOString();
    photoDates[relativePath] = {
      date: mtime,
      source: 'mtime'
    };
    console.log(`  ${relativePath}: ${mtime} (file mtime)`);
  }

  // Write output
  const output = {
    generatedAt: new Date().toISOString(),
    photos: photoDates
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`\nWrote ${Object.keys(photoDates).length} photo dates to ${OUTPUT_FILE}`);
}

extractPhotoDates().catch(console.error);
