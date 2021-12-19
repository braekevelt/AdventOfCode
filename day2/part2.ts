import { words } from "lodash";
import { readLines } from "../common/files";

const lines = readLines(__dirname);

let position = 0;
let depth = 0;
let aim = 0;

for (const line of lines) {
    const [command, x] = words(line);
    const amount = +x;
    switch (command) {
        case 'forward':
            position += amount;
            depth += aim * amount;
            break;
        case 'down':
            aim += amount;
            break;
        case 'up':
            aim -= amount;
            break;
    }
}

console.log({ position, depth, aim, product: position * depth });
