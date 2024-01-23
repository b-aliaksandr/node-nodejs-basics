import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const TEXT_CONTENT = 'I am fresh and young';
  const FILE_NAME = 'fresh.txt';
  const FILE_PATH = join(__dirname, 'files', FILE_NAME);

  try {
    const data = new Uint8Array(Buffer.from(TEXT_CONTENT));
    await writeFile(FILE_PATH, data, { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
    console.error(err);
  }
};

await create();