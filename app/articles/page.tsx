"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Search, BookOpen, TrendingUp, Calendar } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = ["All", "AI", "Entrepreneurship", "Technology", "Innovation", "Research", "Future"];

const articles = [
  {
    id: "a1",
    category: "AI",
    title: "Why the Next Decade Belongs to Embodied AI",
    excerpt:
      "The shift from cloud-bound models to physically grounded agents will redefine every industry. Here is what that transition looks like from the inside.",
    readTime: "8 min",
    date: "May 2025",
    featured: true,
  },
  {
    id: "a2",
    category: "Entrepreneurship",
    title: "Building Companies That Outlast Their Founders",
    excerpt:
      "Lessons from a decade of starting, scaling, and sometimes failing ventures — and the structural decisions that determine longevity.",
    readTime: "12 min",
    date: "Apr 2025",
    featured: false,
  },
  {
    id: "a3",
    category: "Technology",
    title: "The Quiet Revolution in Semiconductor Design",
    excerpt:
      "Custom silicon is no longer the exclusive domain of trillion-dollar companies. A new generation of tools is democratizing chip design.",
    readTime: "10 min",
    date: "Mar 2025",
    featured: false,
  },
  {
    id: "a4",
    category: "Innovation",
    title: "Rethinking Human-Computer Interaction",
    excerpt:
      "The keyboard and mouse served us well for fifty years. The next interface paradigm is already here — and most people haven't noticed yet.",
    readTime: "7 min",
    date: "Feb 2025",
    featured: false,
  },
  {
    id: "a5",
    category: "AI",
    title: "The Ethics of Autonomous Decision-Making",
    excerpt:
      "As AI systems take on consequential choices, the frameworks we build today will shape the moral landscape of tomorrow's world.",
    readTime: "9 min",
    date: "Jan 2025",
    featured: false,
  },
  {
    id: "a6",
    category: "Innovation",
    title: "From Prototype to Patent: A Practical Guide",
    excerpt:
      "The path from a working prototype to a granted patent is full of traps. Here is the process that has worked across twelve successful filings.",
    readTime: "11 min",
    date: "Dec 2024",
    featured: false,
  },
  {
    id: "a7",
    category: "Entrepreneurship",
    title: "Why Deep Tech Needs More Storytellers",
    excerpt:
      "The most transformative technologies fail not because they don't work, but because no one can explain why they matter. That has to change.",
    readTime: "6 min",
    date: "Nov 2024",
    featured: false,
  },
  {
    id: "a8",
    category: "Technology",
    title: "The Future of Distributed Computing",
    excerpt:
      "Edge nodes, federated learning, and mesh architectures are converging into a new computing paradigm that makes the cloud look centralized.",
    readTime: "13 min",
    date: "Oct 2024",
    featured: false,
  },
  {
    id: "a9",
    category: "Research",
    title: "Investing in Ideas Before Markets Exist",
    excerpt:
      "The highest-return investments happen before the category has a name. How to identify and back ideas that are too early for conventional capital.",
    readTime: "8 min",
    date: "Sep 2024",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  AI: "text-violet-300 bg-violet-400/10 border-violet-400/20",
  Entrepreneurship: "text-amber-300 bg-amber-400/10 border-amber-400/20",
  Technology: "text-blue-300 bg-blue-400/10 border-blue-400/20",
  Innovation: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  Research: "text-rose-300 bg-rose-400/10 border-rose-400/20",
  Future: "text-cyan-300 bg-cyan-400/10 border-cyan-400/20",
};

function getCategoryColor(cat: string) {
  return categoryColors[cat] ?? "text-white/60 bg-white/5 border-white/10";
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = articles[0];

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Exclude featured from grid when showing All with no search
  const gridArticles =
    activeCategory === "All" && searchQuery === ""
      ? filtered.filter((a) => a.id !== "a1")
      : filtered;

  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06080f] via-[#0a0e1a] to-[#06080f]" />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-radial from-violet-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-radial from-amber-500/15 via-amber-600/5 to-transparent rounded-full blur-3xl"
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-white/70">85+ Articles Published</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-6xl md:text-8xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-br from-white via-white/95 to-white/70 bg-clip-text text-transparent">
                Articles
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed"
            >
              Thoughts on innovation, technology, entrepreneurship, and the ideas shaping our future.
            </motion.p>

            {/* Search */}
            <motion.div variants={fadeInUp} className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="Search articles…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-200 backdrop-blur-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Article ─────────────────────────────────────────────── */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-amber-400/20 rounded-3xl overflow-hidden group hover:border-amber-400/35 transition-all duration-500">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/[0.04] via-transparent to-violet-600/[0.04] pointer-events-none" />
              <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-amber-400/[0.05] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(featured.category)}`}>
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                      <TrendingUp className="w-3 h-3 text-amber-400" />
                      Featured Article
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    {featured.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-2xl">
                    {featured.excerpt}
                  </p>

                  {/* Footer row */}
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {featured.readTime} read
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {featured.date}
                      </span>
                    </div>
                    <Link
                      href="/articles"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#06080f] font-semibold text-sm rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Decorative icon block */}
                <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-2xl bg-white/[0.04] border border-white/[0.08] shrink-0">
                  <BookOpen className="w-20 h-20 text-amber-400/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ── Category Filters ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-amber-400 text-[#06080f] border-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.35)]"
                  : "bg-white/[0.04] text-white/60 border-white/[0.08] hover:bg-white/[0.08] hover:text-white/90"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Article Grid ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        {gridArticles.length === 0 ? (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center py-24 text-white/40"
          >
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">No articles found. Try a different filter or search term.</p>
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory + searchQuery}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {gridArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={fadeInUp}
                className="group relative flex flex-col p-6 bg-white/[0.04] border border-white/[0.08] rounded-2xl hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Category pill */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                      getCategoryColor(article.category)
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-bold text-white leading-snug mb-3 group-hover:text-amber-100 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime} read
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                  </div>
                  <Link
                    href="/articles"
                    className="flex items-center gap-1 text-xs text-amber-400/70 hover:text-amber-400 transition-colors duration-200 font-medium"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </section>

      {/* ── Newsletter CTA ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative p-10 md:p-14 bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/[0.1] rounded-3xl overflow-hidden text-center"
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-amber-400/[0.06] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">Newsletter</span>
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
              Stay in the Loop
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Get new articles, research notes, and ideas delivered directly to your inbox — no noise, just signal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/30 transition-all duration-200"
              />
              <button className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-[#06080f] font-semibold text-sm rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-white/25 text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
