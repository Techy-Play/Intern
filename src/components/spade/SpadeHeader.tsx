'use client';

import { useState, useRef, useEffect } from 'react';

// Dropdown Links data matching the rich dropdown structure
const solutionsUseCases = [
  { 
    label: 'Risk & Authorization', 
    desc: 'Automate real-time decisioning', 
    href: '/use-case/risk-authorization/',
    icon: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/padlock-icon.svg'
  },
  { 
    label: 'Rewards & Attribution', 
    desc: 'Reward the right spend, right away', 
    href: '/use-case/rewards-and-attribution/',
    icon: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/heart-icon.svg'
  },
  { 
    label: 'Analytics & AI', 
    desc: 'Turn messy data into intelligence', 
    href: '/use-case/analytics-and-ai/',
    icon: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/analytics-icon.svg'
  },
  { 
    label: 'User Experience', 
    desc: 'Improve how transactions appear', 
    href: '/use-case/user-experience/',
    icon: 'https://spadewp.wpenginepowered.com/wp-content/uploads/2025/12/user-icon.svg'
  },
];

const solutionsIndustries = [
  { label: 'Fintechs', desc: 'Build with clean transaction data', href: '/industry/fintechs/' },
  { label: 'Banks', desc: 'Modernize your data foundation', href: '/industry/banks/' },
  { label: 'AI', desc: 'Power intelligent automation at scale', href: '/industry/ai/' },
  { label: 'Ecosystem Partners', desc: 'Build stronger payment partnerships', href: '/industry/ecosystem-partners/' },
];

const companyLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Security', href: '/security/' },
  { label: 'Resources', href: '/resources/' },
];

export default function SpadeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>('solutions');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <header 
      ref={headerRef}
      className={`sticky inset-x-0 top-0 z-50 h-[var(--header-height)] w-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-white' : 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)]'}`}
    >
      <div className="spade-container h-full relative z-50 bg-white">
        <div className="flex h-full items-center justify-between gap-x-8">
          {/* Logo */}
          <a aria-label="Back to Home" className="relative z-50 inline-block text-forest cursor-pointer" href="/">
            <svg width="133" height="22" viewBox="0 0 133 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.30957 0C14.8953 0 18.3086 2.13921 18.3086 6.41699L17.998 6.72266H13.0332L12.7227 6.41699C12.7227 5.19477 11.7921 4.27734 9.30957 4.27734C6.82702 4.27734 5.58594 4.88911 5.58594 6.11133C5.58608 7.33332 6.82707 7.63881 8.99902 7.94434L11.1719 8.25C17.688 9.16668 18.9296 11.9165 18.9297 15.2773C18.9297 18.6384 16.447 21.9999 9.62012 22C3.41393 22 0.000216012 19.5557 0 14.9727L0.310547 14.667H5.27539L5.58594 14.9727C5.58613 16.8057 6.82747 17.7227 9.62012 17.7227C12.1025 17.7226 13.6543 17.1107 13.6543 15.583C13.6541 14.0555 12.4123 13.7499 10.2402 13.4443L8.06836 13.1387C1.55181 12.222 0.310606 9.16681 0.310547 6.11133C0.310547 2.75022 3.10319 1.6036e-06 9.30957 0ZM68.877 0.305664C76.6349 0.305664 79.7383 4.27778 79.7383 11C79.7383 17.7222 76.6349 21.6943 68.877 21.6943V21.6963H61.1191L60.8086 21.3906V0.611328L61.1191 0.305664H68.877ZM98.2656 0.611328V4.58301L97.9551 4.88867H87.7148L87.4043 5.19434V8.25L87.7148 8.55566H97.335L97.6445 8.86133V12.833L97.335 13.1387H87.7148L87.4043 13.4443V16.8057L87.7148 17.1113H97.9551L98.2656 17.417V21.3887L97.9551 21.6943V21.6963H82.1289L81.8184 21.3906V0.611328L82.1289 0.305664H97.9551L98.2656 0.611328ZM31.3281 0.305664C35.9828 0.305664 39.0867 2.74984 39.0869 7.02734V10.3926C39.0868 14.6702 35.9828 17.1143 31.3281 17.1143L26.7354 17.1113L26.4248 17.417V21.3887L26.1143 21.6943H21.1494L20.8389 21.3887V0.614258L21.1494 0.305664H31.3281ZM51.8711 0.611328L58.6982 17.417V21.3887L58.3877 21.6943H54.6641L54.3535 21.3887L53.1123 18.0273L52.4912 17.7227H45.3545L44.7334 18.0273L43.4922 21.3887L43.1816 21.6943H39.458L39.1484 21.3887V17.417L45.9746 0.611328L46.2852 0.305664H51.5605L51.8711 0.611328ZM66.3945 5.19434V16.8057L66.7051 17.1113H69.1875C72.601 17.1113 74.1523 15.8889 74.1523 11C74.1523 6.11111 72.601 4.88867 69.1875 4.88867H66.7051L66.3945 5.19434ZM46.5957 12.833L46.9062 13.1387H50.9404L51.25 12.833L49.0781 7.02734H48.7676L46.5957 12.833ZM26.4248 5.19434V12.2227L26.7354 12.5273H31.3281V12.5312C32.5693 12.5312 33.5009 12.2256 33.501 10.3926V7.02734C33.5008 5.1944 32.5693 4.88867 31.3281 4.88867H26.7354L26.4248 5.19434ZM106.387 0.305664L107.18 1.08594L104.385 8.55566H103.966L101.171 1.08594L101.964 0.305664H106.387Z" fill="#18280E"/>
            </svg>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="max-lg:hidden h-full">
            <ul className="flex gap-x-10 h-full items-center">
              {/* Solutions Dropdown */}
              <li className="relative h-full flex items-center">
                <button 
                  type="button" 
                  aria-expanded={openDropdown === 'solutions'} 
                  aria-haspopup="true"
                  onClick={() => toggleDropdown('solutions')}
                  className="text-15px-btn hover:text-moss cursor-pointer transition-colors inline-flex items-center gap-x-[5px] h-full"
                >
                  <span>Solutions</span>
                  <div className={`w-[7px] shrink-0 transition-transform duration-200 ${openDropdown === 'solutions' ? '-rotate-90' : 'rotate-90'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
                    </svg>
                  </div>
                </button>

                {/* Rich Solutions Dropdown */}
                <div 
                  className={`absolute top-full -left-7 w-max origin-top-left pt-3 transition-all duration-200 ${openDropdown === 'solutions' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="flex flex-col gap-7 rounded-md bg-white text-black sm:flex-row sm:gap-8 lg:p-6 lg:pl-4 lg:shadow-[0_2px_6px_0_rgba(0,0,0,0.08)] border border-black/5">
                    
                    {/* Use Cases Column */}
                    <div className="min-w-max flex-1 space-y-4 lg:max-w-[19.375rem] lg:space-y-5">
                      <h3 className="text-13px-eyebrow-caps opacity-60 lg:px-3">Use Cases</h3>
                      <ul className="space-y-0.5" role="list">
                        {solutionsUseCases.map((item) => (
                          <li key={item.label}>
                            <a className="inline-block relative w-full group" href={item.href}>
                              <span className="relative z-1 flex items-center gap-x-4 py-3.5 lg:p-3 lg:pr-3.5 rounded-lg group-hover:bg-sage-1 transition-colors">
                                <picture className="block w-[30px] shrink-0">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img alt={`${item.label} Icon`} loading="lazy" width="30" height="30" className="size-full opacity-100" src={item.icon} />
                                </picture>
                                <span className="block flex-1 space-y-1">
                                  <span className="text-16px-body block leading-none transition-colors group-hover:text-forest font-medium">{item.label}</span>
                                  <span className="text-14px-eyebrow block opacity-60 font-mono">{item.desc}</span>
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries Column */}
                    <div className="min-w-max flex-1 space-y-4 lg:max-w-[19.375rem] lg:space-y-5">
                      <h3 className="text-13px-eyebrow-caps opacity-60 lg:px-3">Industries</h3>
                      <ul className="space-y-0.5" role="list">
                        {solutionsIndustries.map((item) => (
                          <li key={item.label}>
                            <a className="inline-block relative w-full group" href={item.href}>
                              <span className="relative z-1 flex items-center gap-x-4 py-3.5 lg:p-3 lg:pr-3.5 rounded-lg group-hover:bg-sage-1 transition-colors">
                                <span className="block flex-1 space-y-1">
                                  <span className="text-16px-body block leading-none transition-colors group-hover:text-forest font-medium">{item.label}</span>
                                  <span className="text-14px-eyebrow block opacity-60 font-mono">{item.desc}</span>
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </li>

              <li className="h-full flex items-center">
                <a className="inline-block text-15px-btn hover:text-moss cursor-pointer transition-colors" href="/customers/">Customers</a>
              </li>

              {/* Company Dropdown */}
              <li className="relative h-full flex items-center">
                <button 
                  type="button" 
                  aria-expanded={openDropdown === 'company'} 
                  aria-haspopup="true"
                  onClick={() => toggleDropdown('company')}
                  className="text-15px-btn hover:text-moss cursor-pointer transition-colors inline-flex items-center gap-x-[5px] h-full"
                >
                  <span>Company</span>
                  <div className={`w-[7px] shrink-0 transition-transform duration-200 ${openDropdown === 'company' ? '-rotate-90' : 'rotate-90'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
                    </svg>
                  </div>
                </button>

                {/* Rich Company Dropdown */}
                <div 
                  className={`absolute top-full -left-7 w-max origin-top-left pt-3 transition-all duration-200 ${openDropdown === 'company' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="flex flex-col gap-7 rounded-md bg-white text-black sm:flex-row sm:gap-8 lg:p-6 lg:pl-4 lg:shadow-[0_2px_6px_0_rgba(0,0,0,0.08)] border border-black/5">
                    
                    {/* Company Links Column */}
                    <div className="min-w-max flex-1 space-y-4 lg:max-w-[19.375rem] lg:space-y-5">
                      <h3 className="text-13px-eyebrow-caps opacity-60 lg:px-3">Company</h3>
                      <ul className="space-y-0.5" role="list">
                        {companyLinks.map((item) => (
                          <li key={item.label}>
                            <a className="inline-block relative w-full group" href={item.href}>
                              <span className="relative z-1 flex items-center gap-x-4 py-3.5 lg:p-3 lg:pr-3.5 rounded-lg group-hover:bg-sage-1 transition-colors">
                                <span className="block flex-1 space-y-1">
                                  <span className="text-16px-body block leading-none transition-colors group-hover:text-forest font-medium">{item.label}</span>
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </li>

              <li className="h-full flex items-center">
                <a href="https://docs.spade.com/" target="_blank" rel="noopener noreferrer" className="inline-block text-15px-btn hover:text-moss cursor-pointer transition-colors">Docs</a>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="flex gap-x-4 max-lg:hidden">
            <a href="/contact/" className="inline-block">
              <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-black min-h-[2.4375rem] px-4">
                <span className="absolute inset-0 rounded-md transition-[background-color,border-color,transform,scale] group-hover:scale-[0.98] origin-center bg-black/5 group-hover:bg-black/8"></span>
                <span className="text-15px-btn relative z-10">Contact sales</span>
              </div>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            type="button" 
            aria-label="Open menu" 
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 grid cursor-pointer lg:hidden w-[38px] h-[22px]"
          >
            <div className="col-start-1 row-start-1 my-auto flex h-[22px] w-[38px] flex-col items-end justify-between" aria-hidden="true">
              <span className={`h-0.5 w-full bg-black transition-all duration-300 origin-[right_center] ${isMobileMenuOpen ? '-rotate-45 -translate-x-[2px]' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-black/60 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'}`}></span>
              <span className={`h-0.5 transition-all duration-300 origin-[right_center] ${isMobileMenuOpen ? 'w-full rotate-45 -translate-x-[2px] bg-black' : 'w-6 bg-black/60'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-navigation" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile navigation menu" 
        className={`fixed inset-x-0 top-[var(--header-height)] z-40 flex h-[calc(100dvh-var(--header-height))] flex-col overflow-y-auto bg-white lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'}`}
      >
        <div className="spade-container flex flex-1 flex-col gap-y-8 pt-3">
          <nav aria-label="Mobile navigation">
            <ul role="list">
              
              {/* Mobile Solutions Accordion */}
              <li>
                <button 
                  type="button" 
                  aria-expanded={openMobileDropdown === 'solutions'} 
                  onClick={() => toggleMobileDropdown('solutions')}
                  className="min-h-[4.375rem] w-full cursor-pointer border-b border-black/10 py-5 flex items-center gap-x-2"
                >
                  <span className={`w-2.5 shrink-0 transition-transform duration-300 ${openMobileDropdown === 'solutions' ? 'rotate-90' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="text-17px-btn">Solutions</span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === 'solutions' ? 'max-h-[2000px] opacity-100 border-b border-black/10 py-6' : 'max-h-0 opacity-0 border-transparent py-0'}`}
                >
                  <div className="flex flex-col gap-7 rounded-md bg-white text-black sm:flex-row sm:gap-8">
                    {/* Use Cases Column */}
                    <div className="min-w-max flex-1 space-y-4 lg:max-w-[19.375rem] lg:space-y-5">
                      <h3 className="text-13px-eyebrow-caps opacity-60">Use Cases</h3>
                      <ul className="space-y-0.5" role="list">
                        {solutionsUseCases.map((item) => (
                          <li key={item.label}>
                            <a className="inline-block relative w-full group" href={item.href}>
                              <span className="relative z-1 flex items-center gap-x-4 py-3.5">
                                <picture className="block w-[30px] shrink-0">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img alt={`${item.label} Icon`} loading="lazy" width="30" height="30" className="size-full opacity-100" src={item.icon} />
                                </picture>
                                <span className="block flex-1 space-y-1">
                                  <span className="text-16px-body block leading-none transition-colors group-hover:text-forest font-medium">{item.label}</span>
                                  <span className="text-14px-eyebrow block opacity-60 font-mono">{item.desc}</span>
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Industries Column */}
                    <div className="min-w-max flex-1 space-y-4 lg:max-w-[19.375rem] lg:space-y-5">
                      <h3 className="text-13px-eyebrow-caps opacity-60">Industries</h3>
                      <ul className="space-y-0.5" role="list">
                        {solutionsIndustries.map((item) => (
                          <li key={item.label}>
                            <a className="inline-block relative w-full group" href={item.href}>
                              <span className="relative z-1 flex items-center gap-x-4 py-3.5">
                                <span className="block flex-1 space-y-1">
                                  <span className="text-16px-body block leading-none transition-colors group-hover:text-forest font-medium">{item.label}</span>
                                  <span className="text-14px-eyebrow block opacity-60 font-mono">{item.desc}</span>
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Customers Link */}
              <li>
                <a className="inline-block min-h-[4.375rem] w-full cursor-pointer border-b border-black/10 py-5 block" href="/customers/">
                  <span className="text-17px-btn">Customers</span>
                </a>
              </li>

              {/* Mobile Company Accordion */}
              <li>
                <button 
                  type="button" 
                  aria-expanded={openMobileDropdown === 'company'} 
                  onClick={() => toggleMobileDropdown('company')}
                  className="min-h-[4.375rem] w-full cursor-pointer border-b border-black/10 py-5 flex items-center gap-x-2"
                >
                  <span className={`w-2.5 shrink-0 transition-transform duration-300 ${openMobileDropdown === 'company' ? 'rotate-90' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 16" fill="none">
                      <path d="M2.0326 15.6442L5.93597e-07 13.5799L9.02336e-08 2.0643L2.0326 -8.88478e-08L21.48 7.27606L21.48 8.36816L2.0326 15.6442Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="text-17px-btn">Company</span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === 'company' ? 'max-h-[1000px] opacity-100 border-b border-black/10 py-6' : 'max-h-0 opacity-0 border-transparent py-0'}`}
                >
                  <div className="flex flex-col gap-7 rounded-md bg-white text-black sm:flex-row sm:gap-8">
                    {/* Company Column */}
                    <div className="min-w-max flex-1 space-y-4 lg:max-w-[19.375rem] lg:space-y-5">
                      <h3 className="text-13px-eyebrow-caps opacity-60">Company</h3>
                      <ul className="space-y-0.5" role="list">
                        {companyLinks.map((item) => (
                          <li key={item.label}>
                            <a className="inline-block relative w-full group" href={item.href}>
                              <span className="relative z-1 flex items-center gap-x-4 py-3.5">
                                <span className="block flex-1 space-y-1">
                                  <span className="text-16px-body block leading-none transition-colors group-hover:text-forest font-medium">{item.label}</span>
                                </span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Docs Link */}
              <li>
                <a href="https://docs.spade.com/" target="_blank" rel="noopener noreferrer" className="inline-block min-h-[4.375rem] w-full cursor-pointer border-b border-black/10 py-5 block">
                  <span className="text-17px-btn">Docs</span>
                </a>
              </li>

            </ul>
          </nav>
          
          <div className="mt-auto pt-6 pb-8">
            <a className="inline-block block min-h-[3.125rem] w-full rounded-md bg-black/5 px-6 py-3 text-center text-black hover:bg-black/10 transition-colors" href="/contact/">
              <span className="text-17px-btn">Contact sales</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
