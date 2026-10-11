// Temperature converter CLI: node <file> 100 C  ->  212 F
export const cToF = (c) => (c * 9) / 5 + 32;
export const fToC = (f) => ((f - 32) * 5) / 9;

const [value, unit] = process.argv.slice(2);
if (value !== undefined) {
    const n = Number(value);
    if (Number.isNaN(n) || !/^[cf]$/i.test(unit ?? '')) {
        console.error('usage: node convert.js <number> <C|F>');
        process.exit(1);
    }
    console.log(/c/i.test(unit) ? `${cToF(n).toFixed(1)} F` : `${fToC(n).toFixed(1)} C`);
}
