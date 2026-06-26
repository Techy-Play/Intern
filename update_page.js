const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'datashake', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf-8');

const compDir = path.join(process.cwd(), 'src', 'components', 'datashake');
const files = fs.readdirSync(compDir);

const newComps = [
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
  'DatashakeCTA',
  'DatashakeFeatureSection15',
  'DatashakeFeatureSection16',
  'DatashakeFeatureSection17',
  'DatashakeFeatureSection18',
  'DatashakeFeatureSection19'
];

let imports = newComps.map(c => `import ${c} from '@/components/datashake/${c}';`).join('\n');
let renders = newComps.map(c => `      <${c} />`).join('\n');

pageContent = pageContent.replace("import DatashakeFeatures from '@/components/datashake/DatashakeFeatures';", imports);
pageContent = pageContent.replace("      <DatashakeFeatures />", renders);

fs.writeFileSync(pagePath, pageContent);

// Delete the monolithic DatashakeFeatures.tsx
fs.unlinkSync(path.join(compDir, 'DatashakeFeatures.tsx'));

console.log('Successfully updated page.tsx and removed DatashakeFeatures.tsx');
