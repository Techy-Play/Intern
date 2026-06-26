const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'datashake', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf-8');

pageContent = pageContent.replace('const loadScript = (src) => new Promise((resolve) => {', 'const loadScript = (src: string) => new Promise<void>((resolve) => {');

fs.writeFileSync(pagePath, pageContent);
console.log('Fixed TS error');
