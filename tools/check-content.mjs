/* Project wide content rules check. Run: node tools/check-content.mjs */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const EM_DASH = String.fromCharCode(0x2014);
const skip = new Set(['node_modules', '.git', 'dist']);
const findings = [];

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(mjs|js|css|html|md|json|svg|txt|xml)$/.test(entry.name)) {
      const text = fs.readFileSync(full, 'utf8');
      text.split('\n').forEach((line, i) => {
        if (line.includes(EM_DASH)) findings.push(`${path.relative(root, full)}:${i + 1} em dash`);
        if (/\{\{[A-Z_]+\}\}/.test(line)) findings.push(`${path.relative(root, full)}:${i + 1} placeholder token`);
      });
    }
  }
};

walk(root);

if (findings.length) {
  console.error('Content rule failures:');
  findings.forEach((f) => console.error('  ' + f));
  process.exit(1);
}
console.log('Content check passed: no em dash characters, no unresolved placeholder tokens.');
