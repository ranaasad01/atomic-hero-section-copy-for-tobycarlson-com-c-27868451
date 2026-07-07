"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Clock, Eye, Play as Youtube, Mic, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
} from "@/lib/motion";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Video {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  date: string;
  description?: string;
  featured?: boolean;
}

// ─── Data ───────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Talks", "Demos", "Interviews", "Tutorials", "Keynotes"];

const VIDEOS: Video[] = [
  {
    id: "v1",
    title: "The Future of Embodied AI — Keynote 2025",
    category: "Keynotes",
    duration: "42:18",
    views: "8.2K",
    date: "Mar 2025",
    featured: true,
    description:
      "A deep dive into the next frontier of artificial intelligence — where models leave the cloud and inhabit the physical world. This keynote explores the architectural shifts, hardware requirements, and societal implications of embodied AI systems that sense, reason, and act in real environments.",
  },
  {
    id: "v2",
    title: "Building Neural Inference at the Edge",
    category: "Demos",
    duration: "18:45",
    views: "3.1K",
    date: "Feb 2025",
  },
  {
    id: "v3",
    title: "From Idea to Patent: My Process",
    category: "Tutorials",
    duration: "24:30",
    views: "5.7K",
    date: "Jan 2025",
  },
  {
    id: "v4",
    title: "Deep Tech Entrepreneurship — Interview",
    category: "Interviews",
    duration: "55:12",
    views: "2.4K",
    date: "Dec 2024",
  },
  {
    id: "v5",
    title: "Semiconductor Design for Founders",
    category: "Talks",
    duration: "31:00",
    views: "4.8K",
    date: "Nov 2024",
  },
  {
    id: "v6",
    title: "AI Ethics in Practice",
    category: "Talks",
    duration: "28:15",
    views: "6.3K",
    date: "Oct 2024",
  },
  {
    id: "v7",
    title: "Distributed Systems Explained",
    category: "Tutorials",
    duration: "19:40",
    views: "3.9K",
    date: "Sep 2024",
  },
  {
    id: "v8",
    title: "Climate Tech Investment Thesis",
    category: "Interviews",
    duration: "47:22",
    views: "2.1K",
    date: "Aug 2024",
  },
];

// Gradient palettes per category for visual variety
const CARD_GRADIENTS: Record<string, string> = {
  Keynotes: "from-violet-900/70 to-blue-900/70",
  Demos: "from-blue-900/70 to-cyan-900/70",
  Tutorials: "from-indigo-900/70 to-blue-900/70",
  Interviews: "from-slate-800/70 to-blue-900/70",
  Talks: "from-blue-900/70 to-violet-900/70",
};

function getCategoryGradient(category: string): string {
  return CARD_GRADIENTS[category] ?? "from-blue-900/70 to-violet-900/70";
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function CategoryPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-400/10 text-amber-400 border border-amber-400/20">
      {label}
    </span>
  );
}

function StatBadge({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1.5 text-amber-400">
        <Icon className="w-4 h-4" />
        <span className="text-2xl font-bold text-white">{value}</span>
      </div>
      <span className="text-xs text-white/40 uppercase tracking-widest">{label}</span>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function VideosPage() {
  const [activeTab, setActiveTab] = useState("All");

  const featuredVideo = VIDEOS.find((v) => v.featured)!;
  const filteredVideos = VIDEOS.filter((v) => {
    if (activeTab === "All") return true;
    return v.category === activeTab;
  });
  // Grid videos: exclude featured from grid when "All" or "Keynotes" tab
  const gridVideos = filteredVideos.filter((v) => !v.featured);

  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06080f] via-[#0a0f1e] to-[#06080f]" />
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.05, 1, 1.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[80px]"
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
          {/* Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <Play className="w-3 h-3" />
            Media Library
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Videos
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Talks, demos, interviews, and insights — ideas in motion.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
          >
            <motion.div variants={scaleIn}>
              <StatBadge icon={Play} value="120+" label="Videos" />
            </motion.div>
            <motion.div variants={scaleIn}>
              <StatBadge icon={Eye} value="25K+" label="Views" />
            </motion.div>
            <motion.div variants={scaleIn}>
              <StatBadge icon={Mic} value="60+" label="Talks" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Category Tabs ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeTab === cat
                  ? "bg-amber-400 text-[#06080f] border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                  : "bg-white/[0.04] text-white/60 border-white/[0.08] hover:bg-white/[0.08] hover:text-white/90"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Featured Video ───────────────────────────────────────────────── */}
      {(activeTab === "All" || activeTab === "Keynotes") && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-6"
          >
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Featured</span>
            <h2 className="text-2xl font-bold text-white mt-1">Latest Keynote</h2>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Thumbnail */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-900/50 to-violet-900/50 flex items-center justify-center group cursor-pointer">
                {/* Subtle animated glow */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10"
                />
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Duration badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-mono font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredVideo.duration}
                </div>
                {/* Play button */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center group-hover:bg-amber-400/30 group-hover:border-amber-400/60 group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.15)]">
                  <Play className="w-8 h-8 text-amber-400 ml-1" fill="currentColor" />
                </div>
                {/* Category pill */}
                <div className="absolute bottom-4 left-4">
                  <CategoryPill label={featuredVideo.category} />
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {featuredVideo.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
                  {featuredVideo.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 mb-8">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredVideo.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    {featuredVideo.views} views
                  </span>
                  <span>{featuredVideo.date}</span>
                </div>
                <a
                  href="https://youtube.com/@tobycarlson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-[#06080f] font-semibold text-sm hover:bg-amber-300 transition-all duration-200 shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_32px_rgba(251,191,36,0.5)] self-start"
                >
                  <Play className="w-4 h-4" fill="currentColor" />
                  Watch Now
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ── Video Grid ───────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8 pb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white">
            {activeTab === "All" ? "All Videos" : activeTab}
          </h2>
          <p className="text-white/40 text-sm mt-1">
            {gridVideos.length} {gridVideos.length === 1 ? "video" : "videos"}
          </p>
        </motion.div>

        {gridVideos.length === 0 ? (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center py-20 text-white/30"
          >
            <Play className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg">No videos in this category yet.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {gridVideos.map((video) => (
              <motion.div
                key={video.id}
                variants={scaleIn}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${getCategoryGradient(
                    video.category
                  )} flex items-center justify-center overflow-hidden`}
                >
                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/5 group-hover:to-violet-400/5 transition-all duration-500" />

                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>

                  {/* Play overlay — visible on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-amber-400 ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Static play icon (subtle) */}
                  <div className="opacity-30 group-hover:opacity-0 transition-opacity duration-300 absolute">
                    <Play className="w-10 h-10 text-white/40" />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-amber-400/90 transition-colors duration-200 line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <CategoryPill label={video.category} />
                    <div className="flex items-center gap-3 text-xs text-white/30">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {video.views}
                      </span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* ── Subscribe CTA ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden p-10 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-400/5 rounded-full blur-[80px]"
            />
          </div>
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

          <div className="relative z-10">
            {/* YouTube icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
              <Youtube className="w-8 h-8 text-red-400" />
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Subscribe for New Content
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Get notified when new talks, demos, and interviews drop. Join a growing community of innovators and builders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://youtube.com/@tobycarlson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-amber-400 text-[#06080f] font-semibold text-sm hover:bg-amber-300 transition-all duration-200 shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)]"
              >
                <Youtube className="w-4 h-4" />
                Subscribe on YouTube
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.04] text-white/70 font-medium text-sm hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2] transition-all duration-200"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-8 border-t border-white/[0.06]">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">120+</div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Videos Published</div>
              </div>
              <div className="w-px h-8 bg-white/[0.08] hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25K+</div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Total Views</div>
              </div>
              <div className="w-px h-8 bg-white/[0.08] hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">60+</div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Talks Delivered</div>
              </div>
              <div className="w-px h-8 bg-white/[0.08] hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-0.5">Categories</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
