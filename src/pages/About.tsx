import { motion } from "framer-motion"; // ✅ FIXED
import { 
  CheckCircle, 
  TrendingUp, 
  Gavel, 
  BarChart3, 
  Building2
} from "lucide-react";
import tenderImg from "./tender.png";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f7f6] font-sans text-slate-900 selection:bg-[#e0a929]/30">
      <main>
        {/* Hero Section */}
        <section className="relative flex h-[500px] items-center justify-center overflow-hidden bg-[#0f172a]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl px-6 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Empowering Indian Businesses to Win Big
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Bridging the gap between private enterprise and government opportunity through strategic excellence and integrity.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-24 px-6 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e0a929]">Our Purpose</span>
                  <h2 className="mt-2 text-3xl font-bold text-[#0f172a] md:text-4xl">Mission & Vision</h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    To democratize access to government contracts for every Indian enterprise, ensuring transparency, efficiency, and growth for the nation's economic engine.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex gap-4 border-l-4 border-[#e0a929] bg-[#f8f7f6] p-6 rounded-r-xl">
                    <CheckCircle className="h-8 w-8 shrink-0 text-[#e0a929]" />
                    <div>
                      <h4 className="font-bold text-[#0f172a]">Integrity First</h4>
                      <p className="mt-1 text-sm text-slate-500">Upholding the highest standards of ethics in every procurement process.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-l-4 border-[#e0a929] bg-[#f8f7f6] p-6 rounded-r-xl">
                    <TrendingUp className="h-8 w-8 shrink-0 text-[#e0a929]" />
                    <div>
                      <h4 className="font-bold text-[#0f172a]">Strategic Growth</h4>
                      <p className="mt-1 text-sm text-slate-500">Driving sustainable expansion for our clients through high-value tenders.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={tenderImg}
                    alt="Business team"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-[#e0a929] p-8 text-[#0f172a] shadow-xl md:block">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm font-semibold uppercase tracking-wider">Years of Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-[#0f172a] py-24 px-6 md:px-12 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e0a929]">Expertise</span>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Indian Government Procurement Experts</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Gavel,
                  title: "Tender Compliance",
                  desc: "Navigating complex GeM and e-Procurement regulations with 100% adherence to legal frameworks."
                },
                {
                  icon: BarChart3,
                  title: "Market Intelligence",
                  desc: "Deep-dive analysis of historical data to predict winning bid margins and competitor strategies."
                },
                {
                  icon: Building2,
                  title: "Liaison Services",
                  desc: "Facilitating seamless communication between corporate entities and government departments."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-xl border border-white/10 p-8 transition-colors hover:bg-white/5"
                >
                  <item.icon className="mb-6 h-10 w-10 text-[#e0a929]" />
                  <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-white py-24 px-6 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e0a929]">Leadership</span>
              <h2 className="mt-2 text-3xl font-bold text-[#0f172a]">The Minds Behind The Desk</h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Rajesh Varma",
                  role: "Founder & CEO",
                  desc: "Ex-IAS officer with 25 years of procurement experience.",
                  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                },
                {
                  name: "Priya Sharma",
                  role: "Chief Strategy Officer",
                  desc: "Specialist in PSU tender management and policy analysis.",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                },
                {
                  name: "Amitabh Das",
                  role: "Head of Legal",
                  desc: "Expert in arbitration and contract law within India.",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  name: "Sonal Mehra",
                  role: "Director of Operations",
                  desc: "Overseeing nationwide project delivery and client relations.",
                  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                }
              ].map((person, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl">
                    <img 
                      src={person.img} 
                      alt={person.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#e0a929]/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0f172a]">{person.name}</h4>
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[#e0a929]">{person.role}</p>
                  <p className="text-xs leading-relaxed text-slate-500">{person.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Presence */}
        <section className="bg-[#f8f7f6] py-24 px-6 md:px-12">
          <div className="mx-auto max-w-7xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e0a929]">Presence</span>
            <h3 className="mt-2 mb-12 text-3xl font-bold text-[#0f172a]">National Reach Across India</h3>
            
            <div className="relative h-[450px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" 
                alt="India Map"
                className="h-full w-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="max-w-md rounded-xl bg-white/90 p-10 shadow-2xl backdrop-blur-sm"
                >
                  <p className="mb-4 text-xl font-bold text-[#0f172a]">Pan-India Support Network</p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    With regional hubs in New Delhi, Mumbai, Bangalore, and Kolkata, we provide on-ground intelligence and support in every state and union territory.
                  </p>
                  <div className="mt-8 flex justify-center gap-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#e0a929]">28</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">States Covered</p>
                    </div>
                    <div className="h-10 w-px bg-slate-200" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#e0a929]">500+</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">PSUs Tracked</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="bg-[#e0a929] py-20 px-6 md:px-12 text-[#0f172a]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Ready to Scale Your Success?</h2>
            <p className="mb-10 text-lg font-medium opacity-90">
              Partner with India's most trusted procurement consultants and start winning government contracts today.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-[#0f172a] px-10 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95">
                Book a Consultation
              </button>
              <button className="rounded-lg border-2 border-[#0f172a] px-10 py-4 font-bold transition-all hover:bg-[#0f172a] hover:text-white active:scale-95">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
