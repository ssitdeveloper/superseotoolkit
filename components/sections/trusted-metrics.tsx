"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { SectionHeader } from "@/components/common/section-header";

export function TrustedMetricsSection() {
  const metrics = [
    {
      value: 10000,
      suffix: "+",
      label: "Agencies & Consultants",
      description: "Delivering results for their clients daily",
    },
    {
      value: 500,
      suffix: "M+",
      label: "Ranking Keywords Tracked",
      description: "Real-time SEO intelligence",
    },
    {
      value: 98,
      suffix: "%",
      label: "Accuracy Rate",
      description: "Enterprise-grade data quality",
    },
    {
      value: 500,
      suffix: "M+",
      label: "Revenue Influenced",
      description: "Quantified client impact annually",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Proven Performance"
          title="Enterprise Results at Scale"
          description="The data-driven platform that powers the world's most successful SEO teams"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-base text-center hover:scale-105 transform transition-transform"
            >
              <div className="mb-4">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{metric.label}</h3>
              <p className="text-muted-foreground text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
