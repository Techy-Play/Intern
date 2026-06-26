const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const compDir = path.join(process.cwd(), 'src', 'components', 'datashake');
const files = fs.readdirSync(compDir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(compDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes('<script dangerouslySetInnerHTML')) {
    let modified = false;
    
    // Replace <script> with <Script id="...">
    content = content.replace(/<script dangerouslySetInnerHTML=\{\{ __html: `([\s\S]*?)` \}\} \/>/g, (match, p1) => {
      modified = true;
      if (p1.trim() === '') {
        return ''; // remove empty scripts
      }
      const id = 'script-' + crypto.randomBytes(4).toString('hex');
      return `<Script id="${id}" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: \`${p1}\` }} />`;
    });
    
    if (modified) {
      if (!content.includes("import Script from 'next/script';")) {
        content = content.replace("import React from 'react';", "import React from 'react';\nimport Script from 'next/script';");
      }
      fs.writeFileSync(filePath, content);
      console.log('Fixed scripts in', file);
    }
  }
});
