import { countBy, Dictionary, join, unzip } from "lodash";
import { readCharArrays } from "../common/files";

const charArrays = readCharArrays(__dirname);
const indexChars = unzip(charArrays);

const maxBitCheck = (dict: Dictionary<number>) => dict['0'] > dict['1'] ? '0' : '1';
const minBitCheck = (dict: Dictionary<number>) => dict['0'] > dict['1'] ? '1' : '0';

const maxBitCriterion = (chars: string[]) => maxBitCheck(countBy((chars)));
const minBitCriterion = (chars: string[]) => minBitCheck(countBy(chars));

const joinBits = (bits: string[]) => parseInt(join(bits, ''), 2);

const gamma = joinBits(indexChars.map(maxBitCriterion));
const epsilon = joinBits(indexChars.map(minBitCriterion));
const powerConsuption = gamma * epsilon;

console.log({ gamma, epsilon, powerConsuption });


const process = (criterion: (chars: string[]) => string) => {
    let remaining = charArrays;
    for (let index = 0; remaining.length > 1; index++) {
        const bits = remaining.map(chars => chars?.[index]);
        const bit = criterion(bits);
        remaining = remaining.filter(chars => chars[index] === bit);
    }
    return joinBits(remaining?.[0] ?? []);
}

const CO2ScrubberRating = process(maxBitCriterion);
const oxygenGeneratorRating = process(minBitCriterion);
const lifeSupportRating = CO2ScrubberRating * oxygenGeneratorRating;

console.log({ CO2ScrubberRating, oxygenGeneratorRating, lifeSupportRating });

