"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/siteConfig";

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Sports Event",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#e52d27", "#ffffff", "#d4af37"],
    });
  };

  return (
    <div className="pt-32 pb-28 bg-[#050507] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-red-500 font-bold">
                Start A Conversation
              </span>
              <h1 className="text-5xl sm:text-6xl font-black font-heading tracking-tight uppercase mt-2">
                Connect With Us
              </h1>
              <p className="text-gray-300 text-base font-light mt-4 leading-relaxed">
                Whether you are planning a stadium league opening ceremony, a global arena concert tour, or a flagship corporate keynote, our technical production team is ready.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold font-heading text-white">Global Headquarters</h4>
                  <p className="text-xs text-gray-400 mt-1">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <Mail className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold font-heading text-white">Production Inquiries</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-xs font-mono text-gray-300 hover:text-red-400">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <Phone className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold font-heading text-white">Phone Support</h4>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-xs font-mono text-gray-300 hover:text-red-400">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-bounce" />
                <h3 className="text-3xl font-bold font-heading text-white">Message Received</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for connecting with {siteConfig.brandName}. Our event directors will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-widest text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-heading uppercase text-white">
                  Event Brief Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-gray-400">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 focus:border-red-500 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-gray-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 focus:border-red-500 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-400">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0d0d12] border border-white/15 focus:border-red-500 text-white outline-none transition-colors text-sm"
                  >
                    <option value="Sports Event">Sports Championship / League Ceremony</option>
                    <option value="Music Concert">Mega Music Arena Tour</option>
                    <option value="Corporate Keynote">Corporate Summit / Brand Launch</option>
                    <option value="Special Spectacle">Special Broadcast Spectacle</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-400">
                    Event Specifications & Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about expected audience size, venue location, target dates, and technical scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 focus:border-red-500 text-white placeholder-gray-500 outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button type="submit" className="w-full btn-primary justify-center py-4 text-sm">
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 btn-arrow" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
