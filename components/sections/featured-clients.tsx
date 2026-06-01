"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FeaturedClientsSection() {
  const clients = [
    {
      name: "Enterprise Agency",
      logo: "EA",
      testimonial: "SuperSEOToolkit helped us increase client rankings by 40% in 3 months.",
      metric: "182 Keywords Ranked #1",
    },
    {
      name: "Tech Startup",
      logo: "TS",
      testimonial: "The ROI tracking alone saved us $50K/month in wasted ad spend.",
      metric: "$2.3M Revenue Impact",
    },
    {
      name: "Global Brand",
      logo: "GB",
      testimonial: "Finally a tool that understands enterprise-level SEO complexity.",
      metric: "50M+ Monthly Searches",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Proven Results from Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how companies scale their SEO with SuperSEOToolkit
            </p>
          </motion.div>

          {/* Client Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                <div className="relative card-base hover:border-accent/50">
                  {/* Logo */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold mb-4 text-sm">
                    {client.logo}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6">
                    <p className="text-foreground font-light leading-relaxed">
                      "{client.testimonial}"
                    </p>
                  </blockquote>

                  {/* Metric */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-accent font-semibold text-sm mb-1">
                      {client.metric}
                    </p>
                    <p className="text-muted-foreground text-sm">{client.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
