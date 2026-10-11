// Format rows as a GitHub-flavoured markdown table.
export function mdTable(headers, rows) {
    const widths = headers.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)));
    const line = (cells) => '| ' + cells.map((c, i) => String(c).padEnd(widths[i])).join(' | ') + ' |';
    return [line(headers), '| ' + widths.map((w) => '-'.repeat(w)).join(' | ') + ' |', ...rows.map(line)].join('\n');
}
