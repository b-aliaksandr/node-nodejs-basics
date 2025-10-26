import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const FOLDER_PATH = join(__dirname, 'files');
  const fileNamePath = join(FOLDER_PATH, 'fileToRemove.txt');

  try {
    await rm(fileNamePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    console.error(err);
  }
};

await remove();
