import React from "react";

const inputClass =
  "border p-3 rounded-lg w-full " +
  "bg-white dark:bg-[#2a2a2a] " +
  "text-slate-900 dark:text-white " +
  "border-slate-200 dark:border-slate-600 " +
  "placeholder:text-slate-400 dark:placeholder:text-slate-500 " +
  "focus:ring-2 focus:ring-primary/50 outline-none";

const Contact: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">

      {/* HERO */}
      <section className="bg-navy-deep py-16 md:py-24 px-6 lg:px-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-[80px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase mb-4">
            India's Leading Bid Consultants
          </span>

          <h1 className="text-4xl md:text-6xl font-black mb-6 dark:text-black">
            Partner with India's <br />
            <span className="text-primary">Premier Bid Consultants</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl">
            Whether it's a GeM bid, a state tender, or a complex infrastructure project.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <div className="px-6 lg:px-40 py-12 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* FORM */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1e1e1e] rounded-xl p-8 shadow border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-2 text-navy-deep dark:text-white">
              Get Free Tender Consultation
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Fill the form and we’ll contact you within 24 hours.
            </p>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className={inputClass} />
                <input type="email" placeholder="Work Email" className={inputClass} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Phone Number" className={inputClass} />
                <select className={inputClass}>
                  <option>Infrastructure</option>
                  <option>IT & Software</option>
                  <option>Healthcare</option>
                  <option>Logistics</option>
                  <option>Other</option>
                </select>
              </div>

              <textarea
                placeholder="Describe your requirement..."
                rows={4}
                className={inputClass}
              />

              <button className="w-full bg-primary text-navy-deep py-3 rounded-lg font-bold hover:opacity-90 transition">
                Schedule My Free Consultation
              </button>

              <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                By submitting this form, you agree to Terms & Privacy Policy.
              </p>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* QUICK CONNECT */}
            <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-navy-deep dark:text-white">
                Quick Connect
              </h3>

              <p className="dark:text-slate-300">📞 011-2345678</p>
              <p className="dark:text-slate-300">📧 info@tenderdesk.in</p>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="text-green-600 font-semibold mt-2 inline-block"
              >
                WhatsApp Chat →
              </a>
            </div>

            {/* OFFICES */}
            <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl border dark:border-slate-700 shadow-sm flex flex-col gap-6">

              {/* Delhi */}
              <div className="flex gap-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzG1N0UkNPVgR8OXbGKTuWoUzo4jqOjDkmnnR5mIltyqKF5rBdHIDR0ineLnSr8tVmTJ0tFIcEg5wqzT3qTSzeTIkrjlBO4qXKuUdx98h_dhZq5EoYjsFLay9Kx6W03oxU3pae5bH0UXHUNs7bMbh5-A0H2uq1JkxjRWUTVeZkCNuMgx8RoxQqf2z4H4D9eE0qnV6_kxy5Nby762257kwpLgAMqgdf2kuN0Dq-xQMTCooSq_OonElZiZBpKqEbfnjWU7PYyNiz1awy"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold text-navy-deep dark:text-white">
                    Delhi HQ
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Connaught Place, New Delhi
                  </p>
                </div>
              </div>

              {/* Mumbai */}
              <div className="flex gap-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCScbmfjr5OLIWBBwrcwkEHOt6ECWaJi1WXF2RK0h_8GRc32W9sXKr8vao-jv13igQ17w6yiuc9pku0EhhpOXGmlSIOg-b9n0P7OIr_oArmpbs6ePTHs6SUmswZB0WLIgRrdSDzw3pbbeEjGFtpyszhiRGMuS0xiRfjTcYNv0qixp9mRmv0mjAB-fUQvOOjyVhuPL6X3W77VxIxiwD2Bfo2Frop0mhb8BxkbYZxyP_VmFrSDzr2jD5sDJi8bycu9rpi37bS1tGn4Ikn"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-bold text-navy-deep dark:text-white">
                    Mumbai Office
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Bandra Kurla Complex, Mumbai
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="h-48 rounded-xl overflow-hidden border dark:border-slate-700">
              <iframe
                src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;