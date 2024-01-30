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
    for (const file of files) {
      stdout.write(`${file} \r\n`);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    console.error(err);
  }
};

await list();