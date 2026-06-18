const fs = require('fs');
const https = require('https');
const html = fs.readFileSync('voidzero.html', 'utf8');
const scripts = [...html.matchAll(/src="(\/assets\/[^"]+\.js)"/g)].map(m => m[1]);
scripts.forEach(s => {
  const url = 'https://voidzero.dev' + s;
  https.get(url, res => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      if(d.includes('artboard') || d.includes('stateMachine') || d.includes('State Machine 1')) {
        console.log('Found in', s);
        const match = d.match(/.{0,50}artboard.{0,50}/g);
        if(match) console.log(match.slice(0, 5));
        const match2 = d.match(/.{0,50}stateMachine.{0,50}/g);
        if(match2) console.log(match2.slice(0, 5));
      }
    });
  });
});
