"use client";
import React from 'react';
import './datashake.css';
import Script from 'next/script';
import DatashakeNavbar from '@/components/datashake/DatashakeNavbar';
import DatashakeHero from '@/components/datashake/DatashakeHero';
import DatashakeLogos from '@/components/datashake/DatashakeLogos';
import DatashakeDivider1 from '@/components/datashake/DatashakeDivider1';
import DatashakeProblem from '@/components/datashake/DatashakeProblem';
import DatashakeSolution from '@/components/datashake/DatashakeSolution';
import DatashakeDivider2 from '@/components/datashake/DatashakeDivider2';
import DatashakeUseCases from '@/components/datashake/DatashakeUseCases';
import DatashakeDivider3 from '@/components/datashake/DatashakeDivider3';
import DatashakeTabs from '@/components/datashake/DatashakeTabs';
import DatashakeDivider4 from '@/components/datashake/DatashakeDivider4';
import DatashakeTestimonials from '@/components/datashake/DatashakeTestimonials';
import DatashakeDivider5 from '@/components/datashake/DatashakeDivider5';
import DatashakeIntegrations from '@/components/datashake/DatashakeIntegrations';
import DatashakeDivider6 from '@/components/datashake/DatashakeDivider6';
import DatashakeFAQ from '@/components/datashake/DatashakeFAQ';
import DatashakeDivider7 from '@/components/datashake/DatashakeDivider7';
import DatashakeCTA from '@/components/datashake/DatashakeCTA';
import DatashakeFeatureSection15 from '@/components/datashake/DatashakeFeatureSection15';
import DatashakeFeatureSection16 from '@/components/datashake/DatashakeFeatureSection16';
import DatashakeFeatureSection17 from '@/components/datashake/DatashakeFeatureSection17';
import DatashakeFeatureSection18 from '@/components/datashake/DatashakeFeatureSection18';
import DatashakeFeatureSection19 from '@/components/datashake/DatashakeFeatureSection19';
import DatashakeFooter from '@/components/datashake/DatashakeFooter';

export default function DatashakePage() {
  React.useEffect(() => {
    const loadScript = (src: string) => new Promise<void>((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => resolve();
      document.body.appendChild(s);
    });

    const initScripts = async () => {
      await loadScript("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=69385e16d68663814109c132");
      await loadScript("/datashake-assets/webflow.01b582c3.8d07032b34e8c391.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js");
      await loadScript("/datashake-assets/ScrollTrigger.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js");
      await loadScript("https://cdn.jsdelivr.net/npm/@flowbase-co/boosters-tab-rotation-webflow@1.2.0/dist/tab-rotation.min.js");
      await loadScript("https://js-eu1.hsforms.net/forms/embed/developer/147277152.js");

      if ((window as any).Webflow) {
        (window as any).Webflow.destroy();
        (window as any).Webflow.ready();
        (window as any).Webflow.require('ix2').init();
      }
    };
    initScripts();
  }, []);

  return (
    <div className="datashake-page">

      
      <main className="main-wrapper">
      <DatashakeNavbar />
      <DatashakeHero />
      <DatashakeLogos />
      <DatashakeDivider1 />
      <DatashakeProblem />
      <DatashakeSolution />
      <DatashakeDivider2 />
      <DatashakeUseCases />
      <DatashakeDivider3 />
      <DatashakeTabs />
      <DatashakeDivider4 />
      <DatashakeTestimonials />
      <DatashakeDivider5 />
      <DatashakeIntegrations />
      <DatashakeDivider6 />
      <DatashakeFAQ />
      <DatashakeDivider7 />
      <DatashakeCTA />
      <DatashakeFeatureSection15 />
      <DatashakeFeatureSection16 />
      <DatashakeFeatureSection17 />
      <DatashakeFeatureSection18 />
      <DatashakeFeatureSection19 />
      <DatashakeFooter />
      </main>
      </div>
  );
}
