const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'datashake', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf-8');

const styleStart = pageContent.indexOf('<div className="global-styles w-embed">');
if (styleStart !== -1) {
  const cssStart = pageContent.indexOf('`', styleStart) + 1;
  const cssEnd = pageContent.indexOf('`', cssStart);
  
  const cssContent = pageContent.substring(cssStart, cssEnd);
  
  const styleBlockEnd = pageContent.indexOf('</div>', cssEnd) + 6;
  
  // Remove from page.tsx
  const newPageContent = pageContent.substring(0, styleStart) + pageContent.substring(styleBlockEnd);
  fs.writeFileSync(pagePath, newPageContent);
  
  // Prepend to datashake.css
  const cssPath = path.join(process.cwd(), 'src', 'app', 'datashake', 'datashake.css');
  let currentCss = fs.readFileSync(cssPath, 'utf-8');
  fs.writeFileSync(cssPath, cssContent + '\n\n' + currentCss);
  
  console.log('CSS moved successfully.');
} else {
  console.log('Could not find global-styles block.');
}
