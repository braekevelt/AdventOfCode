import fs from 'fs';
import _ from 'lodash';

const getNumbers = (file: string) => {
    const text = fs.readFileSync(file).toString();
    const lines = text.split('\n');
    return lines.map(line => parseInt(line)).filter(_.isInteger);
}

const countIncreases = (numbers: number[]) => {
    return _.sum(
        _.zipWith(
            _.initial(numbers),
            _.tail(numbers),
            (a, b) => a < b
        )
    );
}

const slidingWindow = (numbers: number[]) => {
    return _.zipWith(
        numbers.slice(0, numbers.length - 2),
        numbers.slice(1, numbers.length - 1),
        numbers.slice(2, numbers.length - 0),
        (a, b, c) => a + b + c
    );
}

const numbers = getNumbers('day1/input.txt');
//const numbers = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
const count = countIncreases(numbers);
const sliding = slidingWindow(numbers);
const slidingCount = countIncreases(sliding);
console.log({ count, sliding, slidingCount });
