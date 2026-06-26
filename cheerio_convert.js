const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync('public/datashake.html', 'utf-8');
const $ = cheerio.load(html, { xmlMode: false, decodeEntities: false });

const links = [];
$('head link[rel="stylesheet"]').each((i, el) => {
  links.push($.html(el));
});

const compDir = path.join(process.cwd(), 'src', 'components', 'datashake');
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

function convertToJSX(htmlStr) {
  let jsx = htmlStr;
  
  jsx = jsx.replace(/\bclass="/g, 'className="');
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  jsx = jsx.replace(/\bsrcset="/g, 'srcSet="');
  jsx = jsx.replace(/\bdatetime="/g, 'dateTime="');
  jsx = jsx.replace(/\bcrossorigin="/g, 'crossOrigin="');
  jsx = jsx.replace(/\bautoplay=""/gi, 'autoPlay={true}');
  jsx = jsx.replace(/\bplaysinline=""/gi, 'playsInline={true}');
  jsx = jsx.replace(/\bloop=""/gi, 'loop={true}');
  jsx = jsx.replace(/\bmuted=""/gi, 'muted={true}');
  
  // SVG attribute fixes
  const svgAttributes = [
    'fill-rule', 'clip-rule', 'stroke-width', 'stroke-linecap', 
    'stroke-linejoin', 'stroke-miterlimit', 'fill-opacity', 'stroke-opacity'
  ];
  svgAttributes.forEach(attr => {
    const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
    const regex = new RegExp(`\\b${attr}="`, 'g');
    jsx = jsx.replace(regex, `${camel}="`);
  });
  
  // style fixes
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    const parts = p1.split(';').filter(p => p.trim() !== '');
    if (parts.length === 0) return '';
    const styleObj = parts.map(part => {
      const splitIndex = part.indexOf(':');
      if (splitIndex === -1) return '';
      let key = part.slice(0, splitIndex).trim();
      let val = part.slice(splitIndex + 1).trim();
      if (!key) return '';
      if (key.startsWith('-webkit-') || key.startsWith('-ms-')) {
          // React custom properties or vendor prefixes
          // let's just make it a string for vendor prefixes but camelCase standard
          key = key.replace(/^-ms-/, 'ms-').replace(/^-webkit-/, 'Webkit-');
      }
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      val = val.replace(/'/g, "\\'");
      return `${camelKey}: '${val}'`;
    }).filter(Boolean).join(', ');
    return `style={{ ${styleObj} }}`;
  });
  
  const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
  selfClosingTags.forEach(tag => {
    const regex = new RegExp(`(<${tag}\\b[^>]*?)(?<!/)>`, 'gi');
    jsx = jsx.replace(regex, '$1 />');
  });

  jsx = jsx.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, p1) => {
    const escaped = p1.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<style dangerouslySetInnerHTML={{ __html: \`${escaped}\` }} />`;
  });
  
  jsx = jsx.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (match, p1) => {
    const escaped = p1.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<script dangerouslySetInnerHTML={{ __html: \`${escaped}\` }} />`;
  });

  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

  return jsx;
}

const sections = {
  DatashakeNavbar: [],
  DatashakeHero: [],
  DatashakeLogos: [],
  DatashakeFeatures: [],
  DatashakeFooter: []
};

// Also bring in the global-styles wrapper as part of navbar or something, 
// actually let's just add it to the page directly.
const globalStyles = $('.global-styles').html();

const children = $('.main-wrapper').children();

children.each((i, el) => {
  const $el = $(el);
  const tag = el.name.toLowerCase();
  if (tag === 'script' || tag === 'noscript') return;
  
  let htmlChunk = $.html(el);
  
  if ($el.hasClass('nav_component') || $el.hasClass('nav_menu') || $el.hasClass('navbar') || tag === 'nav') {
    sections.DatashakeNavbar.push(htmlChunk);
  } else if ($el.hasClass('hero-section')) {
    sections.DatashakeHero.push(htmlChunk);
  } else if ($el.hasClass('logo-section')) {
    sections.DatashakeLogos.push(htmlChunk);
  } else if ($el.hasClass('footer-section') || tag === 'footer') {
    sections.DatashakeFooter.push(htmlChunk);
  } else {
    sections.DatashakeFeatures.push(htmlChunk);
  }
});

Object.keys(sections).forEach(compName => {
  const chunks = sections[compName];
  if (chunks.length === 0) return;
  
  const rawHtml = chunks.join('\n');
  const jsx = convertToJSX(rawHtml);
  
  const content = `import React from 'react';\n\nexport default function ${compName}() {\n  return (\n    <>\n      ${jsx}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(compDir, `${compName}.tsx`), content);
});

const activeComps = Object.keys(sections).filter(k => sections[k].length > 0);
const imports = activeComps.map(c => `import ${c} from '@/components/datashake/${c}';`).join('\n');
const renders = activeComps.map(c => `      <${c} />`).join('\n');

const pageContent = `"use client";
import React from 'react';
import './datashake.css';
${imports}

export default function DatashakePage() {
  return (
    <div className="datashake-page">
      ${convertToJSX(links.join('\n'))}
      <div className="global-styles w-embed">
         ${convertToJSX(globalStyles || '')}
      </div>
      <main className="main-wrapper">
${renders}
      </main>
    </div>
  );
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'datashake', 'page.tsx'), pageContent);
console.log('Successfully generated components and page.tsx');
