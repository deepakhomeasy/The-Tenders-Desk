export default function Testimonials() {
  return (
    <section className="py-24 border-y border-slate-200" style={{ backgroundColor: "#f8f7f6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Why choose us */}
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight" style={{ color: "#0a192f" }}>
              Expertise That Drives Measurable Success
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: "stars",
                  title: "Industry-Leading Success Rate",
                  desc: "Our success rate is 40% higher than the industry average due to rigorous vetting of opportunities.",
                },
                {
                  icon: "groups",
                  title: "Ex-Government Procurement Officers",
                  desc: "Our advisory team includes former procurement heads who understand the 'other side' of the table.",
                },
                {
                  icon: "speed",
                  title: "Turnaround Time",
                  desc: "Complex technical documents and compliance checks completed in 72 hours or less.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div
                    className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm"
                    style={{ color: "#e0a929" }}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1" style={{ color: "#0a192f" }}>
                      {item.title}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonial card */}
          <div
            className="p-12 rounded-3xl relative overflow-hidden"
            style={{ backgroundColor: "#0a192f" }}
          >
            {/* Big quote mark */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined" style={{ fontSize: 160 }}>
                format_quote
              </span>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 relative z-10">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-xl" style={{ color: "#e0a929", fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>

            <p className="text-2xl text-white font-medium italic relative z-10 leading-relaxed">
              "The Tender Desk transformed our bidding process. We went from losing 70% of our bids
              to winning three consecutive ₹50Cr+ government contracts in under a year."
            </p>

            <div className="mt-8 flex items-center gap-4 relative z-10">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(224,169,41,0.2)" }}
              >
                <span className="material-symbols-outlined" style={{ color: "#e0a929" }}>person</span>
              </div>
              <div>
                <p className="text-white font-bold">Arjun Sharma</p>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#e0a929" }}>
                  CEO, BuildTrack Infrastructure
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div
              className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t relative z-10"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <div>
                <div className="text-3xl font-black" style={{ color: "#e0a929" }}>85%</div>
                <div className="text-slate-400 text-xs mt-1">Win Rate Increase</div>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: "#e0a929" }}>40%</div>
                <div className="text-slate-400 text-xs mt-1">Bid Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
