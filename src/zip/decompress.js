import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const srcFilePath = join(__dirname, 'files', 'archive.gz');
  const destFilePath = join(__dirname, 'files', 'fileToCompress.txt');

  const source = createReadStream(srcFilePath);
  const destination = createWriteStream(destFilePath);

  try {
    await pipeline(source, createGunzip(), destination);
  } catch (err) {
    console.error(err);
  }
};

await decompress();
