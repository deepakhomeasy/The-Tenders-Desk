import { useState, useRef } from "react";
import { Link } from "react-router-dom";

type DropdownItem = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },

  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Tender Filing", href: "/services/tender-filing" },
      { label: "Portal Registration", href: "/services/portal-registration" },
      { label: "Contractor Registration", href: "/services/contractor-registration" },
      { label: "Digital Signature (DSC)", href: "/services/digital-signature" },
    ],
  },

  {
    label: "Live Tenders",
    href: "/tenders",
    dropdown: [
      { label: "Live Tenders", href: "/tenders/live" },
      { label: "Tender Results", href: "/tenders/results" },
      { label: "Latest Opportunities", href: "/tenders/opportunities" },
      { label: "Government Tenders", href: "/tenders/government" },
    ],
  },

  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/">
            <img
              src="http://thetenderdesk.in/wp-content/uploads/2026/02/thethenderdesk-logo.png"
              alt="logo"
              className="h-20"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  setOpenDropdown(link.label);
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(() => {
                    setOpenDropdown(null);
                  }, 400);
                }}
              >

                {/* Normal Link */}
                {!link.dropdown && (
                  <Link
                    to={link.href || "/"}
                    className="text-sm font-semibold text-slate-600 hover:text-[#0a192f]"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.dropdown && (
                  <>
                    <Link
                      to={link.href || "#"}
                      className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-[#0a192f]"
                    >
                      {link.label}
                      <span className="text-xs">▼</span>
                    </Link>

                    {openDropdown === link.label && (
                      <div className="absolute top-8 left-0 w-60 bg-white shadow-xl rounded-lg py-2 border border-slate-200">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <button className="hidden md:block bg-[#e0a929] text-[#0a192f] font-bold px-6 py-2 rounded-lg hover:opacity-90">
            Talk to Expert
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white border-t">

          {navLinks.map((link) => (
            <div key={link.label}>

              {!link.dropdown && (
                <Link
                  to={link.href || "/"}
                  className="block py-2 font-semibold text-slate-700"
                >
                  {link.label}
                </Link>
              )}

              {link.dropdown && (
                <>
                  <div className="font-semibold py-2 text-slate-800">
                    {link.label}
                  </div>

                  <div className="pl-4 space-y-2 text-sm text-slate-600">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}

            </div>
          ))}

          <button className="w-full mt-3 py-3 rounded-lg font-bold bg-[#e0a929] text-[#0a192f]">
            Talk to Expert
          </button>

        </div>
      )}
    </header>
  );
}