"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lightbulb, Rocket, Globe, Heart, Award, Users } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerFast,
} from "@/lib/motion";

// ─── Values Data ────────────────────────────────────────────────────────────
const values = [
  {
    id: "curiosity",
    icon: Lightbulb,
    title: "Curiosity",
    description: "Every great invention starts with a question no one has thought to ask yet.",
  },
  {
    id: "ambition",
    icon: Rocket,
    title: "Ambition",
    description: "I build for the long arc of history, not the next quarter.",
  },
  {
    id: "openness",
    icon: Globe,
    title: "Openness",
    description: "The best ideas emerge at the intersection of disciplines and cultures.",
  },
  {
    id: "impact",
    icon: Heart,
    title: "Impact",
    description: "Technology only matters if it improves lives in meaningful ways.",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description: "I hold my work to the highest standard, always.",
  },
  {
    id: "community",
    icon: Users,
    title: "Community",
    description: "Building in public and sharing knowledge accelerates everyone.",
  },
];

// ─── Timeline Data ───────────────────────────────────────────────────────────
const timeline = [
  {
    id: "t1",
    year: "2015",
    title: "First Patent Filed",
    description:
      "Filed my first patent for a novel signal processing algorithm while completing my engineering degree.",
  },
  {
    id: "t2",
    year: "2017",
    title: "Founded First Startup",
    description:
      "Launched a B2B SaaS platform for industrial IoT monitoring, reaching 50 enterprise clients in 18 months.",
  },
  {
    id: "t3",
    year: "2019",
    title: "Deep Tech Pivot",
    description:
      "Shifted focus to foundational technology research, joining a DARPA-funded lab working on edge AI systems.",
  },
  {
    id: "t4",
    year: "2021",
    title: "NovaSpark Ventures",
    description:
      "Co-founded a climate-tech venture studio that has since backed three companies with combined $8M in funding.",
  },
  {
    id: "t5",
    year: "2022",
    title: "Meridian Labs",
    description:
      "Launched a deep-tech incubator focused on AI, biotech, and autonomous systems with five portfolio companies.",
  },
  {
    id: "t6",
    year: "2024",
    title: "Neural Inference Breakthrough",
    description:
      "Published research and filed patent for a neural inference engine achieving sub-10ms latency on edge hardware.",
  },
];

// ─── Stats Data ──────────────────────────────────────────────────────────────
const aboutStats = [
  { id: "s1", value: "47+", label: "Innovations" },
  { id: "s2", value: "12", label: "Patents" },
  { id: "s3", value: "10 Years", label: "Building" },
  { id: "s4", value: "25K+", label: "Community" },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#06080f] via-[#0d1230] to-[#06080f]" />
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/20 blur-[120px]"
          />
          <motion.div
            animate={{
              opacity: [0.3, 0.55, 0.3],
              scale: [1.05, 1, 1.05],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-amber-500/15 blur-[100px]"
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              The Person Behind the Work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-violet-400 bg-clip-text text-transparent">
              Toby
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/60 font-light tracking-wide mb-12"
          >
            Inventor.&nbsp; Entrepreneur.&nbsp; Technology Builder.
          </motion.p>

          {/* Portrait placeholder */}
          <motion.div
            variants={scaleIn}
            className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-amber-400/20 to-violet-600/20 border-2 border-amber-400/30 flex items-center justify-center shadow-[0_0_60px_rgba(251,191,36,0.15)]"
          >
            <span className="font-playfair text-4xl text-amber-400 font-bold select-none">
              TC
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-amber-400/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── 2. Origin Story ─────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Portrait placeholder — left on desktop */}
            <motion.div variants={slideInLeft} className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400/10 to-violet-600/10 blur-xl" />
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-gradient-to-br from-[#0d1230] to-[#12102a] border border-white/[0.08] flex flex-col items-center justify-center gap-4 overflow-hidden">
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-amber-400/20 to-violet-600/20 border-2 border-amber-400/30 flex items-center justify-center">
                    <span className="font-playfair text-3xl text-amber-400 font-bold">TC</span>
                  </div>
                  <div className="relative text-center px-6">
                    <p className="font-playfair text-lg text-white/80 font-semibold">Toby Carlson</p>
                    <p className="text-white/40 text-sm mt-1">Inventor &amp; Entrepreneur</p>
                  </div>
                  {/* Amber accent line */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Text — right on desktop */}
            <motion.div variants={slideInRight} className="space-y-6">
              <div>
                <span className="inline-block text-xs font-semibold text-amber-400 tracking-widest uppercase mb-3">
                  Origin Story
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight">
                  The Story So Far
                </h2>
              </div>

              <p className="text-white/60 text-lg leading-relaxed">
                My journey began not in a boardroom or a lab, but with an insatiable curiosity about
                how things work — and how they could work better. Growing up, I was the kid who took
                apart every gadget, not always successfully putting it back together, but always
                learning something new in the process.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                That curiosity evolved into a career at the intersection of invention and
                entrepreneurship. I have spent the last decade building technologies that push the
                boundaries of what is possible — from neural inference systems running on edge
                hardware to mesh-network protocols that rethink how data flows through the world.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Today, I lead a portfolio of ventures, research projects, and patent filings that
                span AI, hardware, biotech, and climate technology. My mission is simple: to build
                things that matter, to share what I learn, and to inspire the next generation of
                builders to think bigger.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Values Grid ──────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Section header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-amber-400 tracking-widest uppercase mb-3">
                Core Principles
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                What I Stand For
              </h2>
            </motion.div>

            {/* 2×3 grid */}
            <motion.div
              variants={staggerFast}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.id}
                    variants={scaleIn}
                    className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 hover:border-amber-400/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/5 to-violet-600/5 rounded-2xl" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-violet-600/20 border border-amber-400/20 flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-white mb-3">
                        {v.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Career Timeline ──────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Section header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block text-xs font-semibold text-amber-400 tracking-widest uppercase mb-3">
                Journey
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
                Career Milestones
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical amber line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/60 via-amber-400/30 to-transparent" />

              <div className="space-y-10">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    custom={idx}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Dot */}
                    <div className="absolute left-[18px] md:left-[26px] top-5 w-4 h-4 rounded-full bg-amber-400 border-2 border-[#06080f] shadow-[0_0_12px_rgba(251,191,36,0.6)] -translate-x-1/2" />

                    {/* Card */}
                    <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 hover:border-amber-400/30 hover:bg-white/[0.05] transition-all duration-300">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/5 to-transparent rounded-2xl" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-playfair text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Stats Row ────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-violet-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {aboutStats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={scaleIn}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 text-center hover:border-amber-400/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-400/5 to-violet-600/5 rounded-2xl" />
                <div className="relative">
                  <p className="font-playfair text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-sm tracking-wide">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. CTA Section ──────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-600/15 to-amber-500/10 rounded-full blur-[120px]" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-xs font-semibold text-amber-400 tracking-widest uppercase mb-4">
              What&apos;s Next
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-amber-400 to-violet-400 bg-clip-text text-transparent">
              remarkable
            </span>{" "}
            together.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg mb-10 leading-relaxed"
          >
            Whether you want to explore my work, collaborate on a project, or simply say hello —
            I&apos;d love to hear from you.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#06080f] font-semibold text-sm tracking-wide hover:shadow-[0_0_32px_rgba(251,191,36,0.4)] transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/connect"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/[0.04] text-white/80 font-semibold text-sm tracking-wide hover:border-white/40 hover:bg-white/[0.08] hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
