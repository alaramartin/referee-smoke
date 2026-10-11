export const countWords = (s) => s.trim().split(/\s+/).filter(Boolean).length;
console.log(countWords(require('fs').readFileSync(process.argv[2] ?? 0, 'utf8')));
