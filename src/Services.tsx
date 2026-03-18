import React from "react";

const ServicesOverview: React.FC = () => {
  return (
    <main className="flex-grow font-display text-slate-900 dark:text-slate-100 bg-background-light dark:bg-background-dark"
    style={{ backgroundColor: "#0a192f" }}>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-accent py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#e0a929_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl mb-6">
            Strategic Procurement & <br />
            <span className="text-primary">Bid Management Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            Expert solutions to streamline your bidding process, enhance compliance, and secure high-value contracts across government and private sectors.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-lg bg-primary px-8 py-4 text-base font-bold text-navy-accent shadow-lg hover:translate-y-[-2px] transition-all">
              Book a Consultation
            </button>
            <button className="text-sm font-bold leading-6 text-white flex items-center gap-2 hover:text-primary transition-colors">
              View Portfolio{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Tender Bid Management */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-52 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Business professionals reviewing tender documents on desk"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLO680JKig77251y3-MLhlwLMveynfnHj12iuK_Tx4zvCDxp9DdWxi6Woi3pF8wwml5onVvMiPTKf5749HGUXIXDsarIqduDMfqxYWJqTPMrwoRNi9tyTcFfz4dstP1hTdg2O9wmGRjxfp-U4jBi-fpHD1XhRBzSqHdU9ZAW03ui5KwWhtbivQoew5MK50lV7CnEspqcF-dOdyzU68uLVFaHMSZjJ_u61-V1wtbKkDB4y47A2LnYqD5J4yJk05WUz4qy_INKuZ26Ff"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Tender Bid Management</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  End-to-end bid lifecycle management including opportunity identification, bid writing, and final submission for maximum success rates.
                </p>
                <div className="mt-auto">
                  <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Talk to a Bid Expert{" "}
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Government Vendor Registration */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-52 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Digital registration portal interface on laptop screen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_1SmKDZWZgXtenIDbMIcqQfHgwp3CCmiKjnQQkW7IaVEX8BPFdFHrvoj-t1jDBfwfInUQTHEDXjKbFV_BDU48nAFVOOk0rr72l3R2uGqKBHBjDyVvfjL6vOmMLRGJoowBdf5zBX-qAgrSecanor-L-F2JRh2zUWiyIQrIO2ACTS-XaBR7AJh_yt7Hb_lkbmzheWETroijbKsNEFWNonvCcfskLmdZTFdw9ULCDLhROeHo0xPfb-Lq1zvfNAwkFBP32AkJGk01LwG8"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">how_to_reg</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Govt. Vendor Registration</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Seamless GeM, CPPP, and specialized state portal registrations with complete document compliance and profile optimization.
                </p>
                <div className="mt-auto">
                  <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Talk to a Bid Expert{" "}
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tender Documentation Support */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-52 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Stacks of professional corporate documentation files"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAZvBgrhCaBHM3HWREh9U6pyhbKG4FFG70ip8VXSxKLwCO-4bB1-maifpmtIuXgSax28uAxWhxqe53wvfG6AYMjqo27fwMBiMtVjbFvOQbIQWnEne8_yASUoQD3XhOBn-V46kA2o870zFjy9W68-p0j6-Gkgr-thssVdPWLXC6A5p4jB_vOFPehmXY-2mTkawLAjf-sWXgziSrs-SgUgAxvAWLOpyAYSVFvd3288aTDDtsFzSaayWvqQH0sQEnTWeuvMzXTBoKlwKs"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Documentation Support</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Professional preparation of technical specs, financial BOQs, and compliance certificates tailored to specific tender requirements.
                </p>
                <div className="mt-auto">
                  <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Talk to a Bid Expert{" "}
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* E-Tender Portal Management */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-52 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Dashboard showing complex digital analytics and data"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbFe1_xBk-uGU-oz6rtZNVW2G8ajPXsuz7-F-jR_serIDAlp-i6at4PZLrUtKLCbKWoozPeVNiUyfyFAqRcD45bKaVH_Ejh_n-4YL1rEL8nDFzk3B2irlPEIiyF1KwhTjq4F8GvLBUkD5V3mGMuo22-M077-TuTrnYeLWiKW6ct5IG6mNWJMRVwaa6kR4BcOYuczG5ra0P32tMx_zyILHW9Elanib8WrtTw-Zad2uh_oVKciL3pxysYqOX-LVZgChrdLRvCWmmPWOf"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">laptop_mac</span>
                </div>
                <h3 className="text-xl font-bold mb-3">E-Tender Portal Mgmt</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Expert navigation and submission on all major e-tender platforms including DSC management and secure digital uploading.
                </p>
                <div className="mt-auto">
                  <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Talk to a Bid Expert{" "}
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Procurement Strategy Consulting */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group lg:col-span-2">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Group of consultants brainstorming in a meeting room"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChmhRDI_7jbG-IXxCvv6hvrPgwNJLhn3_vym05yy_1xvNVtOZ8XV_vZxFCDd5to0UScpFPvPjry_lOvamIsRnMAjDyGEUxtt0CpdaqoS5HQnwxzXrpbr2cmntMOyPLBlHi77gtND4vpvD3_Bq3y_VSIQ3rj9L-ZUpaiVTeU08gtdtV109NjIUwNw8N4e8WLdphAwl4o3rkvR8YzIH2bnvZyzWEssSR-pzuex65h20eOKTpZ3aJwyccg7GB0eDKpB9MoS_a4M_708M-"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">insights</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Procurement Strategy Consulting</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    Strategic insights to optimize your global procurement approach. We analyze market trends, competitor pricing, and historical bid data to build your winning strategy.
                  </p>
                  <div className="mt-auto">
                    <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Talk to a Bid Expert{" "}
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-navy-accent dark:text-white" style={{ color: "#0a192f" }} >Our Methodology</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="space-y-0">

            {/* Step 1 */}
            <div className="flex gap-x-6 relative pb-12">
              <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-navy-accent text-primary z-10 border-4 border-background-light">
                <span className="material-symbols-outlined text-lg">search</span>
              </div>
              <div className="pt-2">
                <h4 className="text-lg font-bold text-navy-accent dark:text-white">Discovery & Analysis</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Comprehensive analysis of tender requirements, eligibility criteria, and technical feasibility.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-x-6 relative pb-12">
              <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-navy-accent text-primary z-10 border-4 border-background-light">
                <span className="material-symbols-outlined text-lg">ads_click</span>
              </div>
              <div className="pt-2">
                <h4 className="text-lg font-bold text-navy-accent dark:text-white">Strategic Planning</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Crafting the 'Win Theme' and aligning your value proposition with the evaluator's priorities.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-x-6 relative pb-12">
              <div className="absolute left-6 top-12 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800"></div>
              <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-navy-accent text-primary z-10 border-4 border-background-light">
                <span className="material-symbols-outlined text-lg">edit_note</span>
              </div>
              <div className="pt-2">
                <h4 className="text-lg font-bold text-navy-accent dark:text-white">Documentation & Submission</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Meticulous preparation and rigorous multi-stage review of all technical and financial documents.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-x-6">
              <div className="flex-none flex items-center justify-center w-12 h-12 rounded-full bg-navy-accent text-primary z-10 border-4 border-background-light">
                <span className="material-symbols-outlined text-lg">support_agent</span>
              </div>
              <div className="pt-2">
                <h4 className="text-lg font-bold text-navy-accent dark:text-white">Post-Bid Support</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Continuous monitoring of bid status, responding to clarifications, and performance evaluation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default ServicesOverview;