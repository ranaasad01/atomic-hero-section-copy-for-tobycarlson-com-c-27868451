"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Briefcase as Linkedin, Play as Youtube, ArrowRight, Send, Users, Globe, CheckCircle, Sparkles, MessageSquare, MessageCircle as Twitter, Code2 as Github } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@tobycarlson.com",
    href: "mailto:hello@tobycarlson.com",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tobycarlson",
    href: "https://linkedin.com/in/tobycarlson",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@tobycarlson",
    href: "https://twitter.com/tobycarlson",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "@tobycarlson",
    href: "https://youtube.com/@tobycarlson",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/tobycarlson",
    href: "https://github.com/tobycarlson",
    color: "text-white/70",
    bg: "bg-white/10",
  },
];

const communityStats = [
  { icon: Users, label: "Community Members", value: "25K+" },
  { icon: MessageSquare, label: "Articles", value: "85+" },
  { icon: Globe, label: "Videos", value: "120+" },
];

export default function ConnectPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  }

  const inputClass =
    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 w-full transition-all duration-200";

  return (
    <div className="relative min-h-screen bg-[#06080f] overflow-hidden">
      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
        <div className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.07)_0%,transparent_70%)]" />
        <div className="absolute bottom-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)]" />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        {/* Hero gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium tracking-widest uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                Get in Touch
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
            >
              Whether you want to collaborate, discuss ideas, book a speaking
              engagement, or just say hello — I&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content: Form + Sidebar ── */}
      <section className="relative px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            {/* LEFT — Contact Form */}
            <motion.div variants={slideInLeft} className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center">
                    <Send className="w-5 h-5 text-amber-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Send a Message</h2>
                </div>

                {submitted ? (
                  <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                    <p className="text-white/60 max-w-sm">
                      I&apos;ll get back to you within 48 hours. Looking forward to
                      connecting!
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-2 text-sm text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/40 uppercase tracking-widest">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleFormChange}
                          placeholder="Your name"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/40 uppercase tracking-widest">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleFormChange}
                          placeholder="your@email.com"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-white/40 uppercase tracking-widest">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleFormChange}
                        placeholder="What's this about?"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-white/40 uppercase tracking-widest">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleFormChange}
                        placeholder="Tell me what's on your mind..."
                        rows={5}
                        required
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-[#06080f] font-semibold rounded-xl px-8 py-3 hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* RIGHT — Sidebar */}
            <motion.div variants={slideInRight} className="lg:col-span-2 flex flex-col gap-6">
              {/* Card A: Connect Directly */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-semibold text-white mb-5">Connect Directly</h3>
                <ul className="space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 group p-2 rounded-xl hover:bg-white/5 transition-colors duration-200"
                        >
                          <div className={`w-9 h-9 rounded-lg ${link.bg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-4 h-4 ${link.color}`} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs text-white/40 font-medium">{link.label}</p>
                            <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                              {link.value}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/50 ml-auto flex-shrink-0 transition-colors" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Card B: Book a Speaking Engagement */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-400/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Book a Speaking Engagement</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  Interested in having Toby speak at your event, conference, or
                  podcast? View available topics and submit a booking request.
                </p>
                <Link
                  href="/speaking"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-violet-600/20 border border-violet-400/20 text-violet-300 hover:text-violet-200 hover:border-violet-400/40 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200"
                >
                  View Speaking Page
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card C: Response Time */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-green-400/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Response Time</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  I typically respond within{" "}
                  <span className="text-white/80 font-medium">48 hours</span>. For
                  urgent matters,{" "}
                  <span className="text-blue-400 font-medium">LinkedIn</span> is
                  fastest.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="relative px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-amber-400/20 rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                      Newsletter
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-playfair">
                    Join the Community
                  </h2>
                  <p className="text-white/50 leading-relaxed">
                    Get my latest articles, project updates, and insights on AI
                    and entrepreneurship delivered to your inbox.
                  </p>
                </div>

                {/* Form */}
                <div className="flex-1">
                  {subscribed ? (
                    <motion.div
                      variants={scaleIn}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-3 bg-green-400/10 border border-green-400/20 rounded-2xl px-6 py-4"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <p className="text-white/80 text-sm">
                        You&apos;re in! Welcome to the community.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubscribe}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all duration-200"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-amber-400 to-amber-500 text-[#06080f] font-semibold rounded-xl px-6 py-3 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        Subscribe
                      </button>
                    </form>
                  )}
                  <p className="text-xs text-white/30 mt-3">
                    No spam, ever. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Community Stats Row ── */}
      <section className="relative px-6 lg:px-8 pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {communityStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/50">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
