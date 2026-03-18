const stats = [
  { value: "500+", label: "Successful Wins" },
  { value: "₹1000Cr+", label: "Contract Value" },
  { value: "98%", label: "Client Retention" },
  { value: "15+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-4xl font-black"
                style={{ color: "#0a192f" }}
              >
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
