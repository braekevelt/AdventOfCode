import { readIntegers } from '../common/files';
import { slide } from '../common/arrays';
import { sum } from 'lodash';

const countIncreases = (integers: number[]) => sum(slide(integers, 2, (a, b) => a < b))

const integers = readIntegers(__dirname);
const count = countIncreases(integers);
console.log({ count });

const slideCount = countIncreases(slide(integers, 3, (a, b, c) => a + b + c));
console.log({ slidingCount: slideCount });
