const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/voidzero');
const files = [
  'VoidZeroDeveloperStats.tsx',
  'VoidZeroFeaturedResources.tsx',
  'VoidZeroInvestors.tsx',
  'VoidZeroMission.tsx',
  'VoidZeroOpenSource.tsx',
  'VoidZeroTrustedTeams.tsx'
];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if not present
  if (!content.includes('VoidZeroBorder')) {
    // Find the last import statement
    const importRegex = /^import .* from .*;/gm;
    let match;
    let lastImportIndex = 0;
    while ((match = importRegex.exec(content)) !== null) {
      lastImportIndex = match.index + match[0].length;
    }
    
    const importStmt = `\nimport { VoidZeroBorder } from './VoidZeroBorder';`;
    content = content.slice(0, lastImportIndex) + importStmt + content.slice(lastImportIndex);
  }

  // Replace wrapper wrapper--ticks border-t
  content = content.replace(/<section className="wrapper wrapper--ticks border-t (.*?)"(>| style=.*?>)/g, '<VoidZeroBorder theme="light" containerClassName="$1"$2');
  
  // Replace wrapper border-t wrapper--ticks
  content = content.replace(/<section className="wrapper border-t wrapper--ticks (.*?)"(>| style=.*?>)/g, '<VoidZeroBorder theme="light" containerClassName="$1"$2');

  // Replace wrapper wrapper--ticks (no border-t) - just in case
  content = content.replace(/<section className="wrapper wrapper--ticks (.*?)"(>| style=.*?>)/g, '<VoidZeroBorder theme="light" showTopBorder={false} containerClassName="$1"$2');

  // Replace wrapper px-... (no ticks or border-t)
  content = content.replace(/<section className="wrapper (.*?)"(>| style=.*?>)/g, '<VoidZeroBorder theme="light" showTopBorder={false} containerClassName="$1"$2');

  // Replace </section> with </VoidZeroBorder> but only for the ones we opened.
  // Wait, doing this via regex might replace all </section>.
  // Since these components only use <section> for the wrappers, it's safe to replace all </section> with </VoidZeroBorder>.
  // Let's verify if there are any other <section> tags.
  // Actually, yes, in these specific files, all <section>s are wrappers.
  content = content.replace(/<\/section>/g, '</VoidZeroBorder>');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Refactored ${file}`);
});
