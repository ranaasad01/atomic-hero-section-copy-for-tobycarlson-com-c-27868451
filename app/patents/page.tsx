"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, CheckCircle, Clock, FileText, ArrowRight, Award, Lightbulb, Calendar, ExternalLink } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInRight,
  staggerFast,
} from "@/lib/motion";

// ─── Types ───────────────────────────────────────────────────────────────────

type PatentStatus = "Granted" | "Pending" | "Filed";

interface Patent {
  id: string;
  title: string;
  status: PatentStatus;
  number: string;
  filingDate: string;
  grantDate?: string;
  abstract: string;
  tags: string[];
  year: number;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const patents: Patent[] = [
  {
    id: "p1",
    title: "Adaptive Signal Routing Protocol",
    status: "Granted",
    number: "US-2023-0142857",
    filingDate: "January 2022",
    grantDate: "March 2023",
    abstract:
      "A mesh-network protocol that dynamically reroutes data packets around congestion nodes using predictive load-balancing algorithms, improving network throughput by up to 3x under peak load conditions. The system employs real-time topology awareness and adaptive weighting to ensure optimal path selection across heterogeneous network environments.",
    tags: ["Networking", "Protocol", "Distributed Systems"],
    year: 2023,
  },
  {
    id: "p2",
    title: "Neural Edge Inference Accelerator",
    status: "Granted",
    number: "US-2024-0183921",
    filingDate: "June 2023",
    grantDate: "February 2024",
    abstract:
      "A hardware-software co-design for executing large language model inference on resource-constrained edge devices with sub-10ms latency and 40% reduced power consumption. The architecture introduces a novel quantization-aware scheduling layer that dynamically allocates compute resources based on model complexity and available power budget.",
    tags: ["AI", "Hardware", "Edge Computing"],
    year: 2024,
  },
  {
    id: "p3",
    title: "Photonic Memory Cell Architecture",
    status: "Pending",
    number: "US-2024-0291043",
    filingDate: "November 2023",
    abstract:
      "An optical data storage architecture leveraging photonic crystal resonators to achieve 10x storage density over conventional NAND flash while enabling non-volatile operation at room temperature. The design exploits evanescent field coupling between adjacent resonator cells to encode multi-bit states within a single optical mode volume.",
    tags: ["Photonics", "Storage", "Hardware"],
    year: 2024,
  },
  {
    id: "p4",
    title: "BioSignal Adaptive Decoder",
    status: "Granted",
    number: "US-2023-0267514",
    filingDate: "March 2022",
    grantDate: "August 2023",
    abstract:
      "A real-time neural signal interpretation system using adaptive machine learning models to decode motor intent from surface EMG signals for prosthetic limb control. The decoder continuously recalibrates its internal model to account for electrode drift and muscle fatigue, maintaining high classification accuracy over extended use periods.",
    tags: ["Biotech", "ML", "Signal Processing"],
    year: 2023,
  },
  {
    id: "p5",
    title: "Distributed Byzantine Consensus",
    status: "Pending",
    number: "US-2024-0318762",
    filingDate: "February 2024",
    abstract:
      "A Byzantine fault-tolerant consensus algorithm optimized for heterogeneous edge networks, achieving O(log n) message complexity while maintaining safety guarantees under adversarial conditions. The protocol introduces a probabilistic verification layer that reduces coordination overhead without sacrificing liveness properties in partially synchronous network models.",
    tags: ["Distributed Systems", "Algorithms", "Security"],
    year: 2024,
  },
  {
    id: "p6",
    title: "Quantum-Coherent Sensor Array",
    status: "Filed",
    number: "US-2024-0402198",
    filingDate: "August 2024",
    abstract:
      "A novel sensor array architecture exploiting quantum coherence effects to achieve parts-per-billion environmental detection sensitivity, enabling real-time atmospheric monitoring at unprecedented resolution. The system employs entangled photon pairs as probe signals, allowing differential measurement techniques that suppress classical noise sources by several orders of magnitude.",
    tags: ["Quantum", "Sensors", "Environmental"],
    year: 2024,
  },
];

const filters: Array<"All" | PatentStatus> = ["All", "Granted", "Pending", "Filed"];

// ─── Status config ────────────────────────────────────────────────────────────

function getStatusConfig(status: PatentStatus) {
  switch (status) {
    case "Granted":
      return {
        icon: CheckCircle,
        label: "Granted",
        className: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
        dot: "bg-emerald-400",
      };
    case "Pending":
      return {
        icon: Clock,
        label: "Pending",
        className: "text-amber-400 bg-amber-400/10 border-amber-400/20",
        dot: "bg-amber-400",
      };
    case "Filed":
      return {
        icon: FileText,
        label: "Filed",
        className: "text-blue-400 bg-blue-400/10 border-blue-400/20",
        dot: "bg-blue-400",
      };
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PatentsPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | PatentStatus>("All");

  const filtered =
    activeFilter === "All"
      ? patents
      : patents.filter((p) => p.status === activeFilter);

  const grantedCount = patents.filter((p) => p.status === "Granted").length;
  const pendingCount = patents.filter((p) => p.status === "Pending").length;
  const filedCount = patents.filter((p) => p.status === "Filed").length;

  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-400/[0.05] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-violet-500/[0.06] rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.04)_0%,transparent_60%)]" />
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
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium">
                <Shield className="w-4 h-4" />
                Intellectual Property
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-5xl md:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                Patents &amp;
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Innovations
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              A registry of filed and granted patents — ideas protected,
              innovations documented.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={staggerFast}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              {[
                { label: "Total Patents", value: "12", icon: Shield, color: "text-white" },
                { label: "Granted", value: "8", icon: CheckCircle, color: "text-emerald-400" },
                { label: "Pending", value: "4", icon: Clock, color: "text-amber-400" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
                >
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <div className="text-left">
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/40 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ───────────────────────────────────────────────────── */}
      <section className="sticky top-16 md:top-20 z-30 bg-[#06080f]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-4">
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const count =
                filter === "All"
                  ? patents.length
                  : filter === "Granted"
                  ? grantedCount
                  : filter === "Pending"
                  ? pendingCount
                  : filedCount;

              return (
                <motion.button
                  key={filter}
                  variants={fadeIn}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-amber-400/15 border-amber-400/40 text-amber-400"
                      : "bg-white/[0.04] border-white/[0.08] text-white/50 hover:text-white/80 hover:bg-white/[0.07]"
                  }`}
                >
                  {filter}
                  <span
                    className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-amber-400/20 text-amber-300"
                        : "bg-white/[0.06] text-white/30"
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/40 via-amber-400/20 to-transparent" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-10"
            >
              {filtered.map((patent) => {
                const statusConfig = getStatusConfig(patent.status);
                const StatusIcon = statusConfig.icon;

                return (
                  <motion.div
                    key={patent.id}
                    variants={slideInRight}
                    className="relative flex gap-8 md:gap-12"
                  >
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-[#06080f] shadow-[0_0_12px_rgba(251,191,36,0.5)] mt-6 z-10 ${statusConfig.dot}`}
                      />
                    </div>

                    {/* Card */}
                    <div className="flex-1 mb-2">
                      <div className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-6 md:p-8 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 overflow-hidden">
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                        {/* Top row */}
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div className="flex flex-wrap items-center gap-3">
                            {/* Status badge */}
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                                statusConfig.className
                              }`}
                            >
                              <StatusIcon className="w-3.5 h-3.5" />
                              {statusConfig.label}
                            </span>

                            {/* Patent number */}
                            <span className="font-mono text-xs text-white/30 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                              {patent.number}
                            </span>
                          </div>

                          {/* Year */}
                          <span className="text-xs text-white/30 font-medium">
                            {patent.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                          {patent.title}
                        </h3>

                        {/* Dates */}
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center gap-1.5 text-xs text-white/40">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Filed: {patent.filingDate}</span>
                          </div>
                          {patent.grantDate && (
                            <div className="flex items-center gap-1.5 text-xs text-emerald-400/70">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>Granted: {patent.grantDate}</span>
                            </div>
                          )}
                        </div>

                        {/* Abstract */}
                        <p className="text-sm text-white/55 leading-relaxed mb-5">
                          {patent.abstract}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {patent.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/50 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-center py-20 text-white/30"
              >
                <Shield className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg">No patents in this category.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Innovation Philosophy ─────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-12"
          >
            {/* Section header */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4" />
                Innovation Philosophy
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Why Intellectual Property Matters
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Patents are more than legal instruments — they are a permanent
                record of ideas that changed the trajectory of technology.
              </p>
            </motion.div>

            {/* Two-column cards */}
            <motion.div
              variants={staggerFast}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Card 1 */}
              <motion.div
                variants={slideInRight}
                className="relative rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-8 overflow-hidden group hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/[0.04] rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-white">
                    Why Patents Matter
                  </h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  Every patent in this registry represents a moment where an
                  abstract idea crystallized into something concrete enough to
                  defend. The patent process forces rigorous thinking — you
                  cannot protect what you cannot precisely define.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Beyond legal protection, patents serve as a public disclosure
                  mechanism. By publishing the technical details of an
                  invention, they contribute to the collective knowledge base
                  that future innovators build upon. Each filing is a letter to
                  the future, saying: this is what we figured out, and here is
                  exactly how.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={slideInRight}
                className="relative rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm p-8 overflow-hidden group hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/[0.05] rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-white">
                    Open Innovation
                  </h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  Holding a patent does not mean hoarding an idea. The most
                  transformative technologies in history were built on open
                  collaboration — where inventors shared their breakthroughs
                  and challenged others to go further. Licensing, cross-licensing,
                  and open-source derivatives are all part of a healthy
                  innovation ecosystem.
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  If any of the technologies documented here align with your
                  research, product roadmap, or venture, I welcome conversations
                  about licensing, joint development, or knowledge exchange.
                  Innovation compounds fastest when brilliant people work
                  together.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative rounded-3xl bg-gradient-to-br from-amber-400/[0.08] via-white/[0.03] to-violet-500/[0.06] border border-white/[0.10] backdrop-blur-sm p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Decorative glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-400/[0.06] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-violet-500/[0.06] rounded-full blur-3xl pointer-events-none" />

            <motion.div variants={fadeInUp} className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-medium">
                <ExternalLink className="w-4 h-4" />
                Licensing &amp; Collaboration
              </div>

              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white">
                Interested in licensing
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  or collaboration?
                </span>
              </h2>

              <p className="text-white/55 max-w-xl mx-auto text-lg leading-relaxed">
                Whether you are exploring licensing opportunities, joint
                research, or simply want to discuss the technology — let's
                start a conversation.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-400 text-[#06080f] font-semibold text-sm hover:bg-amber-300 transition-all duration-200 shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_32px_rgba(251,191,36,0.5)]"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white/80 font-semibold text-sm hover:bg-white/[0.10] hover:text-white transition-all duration-200"
                >
                  Explore My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
