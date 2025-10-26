import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const FILE_NAME = 'fileToRead.txt';
  const FILE_PATH = join(__dirname, 'files', FILE_NAME);

  try {
    const contents = await readFile(FILE_PATH, { encoding: 'utf-8' });
    stdout.write(contents);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    console.error(err);
  }
};

await read();
