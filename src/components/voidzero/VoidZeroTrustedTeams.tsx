import React from 'react';
import { VoidZeroBorder } from './VoidZeroBorder';

const logos = [
  { id: 'shopify', src: '/assets/shopify.CQApybR0.svg', alt: 'Shopify' },
  { id: 'openai', src: '/assets/openai.C-wIkBsS.svg', alt: 'OpenAI' },
  { id: 'framer', src: '/assets/framer.CYQ_YXyZ.svg', alt: 'Framer' },
  { id: 'linear', src: '/assets/linear.BWHZTF1C.svg', alt: 'Linear' },
  { id: 'huggingface', src: '/assets/hugging-face.D3UbJgv4.svg', alt: 'Hugging Face' },
  { id: 'cloudflare', src: 'data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20101.4%2033.5\'%3e%3cdefs%3e%3cstyle%3e%20.a%20{%20fill:%20%23fff;%20}%20.b%20{%20fill:%20%23f48120;%20}%20.c%20{%20fill:%20%23faad3f;%20}%20.d%20{%20fill:%20%23404041;%20}%20%3c/style%3e%3c/defs%3e%3ctitle%3eCloudflare%20logo%3c/title%3e%3cpath%20class=\'a\'%20d=\'M94.7,10.6,89.1,9.3l-1-.4-25.7.2V21.5l32.3.1Z\'/%3e%3cpath%20class=\'b\'%20d=\'M84.2,20.4a2.85546,2.85546,0,0,0-.3-2.6,3.09428,3.09428,0,0,0-2.1-1.1l-17.4-.2c-.1,0-.2-.1-.3-.1a.1875.1875,0,0,1,0-.3c.1-.2.2-.3.4-.3L82,15.6a6.29223,6.29223,0,0,0,5.1-3.8l1-2.6c0-.1.1-.2,0-.3A11.39646,11.39646,0,0,0,66.2,7.7a5.45941,5.45941,0,0,0-3.6-1A5.20936,5.20936,0,0,0,58,11.3a5.46262,5.46262,0,0,0,.1,1.8A7.30177,7.30177,0,0,0,51,20.4a4.102,4.102,0,0,0,.1,1.1.3193.3193,0,0,0,.3.3H83.5c.2,0,.4-.1.4-.3Z\'/%3e%3cpath%20class=\'c\'%20d=\'M89.7,9.2h-.5c-.1,0-.2.1-.3.2l-.7,2.4a2.85546,2.85546,0,0,0,.3,2.6,3.09428,3.09428,0,0,0,2.1,1.1l3.7.2c.1,0,.2.1.3.1a.1875.1875,0,0,1,0,.3c-.1.2-.2.3-.4.3l-3.8.2a6.29223,6.29223,0,0,0-5.1,3.8l-.2.9c-.1.1,0,.3.2.3H98.5a.26517.26517,0,0,0,.3-.3,10.87184,10.87184,0,0,0,.4-2.6,9.56045,9.56045,0,0,0-9.5-9.5\'/%3e%3cpath%20class=\'d\'%20d=\'M100.5,27.2a.9.9,0,1,1,.9-.9.89626.89626,0,0,1-.9.9m0-1.6a.7.7,0,1,0,.7.7.68354.68354,0,0,0-.7-.7m.4,1.2h-.2l-.2-.3h-.2v.3h-.2v-.9h.5a.26517.26517,0,0,1,.3.3c0,.1-.1.2-.2.3l.2.3Zm-.3-.5c.1,0,.1,0,.1-.1a.09794.09794,0,0,0-.1-.1h-.3v.3h.3Zm-89.7-.9h2.2v6h3.8v1.9h-6Zm8.3,3.9a4.10491,4.10491,0,0,1,4.3-4.1,4.02,4.02,0,0,1,4.2,4.1,4.10491,4.10491,0,0,1-4.3,4.1,4.07888,4.07888,0,0,1-4.2-4.1m6.3,0a2.05565,2.05565,0,0,0-2-2.2,2.1025,2.1025,0,0,0,0,4.2c1.2.2,2-.8,2-2m4.9.5V25.4h2.2v4.4c0,1.1.6,1.7,1.5,1.7a1.39926,1.39926,0,0,0,1.5-1.6V25.4h2.2v4.4c0,2.6-1.5,3.7-3.7,3.7-2.3-.1-3.7-1.2-3.7-3.7m10.7-4.4h3.1c2.8,0,4.5,1.6,4.5,3.9s-1.7,4-4.5,4h-3V25.4Zm3.1,5.9a2.00909,2.00909,0,1,0,0-4h-.9v4Zm7.6-5.9h6.3v1.9H54v1.3h3.7v1.8H54v2.9H51.8Zm9.4,0h2.2v6h3.8v1.9h-6Zm11.7-.1h2.2l3.4,8H76.1l-.6-1.4H72.4l-.6,1.4H69.5Zm2,4.9L74,28l-.9,2.2Zm6.4-4.8H85a3.41818,3.41818,0,0,1,2.6.9,2.62373,2.62373,0,0,1-.9,4.2l1.9,2.8H86.1l-1.6-2.4h-1v2.4H81.3Zm3.6,3.8c.7,0,1.2-.4,1.2-.9,0-.6-.5-.9-1.2-.9H83.5v1.9h1.4Zm6.5-3.8h6.4v1.8H93.6v1.2h3.8v1.8H93.6v1.2h4.3v1.9H91.4ZM6.1,30.3a1.97548,1.97548,0,0,1-1.8,1.2,2.1025,2.1025,0,0,1,0-4.2,2.0977,2.0977,0,0,1,1.9,1.3H8.5a4.13459,4.13459,0,0,0-4.2-3.3A4.1651,4.1651,0,0,0,0,29.4a4.07888,4.07888,0,0,0,4.2,4.1,4.31812,4.31812,0,0,0,4.2-3.2Z\'/%3e%3c/svg%3e', alt: 'Cloudflare' },
  { id: 'mercedes', src: '/assets/mercedes.BcDJwg4x.svg', alt: 'Mercedes' },
];

export function VoidZeroTrustedTeams() {
  return (
    <VoidZeroBorder theme="light" containerClassName="pt-10 md:pt-14 md:pb-5 flex flex-col items-center justify-center md:gap-2">
      <p className="self-stretch text-center text-balance text-nickel max-w-[75vw] mx-auto md:max-w-full">
        Trusted by the world&apos;s best software teams
      </p>
      
      <div className="carousel-container">
        <div className="bracket bracket-left">
          <svg width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="bracket-svg">
            <path d="M4.65198 30C1.48018 25.4273 0 20.4388 0 15.0346C0 9.59584 1.48018 4.53811 4.65198 0H8C5.42731 4.98845 4.29956 10.0462 4.29956 15.0346C4.29956 20.0231 5.39207 25.0462 8 30H4.65198Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="carousel-viewport relative w-full overflow-hidden my-6">
          <div className="flex animate-marquee gap-[var(--logo-gap,2rem)] justify-center">
            {logos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="logo-item flex items-center justify-center min-w-[var(--logo-width,120px)] opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img src={logo.src} alt={logo.alt} className="logo-image h-8 max-w-full object-contain filter grayscale" />
              </div>
            ))}
          </div>
        </div>

        <div className="bracket bracket-right">
          <svg width="8" height="30" viewBox="0 0 8 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="bracket-svg">
            <path d="M3.34802 30C6.51982 25.4273 8 20.4388 8 15.0346C8 9.59584 6.51982 4.53811 3.34802 0H0C2.57269 4.98845 3.70044 10.0462 3.70044 15.0346C3.70044 20.0231 2.60793 25.0462 0 30H3.34802Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </VoidZeroBorder>
  );
}
