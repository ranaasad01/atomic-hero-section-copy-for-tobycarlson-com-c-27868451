"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, FileText, Eye, Mail, Play, ChevronDown, Star, Lightbulb, Rocket, Globe, Activity, Users, BookOpen, Video, Mic, Award, CheckCircle, ArrowUpRight, Circle } from 'lucide-react';
import { useTranslations } from "next-intl";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerFast,
} from "@/lib/motion";
import { stats, APP_NAME, APP_TAGLINE } from "@/lib/data";

// ─── Inline data ────────────────────────────────────────────────────────────

const featuredWork = [
  {
    id: "w1",
    category: "AI Systems",
    title: "Neural Inference Engine",
    description:
      "A lightweight on-device inference runtime that brings large-language-model reasoning to edge hardware with sub-10ms latency.",
    tags: ["Machine Learning", "Edge AI", "C++"],
    image: "https://developer.nvidia.com/blog/parallelforall/wp-content/uploads/2016/06/GIE_Graphics_FINAL-1.png",
    year: "2024",
    highlight: true,
  },
  {
    id: "w2",
    category: "Venture",
    title: "Meridian Labs",
    description:
      "Co-founded a deep-tech studio that has incubated five startups across climate tech, biotech, and autonomous systems.",
    tags: ["Entrepreneurship", "Deep Tech", "Incubator"],
    image: "https://lirp.cdn-website.com/a5211a53/dms3rep/multi/opt/Meridian+Logo-Vector-640w.png",
    year: "2022",
    highlight: false,
  },
  {
    id: "w3",
    category: "Patent",
    title: "Adaptive Signal Routing Protocol",
    description:
      "Patented mesh-network protocol that dynamically reroutes data packets around congestion, improving throughput by 3x.",
    tags: ["Networking", "Patent", "Protocol Design"],
    image: "https://www.vhb.com/globalassets/viewpoints/whitepaper/adaptive-signal-control-technology/adaptive_signal_control_technology_image.jpg",
    year: "2023",
    highlight: false,
  },
];

const articles = [
  {
    id: "a1",
    title: "Why the Next Decade Belongs to Embodied AI",
    excerpt:
      "The shift from cloud-bound models to physically grounded agents will redefine every industry. Here is what that transition looks like from the inside.",
    readTime: "8 min read",
    date: "May 2025",
    tag: "AI",
  },
  {
    id: "a2",
    title: "Building Companies That Outlast Their Founders",
    excerpt:
      "Lessons from a decade of starting, scaling, and sometimes failing ventures — and the structural decisions that determine longevity.",
    readTime: "12 min read",
    date: "Apr 2025",
    tag: "Entrepreneurship",
  },
  {
    id: "a3",
    title: "The Quiet Revolution in Semiconductor Design",
    excerpt:
      "Custom silicon is no longer the exclusive domain of trillion-dollar companies. A new generation of tools is democratizing chip design.",
    readTime: "10 min read",
    date: "Mar 2025",
    tag: "Hardware",
  },
];

const videos = [
  {
    id: "v1",
    title: "From Idea to Patent in 90 Days",
    duration: "24:18",
    views: "142K",
    thumb: "/images/video-patent-process-inventor.jpg",
  },
  {
    id: "v2",
    title: "The Architecture of Intelligent Systems",
    duration: "38:52",
    views: "98K",
    thumb: "/images/video-intelligent-systems-architecture.jpg",
  },
  {
    id: "v3",
    title: "Raising Capital Without Losing Your Vision",
    duration: "31:07",
    views: "76K",
    thumb: "/images/video-startup-fundraising-vision.jpg",
  },
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Invention",
    body: "Turning first-principles thinking into patentable breakthroughs across AI, hardware, and networked systems.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    body: "Founding and scaling ventures from zero to market — navigating product, capital, and team with equal conviction.",
  },
  {
    icon: Globe,
    title: "Technology Building",
    body: "Architecting intelligent systems that operate at scale, from edge inference runtimes to distributed data platforms.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    body: "Publishing research, articles, and talks that make complex ideas accessible to builders and curious minds alike.",
  },
];

const testimonials = [
  {
    id: "t1",
    quote:
      "Toby has a rare ability to see the full arc of a technology — from raw concept to deployed product — and execute at every stage.",
    name: "Dr. Priya Nair",
    role: "Chief Scientist, Helion Dynamics",
    avatar: "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_public_profile_photo_320x320/pcgmylcyzjbevqvtb8rw/priya-nair-md-chicago-il.jpg",
  },
  {
    id: "t2",
    quote:
      "Working with Toby reshaped how our team thinks about product innovation. His frameworks are practical, not theoretical.",
    name: "Marcus Webb",
    role: "CEO, Stratum Ventures",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13483.png&w=350&h=254",
  },
  {
    id: "t3",
    quote:
      "One of the clearest thinkers I have encountered in twenty years of investing. His conviction is backed by genuine depth.",
    name: "Lena Hoffmann",
    role: "Partner, Frontier Capital",
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQFstv4njUYzMQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662381393798?e=2147483647&v=beta&t=NBXIIew6hUTxw4E1dGoECYON7lcddIDaA0umwP9WfXU",
  },
];

// ─── Animated counter ────────────────────────────────────────────────────────

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setCount(target);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [started, target, prefersReduced]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── Particle canvas background ──────────────────────────────────────────────

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const PARTICLE_COUNT = 70;
    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const CONNECTION_DIST = 130;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251,191,36,${p.alpha * 0.7})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(251,191,36,${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ─── Scroll indicator ────────────────────────────────────────────────────────

const pulseVariant: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: {
    opacity: [0.4, 1, 0.4],
    y: [0, 8, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

// ─── Main page ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="bg-[#06080f] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Particle network */}
        <ParticleBackground />

        {/* Radial glow layers */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-400/[0.04] rounded-full blur-[120px]" />
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-amber-500/[0.06] rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-300/[0.04] rounded-full blur-[60px]" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-24">
          {/* Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.06] text-amber-400 text-xs font-medium tracking-wide mb-8 backdrop-blur-sm"
          >
            <Sparkles size={12} />
            {t("hero.badge")}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t("hero.name")}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="text-lg sm:text-xl lg:text-2xl text-amber-400/90 font-medium leading-snug max-w-3xl mx-auto mb-6 text-balance"
          >
            {t("hero.tagline")}
          </motion.p>

          {/* Supporting copy */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto mb-12 text-pretty"
          >
            {t("hero.supporting")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3 mb-20"
          >
            {/* Primary */}
            <motion.a
              variants={fadeInUp}
              href="#work"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-[#06080f] font-semibold text-sm shadow-[0_0_24px_rgba(251,191,36,0.35)] hover:shadow-[0_0_36px_rgba(251,191,36,0.55)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Eye size={15} />
              {t("hero.cta.exploreWork")}
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.05] text-white/90 font-semibold text-sm backdrop-blur-sm hover:bg-white/[0.09] hover:border-white/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              <Rocket size={15} />
              {t("hero.cta.viewProjects")}
            </motion.a>

            {/* Secondary row */}
            <motion.a
              variants={fadeInUp}
              href="#articles"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/60 font-medium text-sm hover:text-white/90 hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              <FileText size={14} />
              {t("hero.cta.readArticles")}
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="#videos"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/60 font-medium text-sm hover:text-white/90 hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              <Play size={14} />
              {t("hero.cta.watchVideos")}
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="#connect"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/20 bg-amber-400/[0.06] text-amber-400 font-medium text-sm hover:bg-amber-400/[0.12] hover:border-amber-400/35 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40"
            >
              <Mail size={14} />
              {t("hero.cta.connect")}
            </motion.a>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="flex flex-col items-center justify-center py-5 px-3 bg-[#06080f] hover:bg-white/[0.03] transition-colors duration-300 group"
              >
                <span className="text-2xl font-bold text-white tracking-tight leading-none mb-1 group-hover:text-amber-400 transition-colors duration-300">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix ?? ""}
                    prefix={stat.prefix ?? ""}
                  />
                </span>
                <span className="text-[10px] text-white/35 uppercase tracking-widest text-center leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={pulseVariant}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </section>

      {/* ── PILLARS / ABOUT ──────────────────────────────────────────────── */}
      <section id="work" className="relative py-28 md:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mb-20"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4"
            >
              {t("pillars.label")}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-5 text-balance"
            >
              {t("pillars.heading")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg leading-relaxed"
            >
              {t("pillars.subheading")}
            </motion.p>
          </motion.div>

          {/* Asymmetric bento grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const isLarge = i === 0;
              return (
                <motion.div
                  key={pillar.title}
                  variants={scaleIn}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 overflow-hidden group cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_24px_-8px_rgba(0,0,0,0.3)] ${
                    isLarge ? "lg:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-6 group-hover:bg-amber-400/15 transition-colors duration-300">
                      <Icon size={20} className="text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED WORK ────────────────────────────────────────────────── */}
      <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-400/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
          >
            <div>
              <motion.span
                variants={fadeIn}
                className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4"
              >
                {t("work.label")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance"
              >
                {t("work.heading")}
              </motion.h2>
            </div>
            <motion.a
              variants={fadeIn}
              href="#projects"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm text-amber-400 font-medium hover:text-amber-300 transition-colors duration-200 shrink-0"
            >
              {t("work.viewAll")}
              <ArrowRight size={15} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {featuredWork.map((item, i) => (
              <motion.article
                key={item.id}
                variants={i === 0 ? slideInLeft : i === 2 ? slideInRight : fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_32px_-8px_rgba(0,0,0,0.4)] ${
                  item.highlight ? "lg:col-span-1 ring-1 ring-amber-400/20" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-white/[0.03]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-400 text-[10px] font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    {item.highlight && (
                      <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[10px] font-semibold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="absolute top-4 right-4 text-white/30 text-xs">
                    {item.year}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/40 text-[10px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────────────────────── */}
      <section id="articles" className="relative py-28 md:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
          <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-amber-400/[0.03] rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Split layout: heading left, list right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:sticky lg:top-28"
            >
              <motion.span
                variants={fadeIn}
                className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4"
              >
                {t("articles.label")}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6 text-balance"
              >
                {t("articles.heading")}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/45 leading-relaxed mb-8"
              >
                {t("articles.subheading")}
              </motion.p>
              <motion.a
                variants={fadeIn}
                href="#articles"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/25 bg-amber-400/[0.07] text-amber-400 text-sm font-medium hover:bg-amber-400/[0.14] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/40"
              >
                <BookOpen size={14} />
                {t("articles.cta")}
              </motion.a>
            </motion.div>

            {/* Right: article list */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-5"
            >
              {articles.map((article, i) => (
                <motion.article
                  key={article.id}
                  variants={fadeInUp}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group flex gap-6 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_16px_-4px_rgba(0,0,0,0.25)]"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/40 text-[10px] font-medium uppercase tracking-wider">
                        {article.tag}
                      </span>
                      <span className="text-white/25 text-xs">{article.date}</span>
                      <span className="text-white/25 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 tracking-tight group-hover:text-amber-400 transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-white/20 group-hover:text-amber-400 transition-colors duration-300 mt-1"
                  />
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VIDEOS ───────────────────────────────────────────────────────── */}
      <section id="videos" className="relative py-28 md:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] bg-amber-400/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4"
            >
              {t("videos.label")}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-5 text-balance"
            >
              {t("videos.heading")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/45 leading-relaxed"
            >
              {t("videos.subheading")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.1),0_8px_32px_-8px_rgba(0,0,0,0.4)]"
              >
                {/* Thumbnail */}
                <div className="relative h-52 bg-white/[0.03] overflow-hidden">
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080f]/90 via-[#06080f]/30 to-transparent" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-14 h-14 rounded-full bg-amber-400/90 flex items-center justify-center shadow-[0_0_24px_rgba(251,191,36,0.5)] group-hover:shadow-[0_0_36px_rgba(251,191,36,0.7)] transition-all duration-300"
                    >
                      <Play size={20} className="text-[#06080f] ml-1" fill="#06080f" />
                    </motion.div>
                  </div>
                  {/* Duration */}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white/80 text-xs font-mono">
                    {video.duration}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-amber-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/30 text-xs">
                    <Eye size={12} />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-400/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4"
            >
              {t("testimonials.label")}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight text-balance"
            >
              {t("testimonials.heading")}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t_item, i) => (
              <motion.div
                key={t_item.id}
                variants={i === 1 ? scaleIn : fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_8px_32px_-8px_rgba(0,0,0,0.35)] ${
                  i === 1
                    ? "md:-mt-4 md:mb-4 border-amber-400/15 bg-amber-400/[0.02]"
                    : ""
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={13}
                      className="text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <blockquote className="text-white/65 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t_item.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/[0.06] border border-white/[0.08] shrink-0">
                    <img
                      src={t_item.avatar}
                      alt={t_item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t_item.name}
                    </div>
                    <div className="text-xs text-white/35">{t_item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONNECT / CTA ────────────────────────────────────────────────── */}
      <section id="connect" className="relative py-28 md:py-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/[0.02] to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 mb-8 mx-auto"
            >
              <Mail size={28} className="text-amber-400" />
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-6 text-balance"
            >
              {t("connect.heading")}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto text-pretty"
            >
              {t("connect.subheading")}
            </motion.p>

            <motion.div
              variants={staggerFast}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                variants={fadeInUp}
                href="mailto:hello@tobycarlson.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-[#06080f] font-bold text-sm shadow-[0_0_32px_rgba(251,191,36,0.4)] hover:shadow-[0_0_48px_rgba(251,191,36,0.6)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Mail size={16} />
                {t("connect.emailCta")}
              </motion.a>

              <motion.a
                variants={fadeInUp}
                href="https://linkedin.com/in/tobycarlson"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/[0.05] text-white/90 font-bold text-sm backdrop-blur-sm hover:bg-white/[0.09] hover:border-white/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <Users size={16} />
                {t("connect.linkedinCta")}
              </motion.a>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
              variants={fadeIn}
              className="mt-20 flex items-center gap-4"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/[0.08]" />
              <div className="flex items-center gap-2 text-white/20 text-xs uppercase tracking-widest">
                <Circle size={4} fill="currentColor" />
                <span>{t("connect.dividerText")}</span>
                <Circle size={4} fill="currentColor" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/[0.08]" />
            </motion.div>

            {/* Achievement strip */}
            <motion.div
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              {[
                { icon: Award, text: t("connect.badge1") },
                { icon: CheckCircle, text: t("connect.badge2") },
                { icon: Activity, text: t("connect.badge3") },
                { icon: Mic, text: t("connect.badge4") },
              ].map((badge) => {
                const BadgeIcon = badge.icon;
                return (
                  <motion.div
                    key={badge.text}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-white/35 text-xs"
                  >
                    <BadgeIcon size={13} className="text-amber-400/60" />
                    <span>{badge.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}