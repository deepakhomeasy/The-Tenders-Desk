import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [tenders, setTenders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/bihar-tenders")
      .then((res) => res.json())
      .then((data) => {
        setTenders(Array.isArray(data.data) ? data.data.slice(0, 5) : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative overflow-hidden py-16 bg-[#0a192f]">
      
      {/* Glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-yellow-400 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Win More Government Contracts with{" "}
            <span className="text-yellow-400">Smart Tender Intelligence</span>
          </h1>

          <p className="text-slate-300 text-lg">
            Real-time tenders, bid strategy & consultancy — all in one platform.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-[#0a192f] px-6 py-3 rounded-xl font-bold">
              Get Started
            </button>

            <button className="border border-white/20 text-white px-6 py-3 rounded-xl">
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT - LIVE TENDERS */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-bold text-sm">
              🔴 Live Tenders
            </h2>
            <span className="text-xs text-green-400">Updated Now</span>
          </div>

          {/* LIST */}
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">

            {loading && (
              <p className="text-slate-400 text-sm">Loading...</p>
            )}

            {!loading && tenders.length === 0 && (
              <p className="text-slate-400 text-sm">No tenders found</p>
            )}

            {!loading &&
              tenders.map((t, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#0f172a] border border-white/10 hover:border-yellow-400 transition-all duration-300 hover:scale-[1.02]"
                >
                  <p className="text-sm text-white font-semibold line-clamp-2">
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
            View All Tenders →
          </button>
        </div>
      </div>
    </section>
  );
}