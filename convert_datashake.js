const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('public/datashake.html', 'utf-8');

// 1. Extract Body
let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  console.log("No body found");
  process.exit(1);
}
let bodyHTML = bodyMatch[1];

// Remove the injected scripts from Webflow at the end of body to keep JSX clean
bodyHTML = bodyHTML.replace(/<script[\s\S]*?<\/script>/gi, '');
bodyHTML = bodyHTML.replace(/<!--[\s\S]*?-->/g, '');

// Fix self-closing tags
const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
selfClosingTags.forEach(tag => {
  const regex = new RegExp(`(<${tag}\\b[^>]*?)(?<!/)>`, 'gi');
  bodyHTML = bodyHTML.replace(regex, '$1 />');
});

// Convert class to className
bodyHTML = bodyHTML.replace(/\bclass="/g, 'className="');
// Convert for to htmlFor
bodyHTML = bodyHTML.replace(/\bfor="/g, 'htmlFor="');
// Fix inline styles - there's one known inline style: style="display:none;visibility:hidden"
bodyHTML = bodyHTML.replace(/style="display:none;visibility:hidden"/g, "style={{ display: 'none', visibility: 'hidden' }}");
// There might be others, let's just catch any style="..."
bodyHTML = bodyHTML.replace(/style="([^"]+)"/g, (match, p1) => {
    const parts = p1.split(';').filter(p => p.trim() !== '');
    const styleObj = parts.map(part => {
        const [key, val] = part.split(':').map(s => s.trim());
        if (!key) return '';
        // camelCase key
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelKey}: '${val}'`;
    }).join(', ');
    return `style={{ ${styleObj} }}`;
});

// Create components directory
const compDir = path.join(process.cwd(), 'src', 'components', 'datashake');
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

// We need to parse top level sections
// Let's use a very basic tag splitter for the top level
const sections = [];
let depth = 0;
let currentSection = '';
let currentStart = 0;

// Simple state machine parser to get top-level elements
const tokens = bodyHTML.split(/(<[^>]+>)/g);
let chunkStr = '';
tokens.forEach(token => {
  chunkStr += token;
  if (token.startsWith('</') && !token.startsWith('</>')) {
    depth--;
  } else if (token.startsWith('<') && !token.startsWith('<!--') && !token.endsWith('/>')) {
    // some tags don't nest but let's assume valid HTML
    depth++;
  }
  
  if (depth === 0 && chunkStr.trim()) {
    sections.push(chunkStr.trim());
    chunkStr = '';
  }
});

// Write each section to a separate component file
const compNames = [];
sections.forEach((sec, i) => {
  if (!sec) return;
  // Determine a name for the component based on className or tag
  let compName = `DatashakeSection${i}`;
  if (sec.includes('className="nav_menu w-nav-menu"') || sec.includes('className="navbar')) compName = `DatashakeNavbar`;
  else if (sec.includes('hero-section')) compName = `DatashakeHero`;
  else if (sec.includes('logo-section')) compName = `DatashakeLogos`;
  else if (sec.includes('footer-section')) compName = `DatashakeFooter`;
  
  // if multiple have same name (like dividers), append index
  if (compNames.includes(compName)) {
    compName = `${compName}_${i}`;
  }
  compNames.push(compName);
  
  const content = `import React from 'react';\n\nexport default function ${compName}() {\n  return (\n    <>\n      ${sec}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(compDir, `${compName}.tsx`), content);
});

console.log('Created components:', compNames.join(', '));

// Generate page.tsx
const pageImports = compNames.map(c => `import ${c} from '@/components/datashake/${c}';`).join('\n');
const pageRender = compNames.map(c => `      <${c} />`).join('\n');

const pageContent = `import React from 'react';
import Head from 'next/head';
${pageImports}

export default function DatashakePage() {
  return (
    <div className="datashake-page">
      <link href="https://cdn.prod.website-files.com/69385e16d68663814109c132/css/datashake-staging.webflow.shared.da4fed70c.css" rel="stylesheet" type="text/css" crossOrigin="anonymous"/>
      <link href="https://cdn.prod.website-files.com/69385e16d68663814109c132/css/datashake-staging.webflow.69385e18d68663814109c1d2.4ed07c329.opt.css" rel="stylesheet" type="text/css" crossOrigin="anonymous"/>
      
${pageRender}
    </div>
  );
}
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'datashake', 'page.tsx'), pageContent);
console.log('Updated src/app/datashake/page.tsx');
