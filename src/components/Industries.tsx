import bcd from "../assests/BCD.png";
import rcd from "../assests/RCD.png";
import rwd from "../assests/RWD.png";
import phed from "../assests/health.png";
import energy from "../assests/BSPHCL.png";
import pwd from "../assests/PWD.png";
import wrd from "../assests/water.png";
import education from "../assests/BED.png";

const industries = [
  { logo: bcd, label: "Building Construction Department(BCD)" },
  { logo: rcd, label: "Road Construction Department (RCD)" },
  { logo: rwd, label: "Rural Works Department (RWD)" },
  { logo: phed, label: "Public Health Engineering Department (PHED)" },
  { logo: energy, label: "Energy Department / BSPHCL" },
  { logo: pwd, label: "Public Works Department (PWD)" },
  { logo: wrd, label: "Water Resources Department (WRD)" },
  { logo: education, label: "Education Department" },
];

export default function Industries() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        {/* Header */}
        <div className="text-center mb-4">
          {/* <h2
            className="text-sm font-bold uppercase tracking-[0.2em] mb-2"
            style={{ color: "#75e029" }}
          >
            Industries We Empower
          </h2> */}
          <h3 className="text-3xl font-bold" style={{ color: "#0a192f" }}>
            Specialized by Department
          </h3>
          <div className="w-16 h-1 mx-auto mt-2" style={{ backgroundColor: "#e0a929" }} />
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Specialized bid management strategies for sectors that drive Bihar's growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="group  h-60 relative aspect-square overflow-hidden rounded-xl border border-slate-100 flex items-center justify-center p-6 transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: "#e3e6ec" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#afcbfc";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#e3e6ec";
              }}
            >
              <div className="text-center">

                {/* LOGO */}
                <img  
                  src={ind.logo}
                  alt={ind.label}
                  className="w-45 h-45 object-contain mx-auto mb-2 transition-transform duration-300 group-hover:scale-110"
                />

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