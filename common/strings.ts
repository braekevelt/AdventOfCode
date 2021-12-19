import { isEmpty, isInteger } from 'lodash/fp';

export const isNonEmpty = (text: string) => !isEmpty(text);
export const toNumber = (text: string) => parseInt(text);
export const toCharArray = (text: string) => Array.from(text);

export const toLines = (text: string) => text.split('\n').filter(isNonEmpty);
export const toCharArrays = (text: string) => toLines(text).map(toCharArray);
export const toIntegers = (text: string) => toLines(text).map(toNumber).filter(isInteger);
