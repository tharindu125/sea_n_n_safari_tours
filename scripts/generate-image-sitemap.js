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

function resolveAssetPath(token) {
  const trimmed = token.trim().replace(/,$/, '');
  const quoted = trimmed.match(/^'([^']+)'$/);
  if (quoted) return quoted[1];
  const named = trimmed.match(/^([A-Z][A-Z0-9_]*)$/);
  if (named) {
    const m = script.match(new RegExp(`const ${named[1]} = '([^']+)'`));
    if (m) return m[1];
  }
  return null;
}

function extractTourBlock(tourId, source) {
  const re = new RegExp(`'${tourId}':\\s*\\{`);
  const start = source.search(re);
  if (start === -1) return '';
  let depth = 0;
  let began = false;
  for (let i = start; i < source.length; i += 1) {
    if (source[i] === '{') {
      depth += 1;
      began = true;
    } else if (source[i] === '}') {
      depth -= 1;
      if (began && depth === 0) return source.slice(start, i + 1);
    }
  }
  return '';
}

function extractTourPages() {
  const toursBlock = extractBlock('TOURS');
  const ids = [...toursBlock.matchAll(/'([a-z-]+)':\s*\{/g)].map(m => m[1]);
  return ids.map(id => {
    const block = extractTourBlock(id, toursBlock);
    const galleryMatch = block.match(/gallery:\s*\[([\s\S]*?)\]/);
    const galleryTokens = galleryMatch
      ? galleryMatch[1].split('\n').flatMap(line => line.split(','))
      : [];
    const galleryImages = galleryTokens.map(resolveAssetPath).filter(Boolean);
    const heroMatch = block.match(/heroImage:\s*(?:'([^']+)'|([A-Z][A-Z0-9_]*))/);
    const imageMatch = block.match(/^\s*image:\s*(?:'([^']+)'|([A-Z][A-Z0-9_]*))/m);
    const heroPath = heroMatch
      ? (heroMatch[1] || resolveAssetPath(heroMatch[2]))
      : null;
    const cardPath = imageMatch
      ? (imageMatch[1] || resolveAssetPath(imageMatch[2]))
      : null;
    const altMatch = block.match(/galleryAlt:\s*\[([\s\S]*?)\]/);
    const alts = altMatch
      ? [...altMatch[1].matchAll(/'([^']*)'/g)].map(m => m[1])
      : [];
    const allImages = [...new Set([heroPath, cardPath, ...galleryImages].filter(Boolean))];
    return {
      page: `${siteUrl}/tours/${id}.html`,
      images: allImages.map((src, idx) => ({
        loc: `${siteUrl}/${src.replace(/^\//, '')}`,
        title: alts[idx] || `Sea & Safari Tours — ${id.replace(/-/g, ' ')} photo ${idx + 1}`,
        caption: alts[idx] || undefined
      }))
    };
  });
}

function extractComboPages() {
  const start = script.indexOf('const COMBO_PACKAGES = [');
  const end = script.indexOf('];', start);
  const block = script.slice(start, end);
  const pages = [];
  const comboRe = /\{\s*id:\s*'([^']+)'[\s\S]*?image:\s*(?:'([^']+)'|([A-Z][A-Z0-9_]*))/g;
  let match;
  while ((match = comboRe.exec(block)) !== null) {
    const src = match[2] || resolveAssetPath(match[3]);
    if (!src) continue;
    pages.push({
      page: `${siteUrl}/combos/${match[1]}.html`,
      images: [{
        loc: `${siteUrl}/${src.replace(/^\//, '')}`,
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

function extractAirportShuttlePage() {
  return {
    page: `${siteUrl}/airport-shuttle.html`,
    images: [
      'assets/images/airport-shuttle/aircraft_landing_sky.jpg',
      'assets/images/airport-shuttle/private_airport_transfer_vehicle.jpg',
      'assets/images/airport-shuttle/colombo_airport_arrivals.jpg'
    ].map(src => ({
      loc: `${siteUrl}/${src}`,
      title: 'Sea & Safari Tours — Colombo Airport (CMB) to Mirissa shuttle',
      caption: src.includes('aircraft') ? 'Aircraft arrival for international travelers' : 'Private AC shuttle vehicle Mirissa transfer'
    }))
  };
}

const pages = [
  ...extractTourPages(),
  ...extractComboPages(),
  extractGalleryPage(),
  extractAirportShuttlePage()
];

const outPath = path.join(root, 'sitemap-images.xml');
fs.writeFileSync(outPath, buildXml(pages));
console.log(`Wrote ${outPath} (${pages.length} URLs, ${pages.reduce((n, p) => n + p.images.length, 0)} images)`);
