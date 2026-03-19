import { motion } from "framer-motion";
import { Search, ArrowRight, Download, Calculator, FileCheck, Mail, TrendingUp } from "lucide-react";

const Blog = () => {
  const latestArticles = [
    {
      id: 1,
      category: "Compliance",
      title: "GeM Portal Registration: A 2024 Step-by-Step Guide",
      description: "Navigate the updated verification protocols and OEM dashboard setup for the current fiscal year.",
      image: "https://picsum.photos/seed/gem/800/450",
    },
    {
      id: 2,
      category: "Operations",
      title: "Navigating the CPPP Tender Process",
      description: "Demystifying the Central Public Procurement Portal workflow for first-time bidders and MSMEs.",
      image: "https://picsum.photos/seed/cppp/800/450",
    },
    {
      id: 3,
      category: "Bid Quality",
      title: "Checklist for Error-Free Bid Documentation",
      description: "The 42-point quality check to ensure your bid isn't rejected on technical grounds before evaluation.",
      image: "https://picsum.photos/seed/checklist/800/450",
    },
    {
      id: 4,
      category: "Sector Focus",
      title: "Future Trends in Defence Procurement",
      description: "How 'Atmanirbhar Bharat' is shifting the landscape for private contractors in the defense sector.",
      image: "https://picsum.photos/seed/defense/800/450",
    },
  ];

  const resources = [
    { title: "2024 GeM Policy Handbook", icon: <Download className="w-4 h-4" /> },
    { title: "Bid Winning Ratio Calculator", icon: <Calculator className="w-4 h-4" /> },
    { title: "Tender Compliance Checklist", icon: <FileCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-[#f8f7f6] min-h-screen font-sans text-[#0a192f]">
      {/* Hero Section */}
      <section className="bg-[#0a192f] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e0a929]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10 uppercase">
              Knowledge Hub: <br />
              <span className="text-[#e0a929]">Strategies for Winning</span> <br />
              Government Contracts
            </h1>

            {/* Search Bar */}
            {/* <div className="flex items-center bg-white/5 border-b border-white/20 p-4 mb-8 focus-within:border-[#e0a929] transition-colors group">
              <Search className="text-white/50 mr-4 w-6 h-6 group-focus-within:text-[#e0a929]" />
              <input 
                type="text" 
                placeholder="Search insights, guides, or tender types..." 
                className="bg-transparent border-none text-white w-full focus:ring-0 placeholder:text-white/30 text-lg"
              />
            </div> */}

            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-white/50 text-[10px] tracking-widest font-bold uppercase">Popular:</span>
              {["GeM", "Bid Management", "Procurement Strategy"].map((tag) => (
                <button 
                  key={tag}
                  className="px-4 py-1.5 border border-white/20 text-white text-xs font-bold hover:bg-[#e0a929] hover:text-[#0a192f] hover:border-[#e0a929] transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 md:px-12 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white grid md:grid-cols-2 shadow-[24px_24px_48px_-12px_rgba(224,169,41,0.1)] group overflow-hidden"
          >
            <div className="relative h-[300px] md:h-full overflow-hidden">
              <img 
                src="https://picsum.photos/seed/infrastructure/1200/800" 
                alt="Infrastructure development"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 bg-[#e0a929] px-4 py-1 text-[10px] font-black uppercase text-[#0a192f]">
                Featured Insight
              </div>
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6 text-[#0a192f]/40 text-[10px] font-bold tracking-widest uppercase">
                <span>March 14, 2024</span>
                <span className="w-1 h-1 bg-[#e0a929] rounded-full" />
                <span>12 Min Read</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                How to Win ₹50Cr+ Infrastructure Tenders in India
              </h2>
              <p className="text-[#0a192f]/70 leading-relaxed mb-8 max-w-lg">
                An architectural breakdown of the complex compliance, technical bid requirements, and strategic alliances needed to dominate large-scale public works.
              </p>
              <button className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#0a192f] group-hover:text-[#e0a929] transition-colors">
                Read Full Strategy 
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Article Grid */}
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-12 border-l-4 border-[#e0a929] pl-6">
              Latest Intelligence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {latestArticles.map((article, index) => (
                <motion.article 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video bg-gray-200 mb-6 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-[10px] font-bold text-[#e0a929] tracking-widest uppercase mb-3">
                    {article.category}
                  </div>
                  <h4 className="text-xl font-bold leading-tight mb-4 group-hover:text-[#e0a929] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-[#0a192f]/60 mb-6 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-2">
                    View Analysis <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Newsletter Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a192f] p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
              <Mail className="text-[#e0a929] w-8 h-8 mb-6" />
              <h3 className="text-white text-2xl font-black mb-6 leading-tight">
                Get Winning Strategies in Your Inbox
              </h3>
              <p className="text-white/60 text-sm mb-8">
                Join 4,500+ government contractors receiving our weekly breakdown of high-value tender opportunities and policy updates.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Professional Email Address"
                  className="w-full bg-white/10 border-b border-white/20 text-white p-3 text-sm focus:border-[#e0a929] outline-none transition-colors placeholder:text-white/30"
                />
                <button className="w-full bg-[#e0a929] text-[#0a192f] p-4 font-black uppercase text-xs tracking-widest hover:brightness-110 transition-all">
                  Subscribe to Intelligence
                </button>
              </form>
            </motion.div>

            {/* Critical Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xs font-black uppercase tracking-widest text-[#e0a929] mb-6 flex items-center gap-2">
                Critical Resources 
                <span className="h-px bg-[#e0a929]/20 flex-grow" />
              </h4>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <button className="w-full flex items-center justify-between group py-3 border-b border-[#0a192f]/5 hover:border-[#e0a929]/30 transition-colors">
                      <span className="text-sm font-bold group-hover:text-[#e0a929] transition-colors">
                        {resource.title}
                      </span>
                      <span className="text-[#0a192f]/30 group-hover:text-[#e0a929] transition-colors">
                        {resource.icon}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trending Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 border border-[#0a192f]/10 bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-[#e0a929] w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Market Pulse</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                    <span>GeM Activity</span>
                    <span className="text-[#e0a929]">+14%</span>
                  </div>
                  <div className="h-1 bg-gray-100 w-full">
                    <div className="h-full bg-[#0a192f] w-[75%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                    <span>Infrastructure Bids</span>
                    <span className="text-[#e0a929]">+22%</span>
                  </div>
                  <div className="h-1 bg-gray-100 w-full">
                    <div className="h-full bg-[#0a192f] w-[88%]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
