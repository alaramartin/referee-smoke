// Temperature converter CLI: node <file> 100 C  ->  212 F
export const cToF = (c) => (c * 9) / 5 + 32;
export const fToC = (f) => ((f - 32) * 5) / 9;
