const fs = require('fs');
const path = require('path');

const srcDirs = [
  path.join(__dirname, 'src', 'components', 'datashake'),
  path.join(__dirname, 'src', 'app', 'datashake')
];

let urls = new Set();

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      // match any url starting with https://cdn.prod.website-files.com
      const regex = /https:\/\/cdn\.prod\.website-files\.com\/[^\s"'<>)\]]+/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        urls.add(match[0]);
      }
    }
  }
}

srcDirs.forEach(scanDir);

let markdown = '# Datashake Assets to Download\n\n';
markdown += 'Below is a list of all external assets (images, Lottie JSON files, etc.) used in the Datashake components. ';
markdown += 'To make the components fully reusable locally, you should download these files and store them in your `public` directory (e.g. `public/datashake-assets/`).\n\n';

markdown += '| Original URL | Recommended Local Path |\n';
markdown += '| --- | --- |\n';

const urlsArray = Array.from(urls).sort();
for (const url of urlsArray) {
  const filename = path.basename(url);
  const localPath = `/datashake-assets/${decodeURIComponent(filename)}`;
  markdown += `| [${filename}](${url}) | \`${localPath}\` |\n`;
}

fs.writeFileSync(path.join(__dirname, 'datashake-assets-to-download.md'), markdown);
console.log('Markdown generated with ' + urlsArray.length + ' assets.');
