const fs = require('fs');
const path = require('path');
const https = require('https');

const hashes = {
  0:"db80639074bc0296",
  102:"58f76f2901951073",
  14:"40144d8322818807",
  185:"5959ac50b3c857f1",
  258:"65add74e46fe5245",
  408:"2aaad8b9b407aaec",
  409:"e8e7e6855b442808",
  456:"64873797e35e968c",
  471:"2f8fd4260fe41f39",
  482:"22b66e874d42861f",
  520:"22b828e28e7d2015",
  573:"c42549641b7d4501",
  599:"496d56dd8c063ec0",
  696:"ad6dcd2fc75b294c",
  87:"36b8fb49256177c8",
  966:"43f4d187dbb3f1f5",
  967:"099d582856ba13a5"
};

const baseUrl = 'https://cdn.prod.website-files.com/69385e16d68663814109c132/js/';
const destDir = path.join(__dirname, 'public', 'datashake-assets');

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
  for (const key of Object.keys(hashes)) {
    const filename = `webflow.achunk.${hashes[key]}.js`;
    const url = `${baseUrl}${filename}`;
    const dest = path.join(destDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log('Done downloading chunks.');
}

main();
