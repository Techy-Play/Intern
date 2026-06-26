const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'components', 'datashake', 'DatashakeUseCases.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const regex = /var typed = new Typed\(\"\.typed-words\", \{([\s\S]*?)\}\);/;
const replacement = `const initTyped = () => {
    if (typeof Typed !== 'undefined') {
      var typed = new Typed(".typed-words", {$1});
    } else {
      setTimeout(initTyped, 100);
    }
  };
  initTyped();`;

content = content.replace(regex, replacement);
fs.writeFileSync(filePath, content);
console.log('Fixed Typed.js initialization');
