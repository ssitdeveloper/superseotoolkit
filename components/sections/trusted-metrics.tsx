"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { SectionHeader } from "@/components/common/section-header";

export function TrustedMetricsSection() {
  const metrics = [
    {
      value: 50000,
      suffix: "+",
      label: "Active Users",
      description: "Marketers and agencies worldwide",
    },
    {
      value: 1000000,
      suffix: "+",
      label: "Analyses Run",
      description: "SEO audits completed annually",
    },
    {
      value: 150,
      suffix: "+",
      label: "Features",
      description: "Comprehensive SEO toolset",
    },
    {
      value: 99,
      suffix: ".9%",
      label: "Uptime",
      description: "Industry-leading reliability",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Our Impact"
          title="Trusted by Industry Leaders"
          description="Join thousands of professionals who use SuperSEOToolkit to dominate search rankings"
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
