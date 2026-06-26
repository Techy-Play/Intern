const fs = require('fs');
const path = require('path');
const https = require('https');

const publicAssetsDir = path.join(__dirname, 'public', 'datashake-assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

const srcDirs = [
  path.join(__dirname, 'src', 'components', 'datashake'),
  path.join(__dirname, 'src', 'app', 'datashake')
];

let urls = new Set();
let filePaths = [];

// Step 1: Collect URLs and files
function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      filePaths.push(fullPath);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const regex = /https:\/\/cdn\.prod\.website-files\.com\/[^\s"'<>)\]}]+/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        let cleanUrl = match[0];
        // Strip out trailing commas or backticks if they get caught by regex
        cleanUrl = cleanUrl.replace(/[,`]*$/, '');
        urls.add(cleanUrl);
      }
    }
  }
}

srcDirs.forEach(scanDir);
const urlsArray = Array.from(urls);

// Step 2: Download files
async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // handle redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  console.log(`Found ${urlsArray.length} unique URLs to download.`);
  let downloadedCount = 0;
  for (const url of urlsArray) {
    // decode uri component to handle spaces like %20 properly for local filenames
    const filename = decodeURIComponent(path.basename(url));
    const localPath = path.join(publicAssetsDir, filename);
    if (!fs.existsSync(localPath)) {
      try {
        await downloadFile(url, localPath);
        downloadedCount++;
      } catch (e) {
        console.error('Error downloading:', url, e.message);
      }
    } else {
      // console.log(`Skipping ${filename}, already exists.`);
    }
  }
  console.log(`Successfully downloaded ${downloadedCount} new files.`);

  // Step 3: Replace URLs in files
  console.log('Replacing URLs in source files...');
  let updatedFilesCount = 0;
  for (const filePath of filePaths) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;
    
    // Sort urls by length descending so we don't do partial replacements
    urlsArray.sort((a, b) => b.length - a.length);

    for (const url of urlsArray) {
      const filename = decodeURIComponent(path.basename(url));
      const localUrlPath = `/datashake-assets/${filename}`;
      
      // Escape URL for regex
      const escapedUrl = url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedUrl, 'g');
      
      if (regex.test(content)) {
        content = content.replace(regex, localUrlPath);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf-8');
      updatedFilesCount++;
    }
  }
  console.log(`Successfully updated URLs in ${updatedFilesCount} files.`);
}

main().catch(console.error);
