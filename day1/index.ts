import { readNumbers } from '../libraries';
import { sum, zipWith, initial, tail } from 'lodash';

const countIncreases = (numbers: number[]) => {
    return sum(
        zipWith(
            initial(numbers),
            tail(numbers),
            (a, b) => a < b
        )
    );
}

const slidingWindow = (numbers: number[]) => {
    return zipWith(
        numbers.slice(0, numbers.length - 2),
        numbers.slice(1, numbers.length - 1),
        numbers.slice(2, numbers.length - 0),
        (a, b, c) => a + b + c
    );
}

//const numbers = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const numbers = readNumbers(__dirname + '/input.txt');
const count = countIncreases(numbers);
const slidingCount = countIncreases(slidingWindow(numbers));
console.log({ count, slidingCount });
