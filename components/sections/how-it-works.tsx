"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/common/section-header";
import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Enter Your Website",
      description: "Paste your website URL and let us scan your site thoroughly",
      icon: "🌐",
    },
    {
      number: "02",
      title: "Get Instant Analysis",
      description: "Receive comprehensive SEO audit results in seconds",
      icon: "⚡",
    },
    {
      number: "03",
      title: "Implement Changes",
      description: "Follow our actionable recommendations to improve rankings",
      icon: "🚀",
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Monitor improvements and track keyword rankings over time",
      icon: "📊",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Process"
          title="How It Works"
          description="Simple, powerful SEO analysis in four easy steps"
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
              <div className="card-base h-full flex flex-col">
                {/* Step Number */}
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {step.description}
                </p>
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
