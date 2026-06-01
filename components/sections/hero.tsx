"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
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
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <span className="text-sm font-semibold text-accent">
                🚀 The Platform for SEO Success
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Professional SEO Tools for{" "}
              <span className="gradient-text">Serious Marketers</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Analyze, monitor, and optimize your website rankings with
            enterprise-grade SEO tools. Trusted by digital marketers and
            agencies worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="/tools" className="btn-primary text-lg px-8 py-3">
              Start Analyzing
            </Link>
            <button className="btn-secondary text-lg px-8 py-3">
              Explore Tools
            </button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={fadeInUp}
            className="pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by over 50,000 professionals
            </p>
            <div className="flex justify-center gap-8 items-center flex-wrap">
              {["Google", "Ahrefs", "SEMrush", "Moz"].map((brand) => (
                <div
                  key={brand}
                  className="text-muted-foreground font-semibold opacity-60"
                >
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
