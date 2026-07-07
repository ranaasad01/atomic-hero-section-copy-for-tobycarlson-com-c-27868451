"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mic, Calendar, MapPin, Users, ArrowRight, Star, Globe, Clock, CheckCircle, Mail } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  staggerFast,
} from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const heroStats = [
  { label: "Engagements", value: "60+" },
  { label: "Events", value: "30+" },
  { label: "Countries", value: "15+" },
];

const upcomingTalks = [
  {
    id: "u1",
    title: "AI & The Future of Work",
    event: "TechSummit 2025",
    location: "San Francisco, CA",
    date: "Sep 15, 2025",
    format: "Keynote",
    duration: "45 min",
  },
  {
    id: "u2",
    title: "Deep Tech Entrepreneurship Panel",
    event: "Founders Forum",
    location: "London, UK",
    date: "Oct 8, 2025",
    format: "Panel",
    duration: "60 min",
  },
];

const pastEngagements = [
  {
    id: "p1",
    talkTitle: "The Future of Embodied AI",
    event: "NeurIPS 2024",
    location: "Vancouver, CA",
    date: "Dec 2024",
    format: "Keynote",
    attendees: "2,400",
  },
  {
    id: "p2",
    talkTitle: "Building at the Edge of Possibility",
    event: "Web Summit 2024",
    location: "Lisbon, PT",
    date: "Nov 2024",
    format: "Keynote",
    attendees: "5,000",
  },
  {
    id: "p3",
    talkTitle: "Patent Strategy for Deep Tech Founders",
    event: "TechCrunch Disrupt",
    location: "San Francisco",
    date: "Oct 2024",
    format: "Workshop",
    attendees: "300",
  },
  {
    id: "p4",
    talkTitle: "AI Ethics in Practice",
    event: "MIT Media Lab",
    location: "Cambridge, MA",
    date: "Sep 2024",
    format: "Talk",
    attendees: "800",
  },
  {
    id: "p5",
    talkTitle: "Semiconductor Innovation Panel",
    event: "CES 2024",
    location: "Las Vegas, NV",
    date: "Jan 2024",
    format: "Panel",
    attendees: "1,200",
  },
  {
    id: "p6",
    talkTitle: "Climate Tech Investment Thesis",
    event: "Davos Side Event",
    location: "Davos, CH",
    date: "Jan 2024",
    format: "Keynote",
    attendees: "150",
  },
];

const topics = [
  { id: "t1", label: "AI & Machine Learning", icon: "🤖" },
  { id: "t2", label: "Deep Tech Entrepreneurship", icon: "🚀" },
  { id: "t3", label: "Patent Strategy", icon: "📋" },
  { id: "t4", label: "Future of Computing", icon: "💻" },
  { id: "t5", label: "Climate Technology", icon: "🌍" },
  { id: "t6", label: "Innovation Leadership", icon: "⚡" },
];

const testimonials = [
  {
    id: "q1",
    quote:
      "Toby's keynote was the highlight of our conference. His ability to make complex AI concepts accessible and inspiring is unmatched.",
    name: "Sarah Chen",
    title: "TechSummit Program Director",
  },
  {
    id: "q2",
    quote:
      "One of the most engaging speakers we've hosted. The audience was captivated from start to finish.",
    name: "James Okafor",
    title: "Web Summit",
  },
  {
    id: "q3",
    quote:
      "Toby brings a rare combination of technical depth and entrepreneurial vision that resonates with every audience.",
    name: "Dr. Priya Nair",
    title: "MIT Media Lab",
  },
];

const formatColors: Record<string, string> = {
  Keynote: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Panel: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Workshop: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Talk: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Other: "bg-white/10 text-white/60 border-white/20",
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function SpeakingPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    eventType: "Keynote",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#06080f] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06080f] via-[#0d1220] to-[#06080f]" />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[100px]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm mb-8"
          >
            <Mic className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-white/70 font-medium">Speaking</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              Speaking
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Keynotes, panels, and workshops on AI, entrepreneurship, and the
            future of technology.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06080f] to-transparent pointer-events-none" />
      </section>

      {/* ── Upcoming Engagements ─────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-4">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                On the Calendar
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Upcoming Engagements
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {upcomingTalks.map((talk) => (
              <motion.div
                key={talk.id}
                variants={fadeInUp}
                className="relative rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-amber-400/30 p-8 overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Upcoming badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Upcoming
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      formatColors[talk.format] ?? formatColors.Other
                    }`}
                  >
                    {talk.format}
                  </span>
                </div>

                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  {talk.title}
                </h3>
                <p className="text-amber-400/80 font-medium mb-6">{talk.event}</p>

                <div className="flex flex-wrap gap-4 text-sm text-white/50">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-white/30" />
                    {talk.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-white/30" />
                    {talk.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-white/30" />
                    {talk.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Past Engagements ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] mb-4">
              <Star className="w-3.5 h-3.5 text-white/50" />
              <span className="text-xs text-white/50 font-medium uppercase tracking-wider">
                Past Talks
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Past Engagements
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pastEngagements.map((eng) => (
              <motion.div
                key={eng.id}
                variants={scaleIn}
                className="rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6 group hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      formatColors[eng.format] ?? formatColors.Other
                    }`}
                  >
                    {eng.format}
                  </span>
                  <span className="text-xs text-white/30">{eng.date}</span>
                </div>

                <h3 className="font-playfair text-lg font-bold text-white mb-1 leading-snug">
                  {eng.talkTitle}
                </h3>
                <p className="text-amber-400/70 text-sm font-medium mb-4">
                  {eng.event}
                </p>

                <div className="flex flex-col gap-2 text-sm text-white/40">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/25" />
                    {eng.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-white/25" />
                    {eng.attendees} attendees
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Topics ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] mb-4">
              <Globe className="w-3.5 h-3.5 text-white/50" />
              <span className="text-xs text-white/50 font-medium uppercase tracking-wider">
                Expertise
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Topics I Speak On
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              From cutting-edge AI research to the practical realities of
              building deep-tech companies — tailored for any audience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {topics.map((topic) => (
              <motion.div
                key={topic.id}
                variants={scaleIn}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:border-amber-400/30 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
              >
                <span className="text-2xl">{topic.icon}</span>
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                  {topic.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] mb-4">
              <Star className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-white/50 font-medium uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              What Organizers Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                className="relative rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-8 flex flex-col"
              >
                {/* Quote mark */}
                <div className="text-5xl text-amber-400/30 font-playfair leading-none mb-4 select-none">
                  &ldquo;
                </div>
                <p className="font-playfair italic text-white/80 text-lg leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Booking CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-4">
              <Mic className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-amber-400 font-medium uppercase tracking-wider">
                Book Toby
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Book Toby to Speak
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Interested in having Toby speak at your event, conference, or
              workshop? Fill out the form below and the team will be in touch
              within 48 hours.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] p-8 md:p-10 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.06] via-transparent to-amber-500/[0.04] pointer-events-none rounded-3xl" />

            {submitted ? (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  Inquiry Sent!
                </h3>
                <p className="text-white/50">
                  Thank you for reaching out. We&apos;ll be in touch within 48
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/25 text-sm focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.08] transition-all duration-200"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          organization: e.target.value,
                        }))
                      }
                      placeholder="Company or event name"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/25 text-sm focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.08] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        eventType: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.08] transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="Keynote" className="bg-[#0d1220] text-white">
                      Keynote
                    </option>
                    <option value="Panel" className="bg-[#0d1220] text-white">
                      Panel
                    </option>
                    <option value="Workshop" className="bg-[#0d1220] text-white">
                      Workshop
                    </option>
                    <option value="Other" className="bg-[#0d1220] text-white">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell us about your event, audience, and what you'd like Toby to speak about..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/25 text-sm focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.08] transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#06080f] font-semibold text-sm transition-all duration-200 shadow-[0_0_24px_rgba(251,191,36,0.3)] hover:shadow-[0_0_36px_rgba(251,191,36,0.5)] group"
                >
                  Send Inquiry
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Direct contact links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-white/40"
          >
            <span>Or reach out directly:</span>
            <a
              href="mailto:speaking@tobycarlson.com"
              className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              speaking@tobycarlson.com
            </a>
            <a
              href="https://linkedin.com/in/tobycarlson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
