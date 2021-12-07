import { words } from "lodash";
import { parseLines, readLines } from "../libraries";

// const lines = parseLines(`
// forward 5
// down 5
// forward 8
// up 3
// down 8
// forward 2
// `);

const lines = readLines(__dirname + '/input.txt');

let position = 0;
let depth = 0;

for (const line of lines) {
    const [command, x] = words(line);
    const amount = +x;
    switch (command) {
        case 'forward':
            position += amount;
            break;
        case 'down':
            depth += amount;
            break;
        case 'up':
            depth -= amount;
            break;
    }
}

console.log({ position, depth, product: position * depth });
