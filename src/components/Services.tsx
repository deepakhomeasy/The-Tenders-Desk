const services = [
  {
    icon: "edit_document",
    title: "Bid Management",
    desc: "Full lifecycle support from initial RFQ analysis to documentation, pricing strategy, and final submission.",
  },
  {
    icon: "verified_user",
    title: "Registration & Compliance",
    desc: "Expert handling of MSME, NSIC, GeM portal registrations, and statutory compliance required for elite bids.",
  },
  {
    icon: "insights",
    title: "Strategic Consulting",
    desc: "Market entry mapping, competitor analysis, and high-value bid intelligence designed to win multi-crore projects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12" style={{ backgroundColor: "#f8f7f6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#e0a929" }}
          >
            Our Core Capabilities
          </h2>
          <h3 className="text-3xl font-bold tracking-tight" style={{ color: "#0a192f" }}>
            Comprehensive Solutions for Strategic Bidding
          </h3>
        </div>

        {/* 3-column cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-[#e0a929]/50 transition-all group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: "#0a192f" }}
              >
                <span className="material-symbols-outlined text-3xl" style={{ color: "#e0a929" }}>
                  {service.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-4" style={{ color: "#0a192f" }}>
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <a
                href="#"
                className="font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
                style={{ color: "#e0a929" }}
              >
                Learn more
                <span className="material-symbols-outlined text-base">arrow_right_alt</span>
              </a>
            </div>
          ))}
        </div>

        {/* Full-width services grid row */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(224,169,41,0.1)", color: "#e0a929" }}
              >
                All Services
              </span>
              <h3 className="text-2xl font-black leading-tight" style={{ color: "#0a192f" }}>
                End-to-End Government Tender Consulting
              </h3>
              <p className="text-slate-500 mt-2 max-w-lg text-sm">
                Strategic solutions designed to navigate the complexities of public procurement and maximize your success rate.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all whitespace-nowrap"
              style={{ color: "#e0a929" }}
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "description", title: "Tender Bid Management", desc: "End-to-end bid support to maximize your win rate." },
              { icon: "shopping_cart", title: "GeM Portal Registration", desc: "Seamless onboarding and participation on the GeM portal." },
              { icon: "badge", title: "Vendor Registration", desc: "Get empanelled with key government departments." },
              { icon: "edit_note", title: "Tender Documentation", desc: "Prepare compliant and persuasive bidding documents." },
              { icon: "computer", title: "E-Tender Management", desc: "Complete handling of online tender submissions." },
              { icon: "query_stats", title: "Procurement Strategy", desc: "Data-driven insights to improve win probability." },
              { icon: "key", title: "Digital Signature", desc: "Get government-approved DSC for secure digital transactions." },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-5 border border-slate-100 hover:border-[#e0a929]/40 hover:-translate-y-0.5 transition-all group cursor-pointer"
                style={{ backgroundColor: "#f8f7f6" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#0a192f" }}
                >
                  <span className="material-symbols-outlined text-xl" style={{ color: "#e0a929" }}>
                    {s.icon}
                  </span>
                </div>
                <h4 className="font-bold text-sm mb-1.5" style={{ color: "#0a192f" }}>
                  {s.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}

            {/* Custom Solution Card */}
            <div
              className="rounded-xl p-5 flex flex-col justify-between text-white"
              style={{ backgroundColor: "#0a192f" }}
            >
              <div>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: "rgba(224,169,41,0.15)" }}
                >
                  <span className="material-symbols-outlined text-xl" style={{ color: "#e0a929" }}>
                    bolt
                  </span>
                </div>
                <h4 className="font-bold text-sm mb-1.5">Need a Custom Solution?</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Let's build a tailored tender strategy for your business.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center font-bold text-xs px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#e0a929", color: "#0a192f" }}
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
