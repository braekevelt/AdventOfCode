import { words } from "lodash";
import { readLines } from "../common/files";

const lines = readLines(__dirname);

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
