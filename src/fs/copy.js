import { copyFile, readdir, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const FOLDER_PATH = join(__dirname, 'files');
  const FOLDER_COPY_PATH = join(__dirname, 'files_copy');

  try {
    const files = await readdir(FOLDER_PATH);
    await mkdir(FOLDER_COPY_PATH);
    for (const file of files) {
      await copyFile(
        join(FOLDER_PATH, file),
        join(FOLDER_COPY_PATH, file)
      );
    }
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    console.error(err);
  }
};

await copy();
