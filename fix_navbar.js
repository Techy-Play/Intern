const fs = require('fs');
const path = require('path');

const pagePath = path.join(process.cwd(), 'src', 'app', 'datashake', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf-8');

// Remove the Next.js <Script> tags we added earlier
pageContent = pageContent.replace(/<Script src=".*?" strategy="lazyOnload" \/>\n\s*/g, '');

// Add the React useEffect hook to load scripts sequentially
const hookCode = `  React.useEffect(() => {
    const loadScript = (src) => new Promise((resolve) => {
      if (document.querySelector(\`script[src="\${src}"]\`)) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      document.body.appendChild(s);
    });

    const initScripts = async () => {
      await loadScript("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69385e16d68663814109c132");
      await loadScript("https://cdn.prod.website-files.com/69385e16d68663814109c132/js/webflow.01b582c3.8d07032b34e8c391.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js");
      await loadScript("https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js");
      await loadScript("https://cdn.jsdelivr.net/npm/@flowbase-co/boosters-tab-rotation-webflow@1.2.0/dist/tab-rotation.min.js");
      await loadScript("https://js-eu1.hsforms.net/forms/embed/developer/147277152.js");

      if (window.Webflow) {
        window.Webflow.destroy();
        window.Webflow.ready();
        window.Webflow.require('ix2').init();
      }
    };
    initScripts();
  }, []);
`;

pageContent = pageContent.replace('export default function DatashakePage() {\n  return (', 'export default function DatashakePage() {\n' + hookCode + '\n  return (');

fs.writeFileSync(pagePath, pageContent);
console.log('Successfully updated page.tsx with sequential script loading hook.');
