"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/common/section-header";
import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Scan Your Site",
      description: "Upload your domain. We analyze 100+ SEO factors in 60 seconds.",
      icon: "🔍",
      outcome: "Identify technical issues costing you rankings",
    },
    {
      number: "02",
      title: "Get Competitive Intelligence",
      description: "See exactly what your competitors rank for that you don't.",
      icon: "🎯",
      outcome: "Discover $100K+ in untapped keyword opportunities",
    },
    {
      number: "03",
      title: "Prioritized Roadmap",
      description: "We rank opportunities by impact and difficulty. Quick wins first.",
      icon: "📋",
      outcome: "Double-check your ranking progress monthly",
    },
    {
      number: "04",
      title: "Monitor & Scale",
      description: "Track rankings, traffic, and revenue impact in real-time.",
      icon: "📈",
      outcome: "Prove ROI and justify premium pricing to clients",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Getting Started"
          title="Start Dominating Search in 4 Steps"
          description="From initial audit to competitive domination—this is how agencies win with SuperSEOToolkit"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="card-base h-full flex flex-col group hover:border-accent/50">
                {/* Step Number */}
                <div className="text-5xl font-bold text-primary/15 mb-4 group-hover:text-primary/25 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {step.description}
                </p>

                {/* Outcome */}
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-accent font-semibold text-sm">✓ {step.outcome}</p>
                </div>
              </div>

              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
