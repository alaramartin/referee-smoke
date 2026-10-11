export const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

console.log(slugify(process.argv.slice(2).join(' ')));
