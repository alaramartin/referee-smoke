// Format rows as a GitHub-flavoured markdown table.
export function mdTable(headers, rows) {
    const widths = headers.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)));
    const line = (cells) => '| ' + cells.map((c, i) => String(c).padEnd(widths[i])).join(' | ') + ' |';
    return [line(headers), '| ' + widths.map((w) => '-'.repeat(w)).join(' | ') + ' |', ...rows.map(line)].join('\n');
}

// CLI: node mdtable.js data.json  (an array of objects)
if (process.argv[2]) {
    const data = JSON.parse(require('fs').readFileSync(process.argv[2], 'utf8'));
    const headers = Object.keys(data[0] ?? {});
    console.log(mdTable(headers, data.map((o) => headers.map((h) => o[h]))));
}
