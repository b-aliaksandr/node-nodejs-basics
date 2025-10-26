import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  const readableStream = createReadStream(filePath);
  readableStream.pipe(stdout);
};

await read();
