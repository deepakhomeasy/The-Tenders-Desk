export default function CTA() {
  return (
    <section className="py-4" style={{ backgroundColor: "#f8f7f6" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center bg-white border border-slate-200 rounded-[2rem] p-8 shadow-2xl shadow-slate-200"
        >
          <h2
            className="text-3xl md:text-3xl font-black mb-4 tracking-tight"
            style={{ color: "#0a192f" }}
          >
            Ready to Secure Your Next Big Win?
          </h2>
          <p className="text-xl text-slate-400 mb-4 max-w-1xl mx-auto">
            Join hundreds of successful companies leveraging our expertise to dominate the Indian
            public procurement market.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="font-bold px-6 py-3 rounded-xl text-xl hover:scale-105 transition-all shadow-xl"
              style={{
                backgroundColor: "#e0a929",
                color: "#0a192f",
                boxShadow: "0 20px 40px rgba(224,169,41,0.30)",
              }}
            >
              Get My Free Consultation
            </button>
            <button
              className="text-white font-bold px-8 py-3 rounded-xl text-xl hover:opacity-90 transition-all"
              style={{ backgroundColor: "#0a192f" }}
            >
              Contact Sales
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-400 font-medium">
            No obligation. Confidential strategic audit included.
          </p>
        </div>
      </div>
    </section>
  );
}
