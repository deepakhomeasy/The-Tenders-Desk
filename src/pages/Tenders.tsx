import { useState, useEffect, useRef } from "react";

type Tender = {
  slNo: number;
  tenderId: string;
  description: string;
  referenceNo: string;
  department: string;
  endDate: string;
  timeLeft: string;
};

const STATS = [
  { icon: "🌐", label: "Active Tenders", value: "42,850+" },
  { icon: "📈", label: "Win Rate Inc.", value: "34%" },
  { icon: "💶", label: "Tracked Value", value: "€4.8B+" },
  { icon: "⚡", label: "Daily Updates", value: "500+" },
];

const FEATURES = [
  {
    icon: "🤖",
    title: "AI Tender Discovery",
    desc: "Sophisticated semantic search and matching algorithms find the best fits for your business across thousands of sources.",
  },
  {
    icon: "🔔",
    title: "Personalized Alerts",
    desc: "Never miss a relevant opportunity again. Get instant notifications tailored to your specific service codes and regions.",
  },
  {
    icon: "⏱️",
    title: "Bid Deadline Tracking",
    desc: "Visual timelines and automated reminders ensure your team stays on track for every clarification and submission date.",
  },
  {
    icon: "📊",
    title: "Competitor Insights",
    desc: "Analyze historical award data and rival patterns to price your bids more competitively and strategically.",
  },
  {
    icon: "✅",
    title: "Document Checklist",
    desc: "Automated verification of compliance documents. Ensure no submission is rejected due to administrative missing links.",
  },
];

function useAnimatedCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}



function StatCard({
  icon,
  label,
  value,
  visible,
}: {
  icon: string;
  label: string;
  value: string;
  visible: boolean;
}) {
  return (
    <div
      className={`group relative p-6 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-500 hover:border-[#e0a929]/40 hover:bg-white/6 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transition: "opacity 0.6s, transform 0.6s, border-color 0.3s, background 0.3s" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e0a929]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-3xl mb-3">{icon}</div>
      <p className="text-slate-400 text-sm font-medium mb-1">{label}</p>
      <p className="text-white text-3xl font-black tracking-tight">{value}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  return (
    <div
      className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/8 hover:border-[#e0a929]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#e0a929]/5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e0a929]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />
      <div className="w-14 h-14 rounded-2xl bg-[#e0a929]/10 border border-[#e0a929]/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-[#e0a929]/20 transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-white text-lg font-bold mb-3">{title}</h4>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

export default function TenderDesk() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const [tenders, setTenders] = useState<Tender[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

// ✅ YAHAN ADD KARO
useEffect(() => {
  console.log("Total tenders:", tenders.length);
}, [tenders]);
  
  useEffect(() => {
    fetch("http://localhost:5000/bihar-tenders")
      .then((res) => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then((data) => {
        setTenders(Array.isArray(data.data) ? data.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load tenders");
        setLoading(false);
      });
  }, []);
  


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen font-sans text-white overflow-x-hidden"
      style={{
        background: "#0d0e14",
        fontFamily: "'DM Sans', 'Syne', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800;900&family=Syne:wght@400;600;700;800&display=swap');
        
        :root { --gold: #e0a929; --gold-muted: rgba(224,169,41,0.15); }
        
        .font-display { font-family: 'Syne', sans-serif; }
        
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes rowIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .hero-line-1 { animation: heroIn 0.7s ease both 0.1s; }
        .hero-line-2 { animation: heroIn 0.7s ease both 0.25s; }
        .hero-line-3 { animation: heroIn 0.7s ease both 0.4s; }
        .hero-line-4 { animation: heroIn 0.7s ease both 0.55s; }
        
        .glow-orb { animation: glowPulse 4s ease-in-out infinite; }
        
        .ticker-track { animation: tickerScroll 28s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        
        .table-row { animation: rowIn 0.5s ease both; }
        .table-row:nth-child(1) { animation-delay: 0.1s; }
        .table-row:nth-child(2) { animation-delay: 0.2s; }
        .table-row:nth-child(3) { animation-delay: 0.3s; }
        
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        
        .nav-link {
          position: relative;
          color: rgba(148,163,184,0.9);
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--gold);
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: var(--gold); }
        .nav-link:hover::after { width: 100%; }

        .gold-btn {
          background: linear-gradient(135deg, #e0a929, #f0c050);
          color: #0d0e14;
          font-weight: 800;
          border-radius: 12px;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 24px rgba(224,169,41,0.25);
        }
        .gold-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(224,169,41,0.4);
        }
        .gold-btn:active { transform: translateY(0); }

        .ghost-btn {
          border: 1.5px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.85);
          font-weight: 700;
          border-radius: 12px;
          transition: border-color 0.2s, background 0.2s;
        }
        .ghost-btn:hover {
          border-color: rgba(224,169,41,0.5);
          background: rgba(224,169,41,0.05);
          color: #fff;
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
        }
      `}</style>

      {/* Noise overlay */}
      <div className="fixed inset-0 noise-overlay z-0" />

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full glow-orb"
          style={{ background: "radial-gradient(circle, rgba(224,169,41,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full glow-orb"
          style={{
            background: "radial-gradient(circle, rgba(224,169,41,0.05) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
      </div>


      <main className="relative z-10">

        {/* ── HERO ── */}
        <section className="px-6 md:px-16 pt-20 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-7">
              {/* Badge */}
              <div className="hero-line-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit border"
                style={{ background: "rgba(224,169,41,0.08)", borderColor: "rgba(224,169,41,0.25)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#e0a929]" style={{ animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0a929]" />
                </span>
                <span className="text-[#e0a929] text-xs font-bold uppercase tracking-widest">v2.0 Now Live</span>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="hero-line-2 font-display text-1xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
                  Next-Gen{" "}
                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #e0a929 0%, #f5d580 50%, #e0a929 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Tender
                    <br />
                    Intelligence
                  </span>{" "}
                  Platform
                </h1>
                <p className="hero-line-3 text-slate-400 text-lg leading-relaxed max-w-md">
                  Unlock high-value opportunities with AI-powered discovery and
                  real-time competitor insights. Stay ahead of every deadline with
                  automated workflows.
                </p>
              </div>

              <div className="hero-line-4 flex flex-wrap gap-4">
                <button className="gold-btn px-8 py-4 text-base min-w-[180px]">
                  Check Live Tenders
                </button>
                <button className="ghost-btn px-8 py-4 text-base min-w-[180px]">
                  Request a Demo
                </button>
              </div>

              {/* Social proof */}
              <div className="hero-line-4 flex items-center gap-4 pt-2">
                <div className="flex -space-x-2.5">
                  {["🧑‍💼", "👩‍💼", "👨‍💻"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-base"
                      style={{
                        borderColor: "#0d0e14",
                        background: `hsl(${220 + i * 15}, 15%, 25%)`,
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  Joined by{" "}
                  <span className="text-white font-bold">1,200+</span> top
                  bidding teams
                </p>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="relative hidden lg:block">
              <div
                className="absolute -inset-8 rounded-[40px] opacity-30"
                style={{ background: "radial-gradient(ellipse, rgba(224,169,41,0.25) 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-3xl border overflow-hidden shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Window chrome */}
                <div className="flex items-center justify-between px-5 py-4 border-b"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="flex gap-1.5">
                    {["#f87171","#fbbf24","#34d399"].map((c, i) => (
                      <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="text-xs font-mono text-slate-600">thetenderdesk.app/dashboard</div>
                  <div />
                </div>
                {/* Content */}
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1.5">
                      <div className="h-2 w-20 rounded-full bg-white/10" />
                      <div className="h-4 w-44 rounded-full bg-white/15" />
                    </div>
                    <div className="h-9 w-28 rounded-xl border flex items-center justify-center"
                      style={{ background: "rgba(224,169,41,0.08)", borderColor: "rgba(224,169,41,0.25)" }}>
                      <div className="h-2 w-16 rounded bg-[#e0a929]/50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[true, false, false].map((active, i) => (
                      <div key={i}
                        className="h-24 rounded-2xl border flex flex-col items-center justify-center gap-2"
                        style={{
                          background: active ? "rgba(224,169,41,0.06)" : "rgba(255,255,255,0.02)",
                          borderColor: active ? "rgba(224,169,41,0.25)" : "rgba(255,255,255,0.06)",
                        }}>
                        <div className="h-1.5 w-12 rounded bg-white/15" />
                        <div className="h-5 w-10 rounded"
                          style={{ background: active ? "rgba(224,169,41,0.6)" : "rgba(255,255,255,0.12)" }} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[1, 0.5].map((opacity, i) => (
                      <div key={i}
                        className="h-13 rounded-xl border flex items-center gap-4 px-4 py-3"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          borderColor: "rgba(255,255,255,0.06)",
                          opacity,
                        }}>
                        <div className="w-7 h-7 rounded-lg flex-shrink-0"
                          style={{ background: i === 0 ? "rgba(224,169,41,0.3)" : "rgba(255,255,255,0.1)" }} />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2 rounded bg-white/20" style={{ width: i === 0 ? "55%" : "40%" }} />
                          <div className="h-1.5 rounded bg-white/10" style={{ width: i === 0 ? "30%" : "22%" }} />
                        </div>
                        {i === 0 && (
                          <div className="px-2 py-1 rounded-lg text-[10px] font-bold"
                            style={{ background: "rgba(52,211,153,0.15)", color: "#34d399" }}>
                            98%
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-16"
                  style={{ background: "linear-gradient(to top, rgba(13,14,20,0.8), transparent)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section
          ref={statsRef}
          className="px-6 md:px-16 py-16 border-y"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`transition-all duration-700`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <StatCard {...stat} visible={statsVisible} />
              </div>
            ))}
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="overflow-hidden py-4 border-b" style={{ borderColor: "rgba(224,169,41,0.12)", background: "rgba(224,169,41,0.03)" }}>
          <div className="ticker-track flex gap-12 whitespace-nowrap">
            {[...Array(2)].flatMap(() =>
              [
                "🏙 Smart City Lighting • €2.4M",
                "☁️ Gov-Cloud Migration • €12.5M",
                "🚌 EV Fleet Supply • €5.1M",
                "🏥 Healthcare IT Overhaul • €8.2M",
                "🔐 National Cybersecurity Framework • €3.7M",
                "🛤 Rail Infrastructure Upgrade • €21M",
              ].map((item, i) => (
                <span key={`${item}-${i}`} className="text-sm font-medium text-slate-500">
                  <span style={{ color: "#e0a929" }}>◆</span>{" "}
                  {item}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ── FEATURES ── */}
        <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-[#e0a929] text-xs font-bold uppercase tracking-widest border mb-5"
              style={{ background: "rgba(224,169,41,0.08)", borderColor: "rgba(224,169,41,0.2)" }}>
              Our Capabilities
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Streamline Your Bidding Process
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Our intelligence engine automates the heavy lifting so you can
              focus on crafting the perfect response and winning more contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard key={i} {...f} index={i} />
            ))}
            {/* CTA card */}
            <div
              className="relative p-8 rounded-3xl flex flex-col justify-center items-center text-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, #e0a929 0%, #f0c050 100%)" }}
            >
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <h4 className="font-display text-2xl font-extrabold text-[#0d0e14] mb-3">
                Ready to win more?
              </h4>
              <p className="text-[#0d0e14]/75 font-medium mb-6 text-sm leading-relaxed">
                Join 1,000+ companies using The Tender Desk to scale their revenue.
              </p>
              <button
                className="w-full py-4 rounded-2xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#0d0e14" }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* ── BIHAR TENDERS TABLE ── */}
        <section
          className="px-6 md:px-16 py-24"
          style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                  All Bihar Tenders
                </h3>
                <p className="text-slate-400 max-w-lg">
                  Live procurement data fetched directly from the Bihar tender portal.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(224,169,41,0.06)", borderColor: "rgba(224,169,41,0.2)", color: "#e0a929" }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#e0a929]" style={{ animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0a929]" />
                </span>
                Live Now
              </div>
            </div>

            <div className="overflow-auto rounded-3xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                    {["SL", "Tender ID", "Description", "Reference", "Department", "End Date", "Time Left"].map((h) => (
                      <th key={h} className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b whitespace-nowrap"
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading && (
                    <tr>
                      <td colSpan={7} className="px-5 py-10 text-center text-slate-400">
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-4 h-4 rounded-full border-2 border-[#e0a929] border-t-transparent animate-spin" />
                          Loading full data…
                        </div>
                      </td>
                    </tr>
                  )}

                  {error && (
                    <tr>
                      <td colSpan={7} className="px-5 py-10 text-center text-red-400 font-medium">
                        ⚠ {error}
                      </td>
                    </tr>
                  )}

                  {!loading && !error && tenders.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-5 py-10 text-center text-slate-500">
                        No tenders found
                      </td>
                    </tr>
                  )}

                  {!loading && !error && tenders.slice(0, visibleCount).map((t, i) => (
                    <tr
                      key={`${t.tenderId}-${t.referenceNo}-${i}`}
                      className="group border-b hover:bg-white/[0.025] transition-colors"
                      style={{ borderColor: "rgba(255,255,255,0.04)" }}
                    >
                      <td className="px-5 py-4 text-slate-500">{t.slNo}</td>
                      <td className="px-5 py-4 font-mono text-blue-400 whitespace-nowrap">{t.tenderId}</td>
                      <td className="px-5 py-4 font-medium text-white max-w-xs">{t.description}</td>
                      <td className="px-5 py-4 text-slate-400 whitespace-nowrap">{t.referenceNo}</td>
                      <td className="px-5 py-4 text-slate-400">{t.department}</td>
                      <td className="px-5 py-4 text-slate-300 whitespace-nowrap">{t.endDate}</td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border"
                          style={{ background: "rgba(251,191,36,0.08)", borderColor: "rgba(251,191,36,0.25)", color: "#fbbf24" }}>
                          ⏱ {t.timeLeft}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!loading && !error && tenders.length > 0 && (
  <div className="flex justify-center mt-10">
    <button
      onClick={() => {
        console.log("Load More clicked");
        setVisibleCount((prev) => prev + 10);
      }}
      disabled={visibleCount >= tenders.length}
      className="px-8 py-4 rounded-xl font-bold disabled:opacity-40"
      style={{
        background: "linear-gradient(135deg, #e0a929, #f0c050)",
        color: "#0d0e14"
      }}
    >
      {visibleCount >= tenders.length ? "No More Tenders" : "Load More"}
    </button>
  </div>
)}
          </div>
        </section>
      </main>

    </div>
  );
}