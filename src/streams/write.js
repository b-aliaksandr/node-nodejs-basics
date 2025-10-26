import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');
  const writableStream = createWriteStream(filePath);
  stdin.pipe(writableStream);
};

await write();
