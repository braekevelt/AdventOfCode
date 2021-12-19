import { range, zipWith } from "lodash";

export const slide = <A, B>(array: A[], window: number, combine: (...a: A[]) => B): B[] =>
    zipWith(...shifts(array, window), combine);

export const shifts = <A>(array: A[], n: number): A[][] =>
    range(n).map(shift => array.slice(shift, array.length - n + 1 + shift));
