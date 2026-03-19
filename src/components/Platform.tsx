import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Platform() {

  const [tenders, setTenders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/bihar-tenders")
      .then(res => res.json())
      .then(data => {
        setTenders(Array.isArray(data.data) ? data.data.slice(0, 6) : []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* 🔥 LEFT - LIVE TENDERS */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl">

          {/* Header */}
          <div className="flex justify-between mb-4">
            <h2 className="text-white font-bold text-sm">
              🔴 Live Opportunities
            </h2>
            <span className="text-green-400 text-xs">Realtime</span>
          </div>

          {/* LIST */}
          <div className="space-y-3 max-h-[320px] overflow-y-auto">

            {loading && <p className="text-slate-400 text-sm">Loading...</p>}

            {!loading && tenders.map((t, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-[#0f172a] border border-white/10 hover:border-yellow-400 transition"
              >
                <p className="text-white text-sm font-semibold line-clamp-2">
                  {t.description}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Ref: {t.referenceNo}
                </p>

                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span className="truncate max-w-[60%]">
                    {t.department}
                  </span>
                  <span className="text-yellow-400 font-medium">
                    {t.endDate}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={() => {
              navigate("/tenders");
              window.scrollTo(0, 0);
            }}
            className="mt-4 w-full py-2.5 rounded-lg font-bold bg-yellow-400 text-[#0a192f] hover:opacity-90"
          >
            Explore Platform →
          </button>
        </div>

        {/* 👉 RIGHT - TEXT */}
        <div className="space-y-8">
          <h3 className="text-4xl font-bold text-white tracking-tight">
            Proprietary Tender Intelligence Platform
          </h3>

          <p className="text-lg text-slate-300 leading-relaxed">
            Our AI-driven platform scans thousands of government portals in real-time 
            to bring you relevant opportunities before your competitors even know they exist.
          </p>

          <ul className="space-y-5">
            {[
              {
                title: "AI-Powered Discovery",
                desc: "Get matched with tenders aligned to your capabilities.",
              },
              {
                title: "Competitive Insights",
                desc: "Track competitors and improve win probability.",
              },
              {
                title: "Automated Alerts",
                desc: "Get notified instantly about new tenders.",
              },
            ].map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="w-10 h-10 bg-yellow-400/10 flex items-center justify-center rounded-lg">
                  ⚡
                </div>
                <div>
                  <h4 className="text-white font-bold">{f.title}</h4>
                  <p className="text-slate-400 text-sm">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* MAIN CTA */}
          {/* <button
            onClick={() => {
              navigate("/tenders");
              window.scrollTo(0, 0);
            }}
            className="px-8 py-4 rounded-xl font-bold bg-yellow-400 text-[#0a192f]"
          >
            Explore Platform →
          </button> */}
        </div>

      </div>
    </section>
  );
}