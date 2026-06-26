const fs = require('fs');
const path = require('path');

const cssPath = path.join(process.cwd(), 'src', 'app', 'datashake', 'datashake.css');
const missingCss = fs.readFileSync('missing_styles.css', 'utf-8');

let datashakeCss = fs.readFileSync(cssPath, 'utf-8');

// Find where the Webflow Shared CSS begins
const sharedCssMarker = '/* Webflow Shared CSS */';
const markerIndex = datashakeCss.indexOf(sharedCssMarker);

if (markerIndex !== -1) {
  // Replace everything before the marker with the missing CSS
  datashakeCss = missingCss + '\n\n' + datashakeCss.substring(markerIndex);
  fs.writeFileSync(cssPath, datashakeCss);
  console.log('Successfully restored the missing 15.5KB custom CSS.');
} else {
  console.log('Marker not found!');
}
