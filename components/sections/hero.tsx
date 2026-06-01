"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 min-h-[92vh] lg:min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="px-3.5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                ⭐ Enterprise-Grade SEO Intelligence
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Dominate Search Rankings with{" "}
              <span className="gradient-primary">Precision SEO Tools</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
          >
            Unlock hidden ranking opportunities and outrank competitors with our AI-powered SEO suite. Used by 10,000+ agencies to drive millions in client revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link href="/tools" className="btn-primary text-lg px-10 py-3.5 font-semibold">
              Launch Free Analysis →
            </Link>
            <a href="#features" className="btn-secondary text-lg px-10 py-3.5 font-semibold">
              See What&apos;s Possible
            </a>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            variants={fadeInUp}
            className="pt-10 border-t border-border"
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                Trusted by Industry Leaders
              </p>
              <div className="flex justify-center gap-6 items-center flex-wrap">
                {[
                  { name: "Used by 10K+", desc: "SEO Professionals" },
                  { name: "$500M+", desc: "in Client Revenue" },
                  { name: "98%", desc: "Customer Satisfaction" },
                ].map((stat) => (
                  <div key={stat.name} className="text-center">
                    <div className="font-bold text-accent text-lg">{stat.name}</div>
                    <div className="text-xs text-muted-foreground">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <ChevronDown className="w-5 h-5 text-muted-foreground mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
