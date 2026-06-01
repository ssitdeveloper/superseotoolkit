"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/common/section-header";

export function BenefitsSection() {
  const benefits = [
    {
      title: "40% Faster Rankings",
      description:
        "Discover high-impact opportunities that competitors miss. Our clients see ranking improvements in weeks, not months.",
      icon: "📈",
    },
    {
      title: "$2M Average Client Impact",
      description:
        "Quantify real revenue impact for each client project. ROI tracking that justifies premium pricing.",
      icon: "💰",
    },
    {
      title: "Competitive Edge Detection",
      description:
        "Uncover gaps in competitor strategies and capture untapped ranking opportunities before they do.",
      icon: "🎯",
    },
    {
      title: "Automate Reporting",
      description:
        "White-label dashboards and automated reports save 10+ hours per client weekly.",
      icon: "⏱️",
    },
    {
      title: "Enterprise-Grade Accuracy",
      description:
        "98% data accuracy with real-time updates. No outdated metrics holding you back.",
      icon: "✓",
    },
    {
      title: "Priority Expert Support",
      description:
        "Dedicated account managers for enterprise plans. Direct access to our SEO research team.",
      icon: "👥",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Proven Outcomes"
          title="Why Leading Agencies Trust SuperSEOToolkit"
          description="Real metrics that drive real business value. See what agencies are achieving."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-base"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
