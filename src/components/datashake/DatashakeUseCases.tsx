import React from 'react';
import '@/app/datashake/datashake.css';
import Script from 'next/script';

export default function DatashakeUseCases() {
  return (
    <>
      <section className="section-regular-padding"><div className="padding-global"><div className="container-large"><div className="cta-container h-430px"><div className="flex-v gap-2rem size-700px align-center z-index-1"><h2 className="heading-style-h2 text-align-center">What would you build with unlimited access to public conversation data?</h2><div className="type-wrapper"><div className="type-text"><div className="typed-words"></div></div><div className="type-embed w-embed w-script"><style dangerouslySetInnerHTML={{ __html: `
.typed-words::after {
  content: "|";
  display: inline;
  animation: blink 1s infinite;
}


@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
` }} />



<Script id="script-3656aa0d" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
  const initTyped = () => {
    if (typeof Typed !== 'undefined') {
      var typed = new Typed(".typed-words", {
  strings: ["Real-time crisis detection system", "Competitive intelligence dashboard", "Customer sentiment tracker", "Trend forecasting engine", "Brand health monitor", "Product feedback aggregator", "Market research platform", "Global reputation management system", "Adverse event detection", "Early warning system", "Customer experience improvements", "Detect product quality issues", "Track competitor pricing", "Map customer journeys", "Monitor KOL conversations", "Identify emerging trends",],
  typeSpeed: 45,
  backSpeed: 25,
  backDelay: 400,
  startDelay: 250,
  loop: true,
  showCursor: false,
  cursorChar: "|",
  attr: null,
});
    } else {
      setTimeout(initTyped, 100);
    }
  };
  initTyped();
` }} /></div></div></div><div className="background-image height-50"><div className="canvas"></div></div></div></div></div></section>
    </>
  );
}
