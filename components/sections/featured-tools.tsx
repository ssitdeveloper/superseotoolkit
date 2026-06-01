"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/common/section-header";
import { ArrowRight } from "lucide-react";
import { getFeaturedTools } from "@/lib/tools-data";

export function FeaturedToolsSection() {
  const tools = getFeaturedTools();

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Enterprise Capabilities"
          title="Professional-Grade SEO Tools"
          description="Industry-leading intelligence that powers 10,000+ agencies. Each tool is built for accuracy and speed."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {tools.slice(0, 6).map((tool) => (
            <motion.div
              key={tool.id}
              variants={itemVariants}
              className="card-base group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{tool.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {tool.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {tool.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {tool.features.slice(0, 2).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/tools/${tool.slug}`}
                className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold"
              >
                Try Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link href="/tools" className="btn-primary text-lg px-8 py-3 font-semibold">
            Explore Complete Toolkit →
          </Link>
        </div>
      </div>
    </section>
  );
}
