/**
 * Generates sitemap-images.xml from tour/combo data in assets/js/script.js
 * Run: node scripts/generate-image-sitemap.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const scriptPath = path.join(root, 'assets', 'js', 'script.js');
const siteUrl = 'https://www.ceylonseasafaritours.com';
const script = fs.readFileSync(scriptPath, 'utf8');

function extractBlock(name) {
  const start = script.indexOf(`const ${name} = {`);
  if (start === -1) return '';
  let depth = 0;
  let i = script.indexOf('{', start);
  for (; i < script.length; i += 1) {
    if (script[i] === '{') depth += 1;
    if (script[i] === '}') {
      depth -= 1;
      if (depth === 0) return script.slice(start, i + 1);
    }
  }
  return '';
}

function extractTourPages() {
  const block = extractBlock('TOURS');
  const pages = [];
  const tourRe = /'([a-z-]+)':\s*\{[^]*?gallery:\s*\[([^]*?)\]/g;
  let match;
  while ((match = tourRe.exec(block)) !== null) {
    const id = match[1];
    const galleryBlock = match[2];
    const images = [...galleryBlock.matchAll(/'([^']+\.(?:png|jpg|jpeg|webp))'/gi)].map(m => m[1]);
    const heroMatch = block.slice(match.index).match(/heroImage:\s*'([^']+)'/);
    const imageMatch = block.slice(match.index).match(/image:\s*'([^']+)'/);
    const altMatch = block.slice(match.index).match(/galleryAlt:\s*\[([^]*?)\]/);
    const alts = altMatch
      ? [...altMatch[1].matchAll(/'([^']*)'/g)].map(m => m[1])
      : [];
    const allImages = [...new Set([
      ...(heroMatch ? [heroMatch[1]] : []),
      ...(imageMatch ? [imageMatch[1]] : []),
      ...images
    ])];
    pages.push({
      page: `${siteUrl}/tours/${id}.html`,
      images: allImages.map((src, idx) => ({
        loc: `${siteUrl}/${src.replace(/^\//, '')}`,
        title: alts[idx] || `Sea & Safari Tours — ${id.replace(/-/g, ' ')} photo ${idx + 1}`,
        caption: alts[idx] || undefined
      }))
    });
  }
  return pages;
}

function extractComboPages() {
  const start = script.indexOf('const COMBO_PACKAGES = [');
  const end = script.indexOf('];', start);
  const block = script.slice(start, end);
  const pages = [];
  const comboRe = /\{\s*id:\s*'([^']+)'[^]*?image:\s*'([^']+)'/g;
  let match;
  while ((match = comboRe.exec(block)) !== null) {
    pages.push({
      page: `${siteUrl}/combos/${match[1]}.html`,
      images: [{
        loc: `${siteUrl}/${match[2].replace(/^\//, '')}`,
        title: `Sea & Safari Tours — ${match[1].replace(/-/g, ' ')} combo package`
      }]
    });
  }
  return pages;
}

function extractGalleryPage() {
  const tours = extractTourPages();
  const images = [];
  tours.forEach(t => t.images.forEach(img => {
    if (!images.some(existing => existing.loc === img.loc)) images.push(img);
  }));
  return {
    page: `${siteUrl}/gallery.html`,
    images
  };
}

function buildXml(pages) {
  const urls = pages
    .filter(p => p.images.length)
    .map(p => {
      const imageTags = p.images.map(img => {
        const caption = img.caption
          ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>`
          : '';
        return `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${caption}
    </image:image>`;
      }).join('\n');
      return `  <url>
    <loc>${escapeXml(p.page)}</loc>
${imageTags}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const pages = [
  ...extractTourPages(),
  ...extractComboPages(),
  extractGalleryPage()
];

const outPath = path.join(root, 'sitemap-images.xml');
fs.writeFileSync(outPath, buildXml(pages));
console.log(`Wrote ${outPath} (${pages.length} URLs, ${pages.reduce((n, p) => n + p.images.length, 0)} images)`);
