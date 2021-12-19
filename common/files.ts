import { join } from 'path';
import fs from 'fs';
import { toCharArrays, toIntegers, toLines } from './strings';

export const readLines = (dir: string, file?: string, extension?: string) => toLines(readString(dir, file, extension));
export const readCharArrays = (dir: string, file?: string, extension?: string) => toCharArrays(readString(dir, file, extension));
export const readIntegers = (dir: string, file?: string, extension?: string) => toIntegers(readString(dir, file, extension));

export const readString = (dir: string, file: string = 'input', extension: string = 'txt') => fs.readFileSync(join(dir, `${file}.${extension}`)).toString();
