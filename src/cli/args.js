import { argv, stdout } from 'node:process';

const parseArgs = () => {
  const props = [];
  console.log(argv)

  let isPropPrevArg = false;
  argv.forEach((value) => {
    if (value.startsWith('--')) {
      props.push({ name: value });
      isPropPrevArg = true;
    } else {
      if (isPropPrevArg) {
        const prop = props.at(-1);
        prop.value = value;
      }
      isPropPrevArg = false;
    }
  });
  const outputStr = props
    .map(({ name, value }) => `${name} is ${value}`)
    .join(', ');

  stdout.write(outputStr);
  stdout.write('\n');
};

parseArgs();
