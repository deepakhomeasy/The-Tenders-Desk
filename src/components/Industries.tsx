const industries = [
  { icon: "construction", label: "Infrastructure" },
  { icon: "terminal", label: "IT & Telecom" },
  { icon: "shield_with_heart", label: "Defence" },
  { icon: "medical_services", label: "Healthcare" },
  { icon: "bolt", label: "Energy & Power" },
  { icon: "local_shipping", label: "Logistics" },
  { icon: "water_drop", label: "Water & Sanitation" },
  { icon: "school", label: "Education" },
];

export default function Industries() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        {/* Header */}
        <div className="text-center mb-4">
          <h2
            className="text-sm font-bold uppercase tracking-[0.2em] mb-2"
            style={{ color: "#e0a929" }}
          >
            Industries We Empower
          </h2>
          <h3 className="text-3xl font-bold" style={{ color: "#0a192f" }}>
            Specialized by Industry
          </h3>
          <div className="w-16 h-1 mx-auto mt-2" style={{ backgroundColor: "#e0a929" }} />
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Specialized bid management strategies for sectors that drive India's growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="group relative aspect-square overflow-hidden rounded-xl border border-slate-100 flex items-center justify-center p-6 transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: "#f8f7f6" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#0a192f";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#f8f7f6";
              }}
            >
              <div className="text-center">
                <span
                  className="material-symbols-outlined text-5xl mb-3 block transition-colors"
                  style={{ color: "#e0a929" }}
                >
                  {ind.icon}
                </span>
                <p
                  className="font-bold text-sm group-hover:text-white transition-colors"
                  style={{ color: "#0a192f" }}
                >
                  {ind.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
