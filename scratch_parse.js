const fs = require('fs');
const html = fs.readFileSync('public/datashake.html', 'utf-8');

const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
if (headMatch) {
  const head = headMatch[1];
  const links = head.match(/<link[^>]*rel="stylesheet"[^>]*>/gi);
  const styles = head.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  console.log('LINKS:');
  console.log(links ? links.join('\n') : 'none');
  console.log('STYLES:');
  console.log(styles ? styles.join('\n') : 'none');
} else {
  console.log('No head found');
}
