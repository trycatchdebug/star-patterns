import chalk from 'chalk';

const TIMEOUT = 100;

export const print = async (value: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      process.stdout.write(
        chalk.hex('#00c9b7').bold(value)
      );
      resolve(true);
    }, TIMEOUT);
  });
};

export const loop = async (
  len: number,
  cb: ((arg0: number) => void) | null = null
) => {
  for (let i = 0; i < len; i++) {
    cb && (await cb(i));
  }
};

