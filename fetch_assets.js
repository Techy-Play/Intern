const https = require('https');

https.get('https://voidzero.dev', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const urls = data.match(/assets\/[a-zA-Z0-9-_\.]+\.(webp|png|jpg|js|css)/g) || [];
    console.log(Array.from(new Set(urls)).join('\n'));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
