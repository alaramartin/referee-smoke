export const countWords = (s) => s.trim().split(/\s+/).filter(Boolean).length;
const text = require('fs').readFileSync(process.argv[2] ?? 0, 'utf8');
console.log(countWords(text));
