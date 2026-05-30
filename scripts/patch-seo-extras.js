const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const skip = new Set(['index.html']);

const commonRoot = `  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">
  <meta name="bingbot" content="index, follow">
  <meta name="slurp" content="index, follow">
  <meta name="referrer" content="no-referrer">
  <meta name="copyright" content="© 2025 Sea & Safari Tours">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Sea & Safari Tours">
  <meta name="application-name" content="Sea & Safari Tours">
  <meta property="og:locale:alternate" content="en_GB">
  <link rel="icon" href="assets/images/logo.png">
  <link rel="apple-touch-icon" href="assets/images/logo.png">
`;

const commonTours = commonRoot
  .replace(/href="assets\//g, 'href="../assets/')
  .replace('content="index, follow">', 'content="index, follow">');

function patchFile(filePath, isTour) {
  const name = path.basename(filePath);
  if (skip.has(name)) return;

  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('X-UA-Compatible')) return;

  const block = isTour ? commonTours : commonRoot;

  html = html.replace(
    /<meta charset="UTF-8">\r?\n\s*<meta name="viewport"[^>]*>/,
    `<meta charset="UTF-8">\n${block.trimEnd()}`
  );

  html = html.replace(
    /<link rel="sitemap" type="application\/xml" href="/g,
    '<link rel="sitemap" type="application/xml" title="Sitemap" href="'
  );

  html = html.replace(
    /<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">/g,
    '<meta name="googlebot" content="index, follow">'
  );

  fs.writeFileSync(filePath, html);
  console.log('Patched', filePath);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) patchFile(full, full.includes(`${path.sep}tours${path.sep}`));
  }
}

walk(root);
