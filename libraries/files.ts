import { isEmpty, isInteger } from 'lodash/fp';
import fs from 'fs';

export const readLines = (file: string) => parseLines(fs.readFileSync(file).toString());

export const parseLines = (text: string) => text.split('\n').filter(line => !isEmpty(line));

export const readNumbers = (file: string) => readLines(file).map(line => parseInt(line)).filter(isInteger);
