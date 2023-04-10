import { reverse } from 'dns';
import { print, loop } from './utils/helpers';

const square = async (len: number) => {
  await loop(len, async () => {
    await loop(len, async () => {
      await print('*  ');
    });
    await print('\n');
  });
};

const outline = async (len: number) => {
  await loop(len, async (i) => {
    await loop(len, async (j) => {
      if ([i, j].includes(0) || [i, j].includes(len - 1)) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
  });
};

const rightAngleTriangle = async (len: number) => {
  await loop(len, async (i) => {
    await loop(len, async (j) => {
      if (j <= i) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
  });
};

const rightAngleTriangle90 = async (len: number) => {
  await loop(len, async (i) => {
    await loop(len, async (j) => {
      if (i <= j) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
  });
};

const rightAngleTriangle180 = async (len: number) => {
  await loop(len, async (i) => {
    await loop(len, async (j) => {
      if (len - j - 1 >= i) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
  });
};

const rightAngleTriangle270 = async (len: number) => {
  await loop(len, async (i) => {
    await loop(len, async (j) => {
      if (len - j - 1 <= i) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
  });
};

const pyramid = async (len: number) => {
  let start = Math.floor(len / 2);
  let end = start;
  await loop(Math.floor(len / 2) + 1, async () => {
    await loop(len, async (j) => {
      if (j >= start && j <= end) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
    start -= 1;
    end += 1;
  });
};

const triangle = async (len: number) => {
  let start = Math.floor(len / 2);
  let end = start;
  await loop(Math.floor(len / 2) + 1, async (i) => {
    await loop(len, async (j) => {
      if (
        j === start ||
        j === end ||
        i === Math.floor(len / 2)
      ) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
    start -= 1;
    end += 1;
  });
};

const reversePyramid = async (len: number) => {
  let start = 0;
  let end = len - 1;
  await loop(Math.floor(len / 2) + 1, async () => {
    await print('   ');
    await loop(len, async (j) => {
      if (j >= start && j <= end) {
        await print('*  ');
      } else {
        await print('   ');
      }
    });
    await print('\n');
    start += 1;
    end -= 1;
  });
};

const diamond = async (len: number) => {
  await pyramid(len);
  await reversePyramid(len - 2);
};

const main = async () => {
  await diamond(11);
  console.log('\n================================\n\n');
  await reversePyramid(9);
  console.log('\n================================\n\n');
  await triangle(9);
  console.log('\n================================\n\n');
  await pyramid(9);
  console.log('\n================================\n\n');
  await square(7);
  console.log('\n================================\n\n');
  await outline(7);
  console.log('\n================================\n\n');
  await rightAngleTriangle(8);
  console.log('\n================================\n\n');
  await rightAngleTriangle90(8);
  console.log('\n================================\n\n');
  await rightAngleTriangle180(8);
  console.log('\n================================\n\n');
  await rightAngleTriangle270(8);
  console.log('\n================================\n\n');
};

main();

