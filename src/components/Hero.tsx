import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tenderImg from "../assests/tender.png";

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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#0a192f]">
      
      {/* Glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-yellow-400 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-10">
            Win More Government Contracts with{" "}
            <span className="text-yellow-400 mb-5">Smart Tender Intelligence</span>
          </h1>

          <p className="text-slate-300 text-lg pb-10">
            Real-time tenders, bid strategy & consultancy — all in one platform.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-[#0a192f] px-8 py-5 rounded-xl font-bold">
              Get Started
            </button>

            <button className="border border-white/20 text-white px-6 py-3 rounded-xl">
              Explore
            </button>
          </div>
        </div>


        {/* RIGHT - IMAGE SHOWCASE */}
<div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl">

  {/* Header */}
  {/* <div className="flex justify-between items-center mb-4">
    <h2 className="text-white font-bold text-sm">
      🔴 Live Tenders
    </h2>
    <span className="text-xs text-green-400 animate-pulse">
      Updated Now
    </span>
  </div> */}

  {/* IMAGE CARD */}
  <div className="relative w-full h-[300px] rounded-xl overflow-hidden group cursor-pointer">

    {/* Background Image */}
    <img
      src={tenderImg}   // 👉 public folder
      alt="Tender"
      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    {/* Animated Content */}
    <div className="absolute bottom-0 p-4 w-full translate-y-4 group-hover:translate-y-0 transition duration-500">
      <h3 className="text-white font-bold text-lg">
        Explore Latest Tenders
      </h3>
      <p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition duration-500">
        Click below to view all government tenders
      </p>
    </div>

    {/* Shine Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_1.5s_linear]" />
  </div>

  {/* IMAGE BUTTON */}
  {/* <div
    onClick={() => {
      navigate("/tenders");
      window.scrollTo(0, 0);
    }}
    className="relative mt-4 w-full h-[70px] rounded-xl overflow-hidden cursor-pointer group"
  >
    <img
      src="/button.jpg"   // 👉 public folder
      alt="View Tenders"
      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition duration-300">
      <span className="text-white font-bold text-sm tracking-wide group-hover:scale-105 transition">
        View All Tenders →
      </span>
    </div>
  </div> */}

</div>
      </div>
    </section>
  );
}