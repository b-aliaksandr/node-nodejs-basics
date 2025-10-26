import { env, stdout } from 'node:process';

const parseEnv = () => {
  const prefix = 'RSS_';
  const vars = Array
    .from(Object.entries(env))
    .filter(([key, value]) => {
      if (key.startsWith(prefix)) return [key, value];
    });
  const outputStr = vars
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');
  stdout.write(outputStr);
  stdout.write('\n');
};

parseEnv();
