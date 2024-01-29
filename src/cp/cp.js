import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const filePath = join(__dirname, 'files', 'script.js');
  fork(filePath, args, { stdio: [0, 1, 2, 'ipc'] });
};

spawnChildProcess(['--some-arg', 'value1', '--other', '1337', '--arg2', '42']);