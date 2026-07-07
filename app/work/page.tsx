"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Filter, Grid, List, ExternalLink, Lightbulb, FileText, Cpu, Layers, FlaskConical, Rocket, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, fadeIn } from "@/lib/motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface WorkItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  highlight?: boolean;
  icon: React.ElementType;
  gradient: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const workItems: WorkItem[] = [
  {
    id: "w1",
    category: "AI Systems",
    title: "Neural Inference Engine",
    description:
      "A lightweight on-device inference runtime that brings large-language-model reasoning to edge hardware with sub-10ms latency.",
    tags: ["Machine Learning", "Edge AI", "C++"],
    year: "2024",
    highlight: true,
    icon: Cpu,
    gradient: "from-blue-900/60 to-violet-900/60",
  },
  {
    id: "w2",
    category: "Ventures",
    title: "Meridian Labs",
    description:
      "Co-founded a deep-tech studio that has incubated five startups across climate tech, biotech, and autonomous systems.",
    tags: ["Entrepreneurship", "Deep Tech", "Incubator"],
    year: "2022",
    highlight: false,
    icon: Rocket,
    gradient: "from-amber-900/40 to-orange-900/40",
  },
  {
    id: "w3",
    category: "Patents",
    title: "Adaptive Signal Routing Protocol",
    description:
      "Patented mesh-network protocol that dynamically reroutes data packets around congestion, improving throughput by 3×.",
    tags: ["Networking", "Patent", "Protocol Design"],
    year: "2023",
    highlight: false,
    icon: FileText,
    gradient: "from-emerald-900/40 to-teal-900/40",
  },
  {
    id: "w4",
    category: "Hardware",
    title: "QuantumSense Array",
    description:
      "Novel sensor array for high-fidelity environmental monitoring, combining photonic and MEMS technologies for unprecedented sensitivity.",
    tags: ["Sensors", "IoT", "Hardware"],
    year: "2023",
    highlight: false,
    icon: Zap,
    gradient: "from-cyan-900/40 to-blue-900/40",
  },
  {
    id: "w5",
    category: "Software",
    title: "Cognify Platform",
    description:
      "AI-powered knowledge management SaaS that surfaces insights from unstructured data, reducing research time by 60%.",
    tags: ["SaaS", "AI", "Productivity"],
    year: "2024",
    highlight: false,
    icon: Layers,
    gradient: "from-violet-900/50 to-purple-900/50",
  },
  {
    id: "w6",
    category: "Research",
    title: "Distributed Consensus Algorithm",
    description:
      "Byzantine fault-tolerant consensus mechanism designed for edge networks, achieving 99.97% reliability under adversarial conditions.",
    tags: ["Distributed Systems", "Research", "Algorithms"],
    year: "2022",
    highlight: false,
    icon: FlaskConical,
    gradient: "from-rose-900/40 to-pink-900/40",
  },
  {
    id: "w7",
    category: "AI Systems",
    title: "BioSignal Decoder",
    description:
      "Real-time neural signal interpretation system for prosthetics, enabling natural motor control with 94% gesture recognition accuracy.",
    tags: ["Biotech", "ML", "Signal Processing"],
    year: "2023",
    highlight: false,
    icon: Cpu,
    gradient: "from-blue-900/50 to-indigo-900/50",
  },
  {
    id: "w8",
    category: "Ventures",
    title: "NovaSpark Ventures",
    description:
      "Climate-tech venture studio with three portfolio companies focused on carbon capture, renewable storage, and sustainable materials.",
    tags: ["Climate Tech", "Venture", "Impact"],
    year: "2021",
    highlight: false,
    icon: Rocket,
    gradient: "from-green-900/40 to-emerald-900/40",
  },
  {
    id: "w9",
    category: "Patents",
    title: "Photonic Memory Cell",
    description:
      "Optical data storage patent pending — a photonic memory architecture that achieves 10× the density of conventional flash at lower power.",
    tags: ["Photonics", "Patent", "Storage"],
    year: "2024",
    highlight: false,
    icon: FileText,
    gradient: "from-yellow-900/40 to-amber-900/40",
  },
];

const categories = [
  "All",
  "AI Systems",
  "Ventures",
  "Patents",
  "Hardware",
  "Software",
  "Research",
];

const statsStrip = [
  { label: "Innovations", value: "47+", icon: Lightbulb },
  { label: "Patents", value: "12", icon: FileText },
  { label: "Projects", value: "30+", icon: Layers },
];

// ─── Category badge colour map ────────────────────────────────────────────────

const categoryColour: Record<string, string> = {
  "AI Systems": "text-blue-300 bg-blue-900/40 border-blue-700/30",
  Ventures: "text-amber-300 bg-amber-900/30 border-amber-700/30",
  Patents: "text-emerald-300 bg-emerald-900/30 border-emerald-700/30",
  Hardware: "text-cyan-300 bg-cyan-900/30 border-cyan-700/30",
  Software: "text-violet-300 bg-violet-900/30 border-violet-700/30",
  Research: "text-rose-300 bg-rose-900/30 border-rose-700/30",
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? workItems
      : workItems.filter(
          (item) =>
            item.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06080f] via-[#0a0d1a] to-[#06080f]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-violet-950/30" />

        {/* Glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none"
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Portfolio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              My{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Work
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              A curated collection of inventions, ventures, and technology
              projects that define my journey as a builder.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#06080f] to-transparent pointer-events-none" />
      </section>

      {/* ── Stats Strip ───────────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 -mt-4 mb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 gap-4"
        >
          {statsStrip.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide"
        >
          <div className="flex items-center gap-2 text-white/30 shrink-0">
            <Filter className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-medium">
              Filter
            </span>
          </div>
          <div className="w-px h-5 bg-white/10 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 ${
                activeFilter === cat
                  ? "bg-amber-400 text-[#06080f] border-amber-400 shadow-[0_0_16px_rgba(251,191,36,0.3)]"
                  : "bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:text-white/90"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Portfolio Grid ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item) => {
              const Icon = item.icon;
              const badgeClass =
                categoryColour[item.category] ??
                "text-white/60 bg-white/5 border-white/10";

              return (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-amber-400/30 hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
                >
                  {/* Card visual */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

                    {/* Animated glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/5 to-transparent" />

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white/70" />
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-xs text-white/50 font-medium">
                      {item.year}
                    </div>

                    {/* Highlight indicator */}
                    {item.highlight && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-xs text-amber-400 font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    {/* Category badge */}
                    <span
                      className={`self-start px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeClass}`}
                    >
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-lg font-bold text-white leading-snug group-hover:text-amber-100 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer link */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.06]">
                      <span className="text-xs text-white/30">{item.year}</span>
                      <button
                        aria-label={`View ${item.title}`}
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all duration-200"
                      >
                        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-amber-400 transition-colors duration-200" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-white/30"
          >
            <p className="text-lg">No items in this category yet.</p>
          </motion.div>
        )}
      </section>

      {/* ── CTA Section ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/[0.06]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06080f] via-[#0a0d1a] to-[#06080f]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-amber-400/10 blur-[80px] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs uppercase tracking-widest text-amber-400/70 font-semibold mb-4"
            >
              Let&apos;s Build Together
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Interested in collaborating?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Whether you have a bold idea, a technical challenge, or a venture
              to build — I&apos;d love to hear from you.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-[#06080f] font-bold text-sm hover:shadow-[0_0_32px_rgba(251,191,36,0.4)] transition-all duration-300 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 bg-white/5 text-white/80 font-medium text-sm hover:border-white/30 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
