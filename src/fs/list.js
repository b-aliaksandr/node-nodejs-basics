import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const FOLDER_PATH = join(__dirname, 'files');

  try {
    const files = await readdir(FOLDER_PATH);
    const filesAmount = files.length;

    stdout.write('[');
    for (let i = 0; i < filesAmount; i += 1) {
      stdout.write(`${files[i]}`);
      if (i + 1 !== filesAmount) stdout.write(', ');
    }
    stdout.write('] \n');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    console.error(err);
  }
};

await list();
