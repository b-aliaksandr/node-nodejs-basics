import { rename as renameFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const FOLDER_PATH = join(__dirname, 'files');
  const fileNamePath = join(FOLDER_PATH, 'wrongFilename.txt');
  const newFileNamePath = join(FOLDER_PATH, 'properFilename.md');

  let isExist = false;

  try {
    await access(newFileNamePath);
    isExist = true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      isExist = false;
    }
  }

  if (isExist) throw new Error('FS operation failed');

  try {
    await renameFile(fileNamePath, newFileNamePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    console.error(err.code);
  }
};

await rename();
