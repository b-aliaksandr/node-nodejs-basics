import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const readableStream = createReadStream(filePath);

  for await (const chunk of readableStream) {
    hash.update(chunk);
  }

  stdout.write(hash.digest('hex'));
  stdout.write('\n');
};

await calculateHash();
