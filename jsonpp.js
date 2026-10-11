export const pretty = (s) => JSON.stringify(JSON.parse(s), null, 2);
console.log(pretty(require('fs').readFileSync(0, 'utf8')));
