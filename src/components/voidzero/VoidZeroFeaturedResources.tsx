import React from 'react';
import { VoidZeroBorder } from './VoidZeroBorder';

const resources = [
  { title: "Tales from the Void: May 2026 Recap", type: "// updates", image: "/covers/update-2026-may.jpg", url: "/posts/whats-new-may-2026" },
  { title: "VoidZero is Joining Cloudflare", type: "// announcements", image: "/covers/voidzero-cloudflare.jpg", url: "/posts/voidzero-cloudflare" },
  { title: "Announcing Rolldown 1.0", type: "// announcements", image: "/covers/announcing-rolldown-1-0.jpg", url: "/posts/announcing-rolldown-1-0" },
  { title: "Tales from the Void: April 2026 Recap", type: "// updates", image: "/covers/update-2026-apr.jpg", url: "/posts/whats-new-apr-2026" },
  { title: "How we made the Angular Compiler faster using AI", type: "// ecosystem", image: "/covers/oxc-angular-compiler.jpg", url: "/posts/oxc-angular-compiler" },
];

export function VoidZeroFeaturedResources() {
  return (
    <>
      <VoidZeroBorder theme="light" containerClassName="h-16 sm:h-30"></VoidZeroBorder>
      <VoidZeroBorder theme="light" containerClassName="grid grid-cols-1 md:grid-cols-10 divide-x-0 md:divide-x divide-stroke h-auto md:h-[32.5rem]">
        <div className="flex flex-col divide-y divide-stroke md:col-span-4">
          <div className="p-5 md:p-10 grow-0 md:grow flex flex-col gap-6 md:gap-10 md:h-72 justify-center md:justify-start">
            <h3 className="text-pretty text-3xl font-medium tracking-tight">Featured resources &amp; updates</h3>
            <a href="/blog" className="button border border-stroke px-6 py-2 rounded text-primary hover:bg-black/5 transition-colors font-medium w-fit">All Resources</a>
          </div>
          <div className="px-6 py-6 md:px-10 pt-16 md:pb-8 flex flex-col gap-4 relative">
            <span className="bg-[#F4F3EC]/40 text-primary text-xs absolute top-3 left-3 p-2 rounded font-mono">js</span>
            <div className="flex flex-col gap-0 text-sm">
              <div className="text-grey font-mono opacity-60">resources</div>
              <div className="text-primary font-mono">
                .filter<span className="text-grey opacity-60">(i =&gt; i.collection ===</span> "featured"<span className="text-grey opacity-60">)</span>
              </div>
              <div className="text-primary font-mono">
                .filter<span className="text-grey opacity-60">(i =&gt; i.postedBy ===</span> "VoidZero"<span className="text-grey opacity-60">)</span>
              </div>
              <div className="text-primary font-mono">
                .filter<span className="text-grey opacity-60">(i =&gt; i.articles.length ===</span> 8<span className="text-grey opacity-60">)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6 border-t border-stroke md:border-t-0 overflow-hidden relative">
          <section className="carousel py-10 pb-30 md:pb-10 w-full h-full overflow-x-auto no-scrollbar" style={{ paddingLeft: '1.25rem' }}>
            <div className="flex gap-4 min-w-max pb-8">
              {resources.map((resource, idx) => (
                <a key={idx} href={resource.url} className="bg-white border border-stroke rounded-lg w-[80vw] md:w-[25rem] lg:w-[21rem] aspect-square flex flex-col overflow-hidden hover:shadow-md transition-shadow group shrink-0">
                  <div className="w-full aspect-[2/1] overflow-hidden bg-slate-100">
                    <img loading="lazy" src={resource.image} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col gap-4 grow">
                    <span className="text-xs text-nickel font-mono uppercase tracking-widest opacity-70">{resource.type}</span>
                    <h4 className="text-xl text-primary font-sans text-pretty font-medium tracking-tight">{resource.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </VoidZeroBorder>
    </>
  );
}
