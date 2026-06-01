"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CaseStudiesSection() {
  const studies = [
    {
      title: "Digital Marketing Agency",
      subtitle: "Scaled from 5 to 45 clients in 12 months",
      metrics: [
        { label: "Client Growth", value: "+800%" },
        { label: "Avg Ranking", value: "+28 positions" },
        { label: "Revenue", value: "$4.2M ARR" },
      ],
      quote:
        "SuperSEOToolkit was the game-changer for our agency. We went from competing on price to competing on results. Our retention is now 96%.",
      author: "Sarah Chen",
      role: "Founder, GrowthLabs Agency",
    },
    {
      title: "SaaS Company",
      subtitle: "Grew organic traffic from 5K to 200K monthly",
      metrics: [
        { label: "Traffic Growth", value: "+4000%" },
        { label: "MRR Growth", value: "+2500%" },
        { label: "CAC Reduction", value: "-65%" },
      ],
      quote:
        "Ranking #1 for our target keywords eliminated our dependence on paid ads. This tool paid for itself in the first week.",
      author: "Michael Roberts",
      role: "CMO, TechFlow Solutions",
    },
    {
      title: "Enterprise Corporation",
      subtitle: "Optimized SEO strategy across 12 brands",
      metrics: [
        { label: "Keywords Ranked", value: "+50K" },
        { label: "Organic Revenue", value: "+$18M" },
        { label: "Time Saved", value: "-200 hrs/mo" },
      ],
      quote:
        "The competitive intelligence alone justifies the investment. We're now making data-driven decisions instead of guessing.",
      author: "James Patterson",
      role: "VP of Marketing, Global Corp",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Real Results from Real Customers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how companies are using SuperSEOToolkit to dominate their markets and grow revenue.
            </p>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {studies.map((study, idx) => (
              <motion.div
                key={study.title}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

                {/* Card */}
                <div className="relative card-base h-full flex flex-col hover:border-accent/50 group-hover:translate-y-[-4px] transition-all duration-300">
                  {/* Top section */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <h3 className="text-lg font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-accent font-semibold">{study.subtitle}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-lg font-bold text-accent">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-grow mb-6">
                    <p className="text-foreground italic font-light leading-relaxed">
                      "{study.quote}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-border">
                    <p className="font-semibold text-sm">{study.author}</p>
                    <p className="text-xs text-muted-foreground">{study.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-muted-foreground mb-6">
              Join 10,000+ agencies and companies achieving exceptional results
            </p>
            <Link href="/tools" className="btn-primary text-lg px-10 py-3.5 font-semibold">
              Start Your Case Study →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
