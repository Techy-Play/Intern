'use client';

export default function SpadeFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-white">
      <div className="relative z-1">
        <div className="spade-container">
          <div className="relative mx-auto flex w-full max-w-150 flex-col items-center gap-y-7 sm:gap-y-10 pt-16 md:pt-20 lg:pt-32">
            <p className="text-78px-footer-cta text-center max-sm:text-balance">
              <span>Add intelligence to </span>
              <span className="relative inline-block">
                <span className="text-lemongrass text-spacing-reset whitespace-nowrap lg:text-white">every layer</span>
                <span aria-hidden="true" className="text-spacing-reset absolute inset-0 z-1 whitespace-nowrap max-lg:hidden">
                  <span className="text-lemongrass">
                    <span>
                      <span className="inline-block whitespace-nowrap">
                        <span className="inline" style={{ opacity: 1 }}>e</span>
                        <span className="inline" style={{ opacity: 1 }}>v</span>
                        <span className="inline" style={{ opacity: 1 }}>e</span>
                        <span className="inline" style={{ opacity: 1 }}>r</span>
                        <span className="inline" style={{ opacity: 1 }}>y</span>
                        <span>&nbsp;</span>
                      </span>
                      <span className="inline-block whitespace-nowrap">
                        <span className="inline" style={{ opacity: 1 }}>l</span>
                        <span className="inline" style={{ opacity: 1 }}>a</span>
                        <span className="inline" style={{ opacity: 1 }}>y</span>
                        <span className="inline" style={{ opacity: 1 }}>e</span>
                        <span className="inline" style={{ opacity: 1 }}>r</span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span> of your data</span>
            </p>
            <div className="flex items-center gap-x-5">
              <a className="inline-block" href="/contact/">
                <div className="group relative inline-flex appearance-none items-center py-2.5 select-none transition-[color] justify-center text-black hover:text-lemongrass min-h-10.75 px-4.5" role="button">
                  <span className="absolute inset-0 rounded-md transition-[background-color,border-color,transform,scale] group-hover:scale-[0.98] origin-center bg-lemongrass border border-lemongrass group-hover:bg-transparent"></span>
                  <span className="text-15px-btn relative z-10">Contact sales</span>
                </div>
              </a>
            </div>
          </div>

          <div className="pb-6 space-y-20 md:space-y-28 lg:space-y-32 pt-20 md:pt-28 lg:pt-32">
            <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-12">
              <nav aria-label="Footer navigation" className="w-full flex-1">
                <div className="xs:grid-cols-3 xs:gap-6 grid grid-cols-2 gap-10 sm:gap-8 lg:flex lg:gap-12 xl:gap-x-21.25">
                  <div>
                    <div className="space-y-5 sm:space-y-4">
                      <h3 className="text-10px-nav-heading opacity-70">Use Cases</h3>
                      <ul className="space-y-3.5 sm:space-y-3" role="list">
                        <li className="text-14px-body relative"><a className="inline-block" href="/use-case/risk-authorization/"><span>Risk &amp; Authorization</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/use-case/rewards-and-attribution/"><span>Rewards &amp; Attribution</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/use-case/analytics-and-ai/"><span>Analytics &amp; AI</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/use-case/user-experience/"><span>User Experience</span></a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-5 sm:space-y-4">
                      <h3 className="text-10px-nav-heading opacity-70">Industries</h3>
                      <ul className="space-y-3.5 sm:space-y-3" role="list">
                        <li className="text-14px-body relative"><a className="inline-block" href="/industry/fintechs/"><span>Fintechs</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/industry/banks/"><span>Banks</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/industry/ai/"><span>AI</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/industry/ecosystem-partners/"><span>Ecosystem Partners</span></a></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-5 sm:space-y-4">
                      <h3 className="text-10px-nav-heading opacity-70">Company</h3>
                      <ul className="space-y-3.5 sm:space-y-3" role="list">
                        <li className="text-14px-body relative"><a className="inline-block" href="/about/"><span>About</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/careers/"><span>Careers</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/security/"><span>Security</span></a></li>
                        <li className="text-14px-body relative"><a className="inline-block" href="/resources/"><span>Resources</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="w-full shrink-0 lg:w-5/12 lg:max-w-104">
                <div className="space-y-5">
                  <div className="text-14px-eyebrow">Sign up to our newsletter</div>
                  <div className="space-y-2">
                    <form className="flex w-full gap-x-3" noValidate data-hs-cf-bound="true">
                      <div className="relative border border-white/10 h-12 flex-1">
                        <div className="pointer-events-none absolute inset-0 z-2">
                          <div className="absolute -top-px -left-px border-white/10 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', width: '7px', height: '7px' }}></div>
                          <div className="absolute -top-px -right-px border-white/10 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)', width: '7px', height: '7px' }}></div>
                          <div className="absolute -bottom-px -left-px border-white/10 bg-white" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)', width: '7px', height: '7px' }}></div>
                          <div className="absolute -right-px -bottom-px border-white/10 bg-white" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)', width: '7px', height: '7px' }}></div>
                        </div>
                        <input type="email" required placeholder="Email address" className="input-unstyled focus-reset text-15px-btn size-full w-full px-4 py-3 transition-colors sm:px-4.5 text-white placeholder:text-white/40 hover:bg-white/3! focus:bg-white/3!" aria-invalid="false" name="email" defaultValue="" />
                        <input type="hidden" name="oid" defaultValue="00D8V000002VulW" />
                      </div>
                      <div className="relative border border-white size-12 shrink-0">
                        <div className="pointer-events-none absolute inset-0 z-2">
                          <div className="absolute -top-px -left-px border-white bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)', width: '7px', height: '7px' }}></div>
                          <div className="absolute -top-px -right-px border-white bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)', width: '7px', height: '7px' }}></div>
                          <div className="absolute -bottom-px -left-px border-white bg-white" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)', width: '7px', height: '7px' }}></div>
                          <div className="absolute -right-px -bottom-px border-white bg-white" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)', width: '7px', height: '7px' }}></div>
                        </div>
                        <button type="submit" aria-label="Subscribe to newsletter" className="group flex size-full cursor-pointer items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="transition-transform will-change-transform group-hover:scale-90">
                            <g clipPath="url(#clip0_2568_7113)">
                              <path d="M14.4375 11L18.5625 15.125L14.4375 19.25" stroke="white" strokeWidth="1.375" strokeLinecap="square"></path>
                              <path d="M6.875 2.75V2.0625H5.5V2.75H6.1875H6.875ZM6.1875 15.125H5.5V15.8125H6.1875V15.125ZM18.5625 15.8125C18.9422 15.8125 19.25 15.5047 19.25 15.125C19.25 14.7453 18.9422 14.4375 18.5625 14.4375V15.125V15.8125ZM6.1875 2.75H5.5V15.125H6.1875H6.875V2.75H6.1875ZM6.1875 15.125V15.8125H18.5625V15.125V14.4375H6.1875V15.125Z" fill="white"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_2568_7113">
                                <rect width="22" height="22" fill="white"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-10 md:gap-x-12">
              <div className="text-sage-4 w-22 shrink-0">
                <svg width="133" height="22" viewBox="0 0 133 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.30957 0C14.8953 0 18.3086 2.13921 18.3086 6.41699L17.998 6.72266H13.0332L12.7227 6.41699C12.7227 5.19477 11.7921 4.27734 9.30957 4.27734C6.82702 4.27734 5.58594 4.88911 5.58594 6.11133C5.58608 7.33332 6.82707 7.63881 8.99902 7.94434L11.1719 8.25C17.688 9.16668 18.9296 11.9165 18.9297 15.2773C18.9297 18.6384 16.447 21.9999 9.62012 22C3.41393 22 0.000216012 19.5557 0 14.9727L0.310547 14.667H5.27539L5.58594 14.9727C5.58613 16.8057 6.82747 17.7227 9.62012 17.7227C12.1025 17.7226 13.6543 17.1107 13.6543 15.583C13.6541 14.0555 12.4123 13.7499 10.2402 13.4443L8.06836 13.1387C1.55181 12.222 0.310606 9.16681 0.310547 6.11133C0.310547 2.75022 3.10319 1.6036e-06 9.30957 0ZM68.877 0.305664C76.6349 0.305664 79.7383 4.27778 79.7383 11C79.7383 17.7222 76.6349 21.6943 68.877 21.6943V21.6963H61.1191L60.8086 21.3906V0.611328L61.1191 0.305664H68.877ZM98.2656 0.611328V4.58301L97.9551 4.88867H87.7148L87.4043 5.19434V8.25L87.7148 8.55566H97.335L97.6445 8.86133V12.833L97.335 13.1387H87.7148L87.4043 13.4443V16.8057L87.7148 17.1113H97.9551L98.2656 17.417V21.3887L97.9551 21.6943V21.6963H82.1289L81.8184 21.3906V0.611328L82.1289 0.305664H97.9551L98.2656 0.611328ZM31.3281 0.305664C35.9828 0.305664 39.0867 2.74984 39.0869 7.02734V10.3926C39.0868 14.6702 35.9828 17.1143 31.3281 17.1143L26.7354 17.1113L26.4248 17.417V21.3887L26.1143 21.6943H21.1494L20.8389 21.3887V0.614258L21.1494 0.305664H31.3281ZM51.8711 0.611328L58.6982 17.417V21.3887L58.3877 21.6943H54.6641L54.3535 21.3887L53.1123 18.0273L52.4912 17.7227H45.3545L44.7334 18.0273L43.4922 21.3887L43.1816 21.6943H39.458L39.1484 21.3887V17.417L45.9746 0.611328L46.2852 0.305664H51.5605L51.8711 0.611328ZM66.3945 5.19434V16.8057L66.7051 17.1113H69.1875C72.601 17.1113 74.1523 15.8889 74.1523 11C74.1523 6.11111 72.601 4.88867 69.1875 4.88867H66.7051L66.3945 5.19434ZM46.5957 12.833L46.9062 13.1387H50.9404L51.25 12.833L49.0781 7.02734H48.7676L46.5957 12.833ZM26.4248 5.19434V12.2227L26.7354 12.5273H31.3281V12.5312C32.5693 12.5312 33.5009 12.2256 33.501 10.3926V7.02734C33.5008 5.1944 32.5693 4.88867 31.3281 4.88867H26.7354L26.4248 5.19434ZM106.387 0.305664L107.18 1.08594L104.385 8.55566H103.966L101.171 1.08594L101.964 0.305664H106.387Z" fill="#18280E"></path></svg>
              </div>
              <div className="flex flex-col gap-10 sm:flex-row md:gap-12">
                <nav aria-label="Legal navigation">
                  <ul className="flex items-center gap-x-5">
                    <li className="text-12px-legal-link">
                      <a aria-label="Terms of Service" className="inline-block opacity-50 transition-opacity hover:opacity-100" href="/terms/"><span>Terms of Service</span></a>
                    </li>
                    <li className="text-12px-legal-link">
                      <a aria-label="Privacy Policy" className="inline-block opacity-50 transition-opacity hover:opacity-100" href="/privacy/"><span>Privacy Policy</span></a>
                    </li>
                    <li className="text-12px-legal-link">
                      <a aria-label="MSA" className="inline-block opacity-50 transition-opacity hover:opacity-100" href="/msa/"><span>MSA</span></a>
                    </li>
                    <li className="text-12px-legal-link">
                      <a aria-label="SLA" className="inline-block opacity-50 transition-opacity hover:opacity-100" href="/sla/"><span>SLA</span></a>
                    </li>
                  </ul>
                </nav>
                <div className="text-12px-legal-link opacity-50">© Spade 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
