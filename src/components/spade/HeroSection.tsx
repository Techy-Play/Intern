'use client';

export default function HeroSection() {
  return (
    <section id="" className="relative overflow-hidden bg-white text-black pt-0 pb-0">
      <div className="lg:-mt-[1.375rem]">
        <div 
          className="relative bg-sage-1 py-14 max-md:-mx-5 md:py-20 lg:pt-26 lg:pb-26 xl:pb-32" 
          style={{ '--corner-size-mobile': '1px', '--corner-size-desktop': '17px' } as React.CSSProperties}
        >
          <div className="pointer-events-none absolute inset-0 z-10 m-0!">
            <div className="cut-corner absolute bg-white" style={{ top: '-1px', left: '-1px', clipPath: 'polygon(0px 0px, 100% 0px, 0px 100%)', width: '17px', height: '17px' }}></div>
            <div className="cut-corner absolute bg-white" style={{ top: '-1px', right: '-1px', clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%)', width: '17px', height: '17px' }}></div>
            <div className="cut-corner absolute bg-white" style={{ bottom: '-1px', left: '-1px', clipPath: 'polygon(0px 0px, 0px 100%, 100% 100%)', width: '17px', height: '17px' }}></div>
            <div className="cut-corner absolute bg-white" style={{ bottom: '-1px', right: '-1px', clipPath: 'polygon(100% 0px, 0px 100%, 100% 100%)', width: '17px', height: '17px' }}></div>
          </div>

          <div className="mx-auto flex w-full max-w-[66.75rem] flex-col items-center px-5 text-center lg:px-12">
            <h1 className="text-84px-heading">The data &amp; AI platform for modern finance</h1>
            


            <div className="prose mt-6 w-full max-w-[27.75rem] opacity-80">
              <p className="text-16px-body" style={{ fontFamily: 'polar' }}>Spade takes messy transaction data and turns it into structured, verified records — with AI agents that help you use it everywhere it matters.</p>
            </div>

            <div className="flex items-center gap-x-5 mt-6 sm:mt-7">
              <a href="/contact/" className="inline-block">
                <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-lemongrass min-h-10.75 px-4.5">
                  <span className="absolute inset-0 rounded-md transition-[background-color,border-color,transform,scale] group-hover:scale-[0.98] origin-center bg-forest group-hover:bg-forest/90"></span>
                  <span className="text-15px-btn relative z-10">Contact sales</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
