const fs = require('fs');
const path = require('path');

const compDir = path.join(process.cwd(), 'src', 'components', 'datashake');
const files = fs.readdirSync(compDir);

let count = 0;

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(compDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (!content.includes("@/app/datashake/datashake.css")) {
      content = content.replace(
        "import React from 'react';", 
        "import React from 'react';\nimport '@/app/datashake/datashake.css';"
      );
      fs.writeFileSync(filePath, content);
      count++;
    }
  }
});

console.log(`Added CSS import to ${count} components.`);
