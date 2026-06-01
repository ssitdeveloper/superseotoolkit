"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/common/section-header";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Enterprise-Grade Accuracy",
      description:
        "Get insights powered by the latest SEO algorithms and best practices",
      icon: "🎯",
    },
    {
      title: "Real-Time Data",
      description:
        "Monitor changes instantly with live tracking and notifications",
      icon: "⚡",
    },
    {
      title: "Actionable Recommendations",
      description:
        "Clear, prioritized steps to improve your search rankings immediately",
      icon: "✨",
    },
    {
      title: "Competitor Analysis",
      description:
        "Benchmark against competitors and discover untapped opportunities",
      icon: "🏆",
    },
    {
      title: "Easy Integration",
      description:
        "Connect with your favorite marketing tools and workflows seamlessly",
      icon: "🔗",
    },
    {
      title: "24/7 Support",
      description:
        "Get help whenever you need it from our expert support team",
      icon: "💬",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Powerful Benefits"
          description="Everything you need to dominate search rankings"
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
