const socialIcons = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071a33] text-white pt-12 pb-6 border-t border-[#1e293b]">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="bg-[#e0a929] p-2 rounded">
                <span className="material-symbols-outlined text-[#071a33]">
                  account_balance
                </span>
              </div>

              <h3 className="text-lg font-semibold">
                The Tender Desk
              </h3>

            </div>

            <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
              India's premier tender consultancy enabling businesses to scale
              through strategic government procurement.
            </p>

            <div className="flex gap-3">

              <div className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center hover:bg-[#e0a929] hover:text-[#071a33] transition">
                in
              </div>

              <div className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center hover:bg-[#e0a929] hover:text-[#071a33] transition">
                X
              </div>

              <div className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center hover:bg-[#e0a929] hover:text-[#071a33] transition">
                ▶
              </div>

            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-[#e0a929] text-xs font-bold tracking-widest mb-4">
              SOLUTIONS
            </h4>

            <ul className="space-y-3 text-sm text-[#94a3b8]">
              <li>Bid Management</li>
              <li>Tender Intelligence</li>
              <li>Compliance Audit</li>
              <li>GeM Registration</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-[#e0a929] text-xs font-bold tracking-widest mb-4">
              COMPANY
            </h4>

            <ul className="space-y-3 text-sm text-[#94a3b8]">
              <li>About Us</li>
              <li>Our Success Stories</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h4 className="text-[#e0a929] text-xs font-bold tracking-widest mb-4">
              LOCATION
            </h4>

            <p className="text-sm text-[#94a3b8] leading-relaxed mb-3">
              Level 4, Corporate Plaza <br />
              Gurugram, Haryana – 122018 <br />
              India
            </p>

            <p className="text-sm font-semibold text-[#94a3b8] mb-6">
              contact@thetenderdesk.in
            </p>

            <h4 className="text-[#e0a929] text-xs font-bold tracking-widest mb-3">
              NEWSLETTER
            </h4>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#1e293b] border border-[#334155] rounded-md px-3 py-2 text-sm mb-3"
            />

            <button className="w-full bg-[#e0a929] text-[#071a33] font-semibold py-2 rounded-md hover:opacity-90">
              Subscribe
            </button>
          </div>

        </div>

        <div className="border-t border-[#1e293b] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#64748b]">

          <p>
            © {new Date().getFullYear()} The Tender Desk. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>

        </div>

      </div>

    </footer>
  );
}