"use client";
import React, { useState } from "react";
import { Github, Linkedin, Mail, Chrome, Send } from "lucide-react";
import { motion } from "framer-motion";

const SocialLink = ({ href, icon, label, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`relative group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/10 hover:scale-105 hover:shadow-lg ${className}`}
    >
      {icon}
      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-blue-300">
        {label}
      </span>
    </a>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call for local feedback
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 px-6 md:px-12 text-white" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text mb-8 text-center">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Social Links */}
          <div className="md:col-span-5 space-y-6">
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Reach Out</h3>
              <p className="text-sm md:text-base leading-relaxed text-blue-100/70 mb-6">
                I am looking for internship and junior software engineering roles where I can apply my web development and deep learning skills. Let's discuss how I can contribute to your team.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:vimalanthushani1122@gmail.com"
                  className="flex items-center gap-3 text-sm md:text-base text-blue-300 hover:text-blue-400 transition-colors w-fit font-mono"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>vimalanthushani1122@gmail.com</span>
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <SocialLink
                  href="https://github.com/Thusaniv"
                  icon={<Github className="h-5 w-5 text-white" />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/thusani-vimalenthiran"
                  icon={<Linkedin className="h-5 w-5 text-blue-400" />}
                  label="LinkedIn"
                />
                <SocialLink
                  href="mailto:vimalanthushani1122@gmail.com"
                  icon={<Mail className="h-5 w-5 text-indigo-400" />}
                  label="Email"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-xl space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono font-bold text-blue-300 mb-2 uppercase tracking-wider">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono font-bold text-blue-300 mb-2 uppercase tracking-wider">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono font-bold text-blue-300 mb-2 uppercase tracking-wider">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Inquiry / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono font-bold text-blue-300 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your message details here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                {status === "sending" ? (
                  <span>Sending...</span>
                ) : status === "success" ? (
                  <span className="text-emerald-400">Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

