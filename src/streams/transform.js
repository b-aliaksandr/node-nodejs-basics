import { pipeline } from 'node:stream/promises';
import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';
import { Buffer } from 'node:buffer';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      let str = chunk;
      if (Buffer.isBuffer(chunk)) {
        str = chunk.toString('utf-8');
      }
      this.push(str.split('').reverse().join(''));
      this.push('\r\n');
      callback();
    }
  });
  await pipeline(
    stdin,
    reverseText,
    stdout,
  )
};

await transform();
