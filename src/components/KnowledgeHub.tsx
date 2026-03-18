const articles = [
  {
    tag: "Guides",
    tagColor: "#e0a929",
    tagBg: "rgba(224,169,41,0.12)",
    title: "The Ultimate 2024 Guide to Winning Large Tenders",
    desc: "Master the art of competitive bidding with our comprehensive framework.",
    readTime: "12 min read",
  },
  {
    tag: "Bid Insights",
    tagColor: "#22c55e",
    tagBg: "rgba(34,197,94,0.12)",
    title: "Optimizing Your GeM Portal Shop for Maximum Visibility",
    desc: "Learn how to optimize your profile and increase participation in tenders.",
    readTime: "8 min read",
  },
  {
    tag: "Procurement Update",
    tagColor: "#818cf8",
    tagBg: "rgba(129,140,248,0.12)",
    title: "Understanding New MSME Preferences in Public Procurement",
    desc: "Key changes impacting public procurement policies.",
    readTime: "6 min read",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <h2
              className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#e0a929" }}
            >
              Knowledge Hub
            </h2>
            <h3 className="text-3xl font-bold" style={{ color: "#0a192f" }}>
              Insights & Resources
            </h3>
            <p className="text-slate-500 mt-2 max-w-lg text-sm">
              Stay ahead with expert articles, guides, and procurement intelligence from our team.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all whitespace-nowrap"
            style={{ color: "#e0a929" }}
          >
            Explore all resources →
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-[#e0a929]/40 hover:shadow-lg transition-all overflow-hidden cursor-pointer"
            >
              {/* Top color bar */}
              <div className="h-1.5" style={{ backgroundColor: article.tagColor }} />

              <div className="p-8">
                {/* Tag */}
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wider"
                  style={{ backgroundColor: article.tagBg, color: article.tagColor }}
                >
                  {article.tag}
                </span>

                <h4
                  className="text-lg font-bold mb-3 leading-snug group-hover:text-[#e0a929] transition-colors"
                  style={{ color: "#0a192f" }}
                >
                  {article.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{article.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">{article.readTime}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-bold hover:gap-2 transition-all"
                    style={{ color: "#e0a929" }}
                  >
                    Read more
                    <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
