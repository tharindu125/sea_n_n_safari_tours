/**
 * Inserts the Google tag (gtag.js) snippet immediately after <head> on every HTML page.
 * Skips files that already contain the measurement ID.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const GA_ID = 'G-BHSB4E2ZJV';

const SNIPPET = `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_ID}');
  </script>
`;

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(fullPath, files);
    else if (entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

let updated = 0;
let skipped = 0;

for (const file of walkHtmlFiles(ROOT)) {
  const html = fs.readFileSync(file, 'utf8');
  if (html.includes(GA_ID)) {
    skipped++;
    continue;
  }
  if (!/<head>/i.test(html)) {
    console.warn('No <head> found:', path.relative(ROOT, file));
    continue;
  }
  const next = html.replace(/<head>/i, `<head>\n${SNIPPET}`);
  fs.writeFileSync(file, next);
  console.log('Updated:', path.relative(ROOT, file));
  updated++;
}

console.log(`Done — ${updated} updated, ${skipped} already had GA tag.`);
