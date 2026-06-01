"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Lock, Shield, CheckCircle, Zap } from "lucide-react";

export function SecurityTrustSection() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified. Data encrypted at rest and in transit. ISO 27001 compliant.",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "GDPR compliant. Your data is yours. We never sell or share your information.",
    },
    {
      icon: Zap,
      title: "99.99% Uptime SLA",
      description: "Enterprise-grade infrastructure. Auto-scaling to handle millions of requests.",
    },
    {
      icon: CheckCircle,
      title: "API Compliance",
      description: "Built to Google, Bing, and SEMrush API standards. Verified accuracy.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
