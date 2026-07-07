"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag, TrendingUp, CheckCircle, Circle, Pause, ExternalLink, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Types ───────────────────────────────────────────────────────────────────

type Status = "Active" | "Completed" | "Research";

interface Metric {
  label: string;
}

interface Project {
  id: string;
  title: string;
  status: Status;
  category: string;
  description: string;
  tags: string[];
  metrics: string[];
  year: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: "p1",
    title: "Neural Inference Engine",
    status: "Active",
    category: "AI Systems",
    description:
      "A lightweight on-device inference runtime that brings large-language-model reasoning to edge hardware with sub-10ms latency. Designed for deployment in resource-constrained environments without sacrificing model fidelity.",
    tags: ["ML", "Edge AI", "C++"],
    metrics: ["10ms Latency", "40% Power Reduction", "3 Deployments"],
    year: "2024",
  },
  {
    id: "p2",
    title: "Cognify Platform",
    status: "Active",
    category: "Software",
    description:
      "An AI-native SaaS platform that augments knowledge work through contextual reasoning, adaptive workflows, and intelligent document synthesis. Built for teams that move fast and think deep.",
    tags: ["SaaS", "AI", "React"],
    metrics: ["2K Users", "98% Uptime", "4.9★ Rating"],
    year: "2024",
  },
  {
    id: "p3",
    title: "QuantumSense Array",
    status: "Active",
    category: "Hardware",
    description:
      "A multi-modal sensor array leveraging FPGA-accelerated signal processing to achieve parts-per-million accuracy in real-time environmental monitoring. Designed for industrial and scientific applications.",
    tags: ["Sensors", "IoT", "FPGA"],
    metrics: ["0.1ppm Accuracy", "12 Sensors", "Real-time"],
    year: "2023",
  },
  {
    id: "p4",
    title: "Adaptive Signal Routing Protocol",
    status: "Completed",
    category: "Networking",
    description:
      "A patented mesh-network protocol that dynamically reroutes data packets around congestion nodes, improving aggregate throughput by 3x while maintaining 99.9% delivery reliability across distributed topologies.",
    tags: ["Protocol", "Patent", "C"],
    metrics: ["3x Throughput", "99.9% Reliability", "Patented"],
    year: "2023",
  },
  {
    id: "p5",
    title: "Meridian Labs",
    status: "Completed",
    category: "Venture",
    description:
      "Co-founded a deep-tech studio that has incubated five startups across climate tech, biotech, and autonomous systems. Raised $12M in aggregate funding with three successful exits and two active portfolio companies.",
    tags: ["Deep Tech", "Incubator"],
    metrics: ["5 Startups", "$12M Raised", "3 Exits"],
    year: "2022",
  },
  {
    id: "p6",
    title: "BioSignal Decoder",
    status: "Completed",
    category: "Biotech",
    description:
      "A machine-learning pipeline for decoding non-invasive biosignals into actionable clinical insights. Achieved 94% classification accuracy at 2ms inference latency, currently on the FDA breakthrough device track.",
    tags: ["ML", "Signal Processing"],
    metrics: ["94% Accuracy", "2ms Latency", "FDA Track"],
    year: "2022",
  },
  {
    id: "p7",
    title: "Distributed Consensus Algorithm",
    status: "Research",
    category: "Systems",
    description:
      "An ongoing research effort into Byzantine fault-tolerant consensus mechanisms that scale logarithmically with network size. Peer-reviewed findings have been submitted to leading distributed systems conferences.",
    tags: ["Distributed", "Algorithms"],
    metrics: ["Byzantine Fault Tolerant", "O(log n)", "Peer Reviewed"],
    year: "2024",
  },
  {
    id: "p8",
    title: "Photonic Memory Cell",
    status: "Research",
    category: "Hardware",
    description:
      "Exploring photonic computing architectures for next-generation non-volatile memory cells that promise 10x storage density over conventional NAND flash. Patent pending; currently in laboratory validation stage.",
    tags: ["Photonics", "Storage"],
    metrics: ["10x Density", "Patent Pending", "Lab Stage"],
    year: "2024",
  },
];

const tabs = ["All", "Active", "Completed", "Research"] as const;
type Tab = (typeof tabs)[number];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Status }) {
  if (status === "Active") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Active
      </span>
    );
  }
  if (status === "Completed") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
        <CheckCircle className="w-3 h-3" />
        Completed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
      <Circle className="w-3 h-3" />
      Research
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
    >
      {/* Top row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50 border border-white/10">
            <Tag className="w-3 h-3" />
            {project.category}
          </span>
        </div>
        <span className="text-xs text-white/30 font-mono">{project.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-50 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-white/55 text-sm md:text-base leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/15"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Metrics */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.metrics.map((metric) => (
          <span
            key={metric}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.04] text-white/70 border border-white/[0.08]"
          >
            <TrendingUp className="w-3 h-3 text-amber-400/70" />
            {metric}
          </span>
        ))}
      </div>

      {/* Footer link */}
      <div className="flex items-center justify-end">
        <button
          aria-label={`View details for ${project.title}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400/70 hover:text-amber-400 transition-colors duration-200 group/link"
        >
          View Details
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/[0.02] to-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.status === activeTab);

  const counts = {
    Active: projects.filter((p) => p.status === "Active").length,
    Completed: projects.filter((p) => p.status === "Completed").length,
    Research: projects.filter((p) => p.status === "Research").length,
  };

  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06080f] via-[#0d0f1e] to-[#0a0618]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-400/[0.04] rounded-full blur-[80px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Portfolio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Projects
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Active experiments, completed ventures, and ongoing research —
              every project is a step toward the future.
            </motion.p>

            {/* Status summary pills */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active: {counts.Active}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                Completed: {counts.Completed}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold">
                <Circle className="w-3.5 h-3.5" />
                Research: {counts.Research}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06080f] to-transparent" />
      </section>

      {/* ── Filter Tabs ──────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-1 border-b border-white/10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 rounded-t-lg ${
                activeTab === tab
                  ? "text-amber-400"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </section>

      {/* ── Project List ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div
          key={activeTab}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30 text-sm">
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080f] via-[#0d0f1e] to-[#06080f]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-semibold tracking-widest uppercase">
                Collaboration
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-playfair text-3xl md:text-5xl font-bold text-white"
            >
              Want to collaborate on a project?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-white/55 text-base md:text-lg leading-relaxed"
            >
              Whether you have a bold idea, a technical challenge, or a venture
              worth building — I&apos;m always open to meaningful conversations
              with curious, driven people.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-2">
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-400 text-[#06080f] font-bold text-sm hover:bg-amber-300 transition-colors duration-200 shadow-[0_0_32px_rgba(251,191,36,0.25)] hover:shadow-[0_0_48px_rgba(251,191,36,0.4)]"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
