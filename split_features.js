const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'components', 'datashake', 'DatashakeFeatures.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Remove the import and function wrapper
content = content.replace(/import React from 'react';\s*export default function DatashakeFeatures\(\) \{\s*return \(\s*<>\s*/, '');
content = content.replace(/\s*<\/>\s*\);\s*\}\s*$/, '');

const sectionTags = [];
let currentIndex = 0;

// simple tag matcher to find root level elements
// Since DatashakeFeatures contains top-level <section> or <div> tags
while (currentIndex < content.length) {
  const nextDiv = content.indexOf('<div className="section-regular-padding"', currentIndex);
  const nextSec = content.indexOf('<section ', currentIndex);
  
  if (nextDiv === -1 && nextSec === -1) break;
  
  let matchIndex = -1;
  let tag = '';
  
  if (nextDiv !== -1 && nextSec !== -1) {
    if (nextDiv < nextSec) { matchIndex = nextDiv; tag = 'div'; }
    else { matchIndex = nextSec; tag = 'section'; }
  } else if (nextDiv !== -1) {
    matchIndex = nextDiv; tag = 'div';
  } else {
    matchIndex = nextSec; tag = 'section';
  }

  // Find the matching closing tag
  let depth = 0;
  let i = matchIndex;
  while (i < content.length) {
    if (content.substr(i, tag.length + 1) === `<${tag}`) {
      depth++;
    } else if (content.substr(i, tag.length + 2) === `</${tag}`) {
      depth--;
      if (depth === 0) {
        // found end!
        const endIndex = content.indexOf('>', i) + 1;
        sectionTags.push(content.substring(matchIndex, endIndex));
        currentIndex = endIndex;
        break;
      }
    }
    i++;
  }
}

// We expect around 7-8 sections. Let's name them according to content.
const compNames = [
  'DatashakeDivider1',
  'DatashakeProblem',
  'DatashakeSolution',
  'DatashakeDivider2',
  'DatashakeUseCases',
  'DatashakeDivider3',
  'DatashakeTabs',
  'DatashakeDivider4',
  'DatashakeTestimonials',
  'DatashakeDivider5',
  'DatashakeIntegrations',
  'DatashakeDivider6',
  'DatashakeFAQ',
  'DatashakeDivider7',
  'DatashakeCTA'
];

let generatedComps = [];
for (let i = 0; i < sectionTags.length; i++) {
  // if we run out of names, use generic
  const name = compNames[i] || `DatashakeFeatureSection${i}`;
  const jsx = sectionTags[i];
  
  const compContent = `import React from 'react';\n\nexport default function ${name}() {\n  return (\n    <>\n      ${jsx}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(process.cwd(), 'src', 'components', 'datashake', `${name}.tsx`), compContent);
  generatedComps.push(name);
}

console.log('Generated components:', generatedComps.join(', '));
