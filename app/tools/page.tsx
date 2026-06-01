"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { SectionHeader } from "@/components/common/section-header";
import { tools, categories } from "@/lib/tools-data";
import { Search, ArrowRight } from "lucide-react";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTools =
    selectedCategory === "all"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Tools"
              title="Complete SEO Toolkit"
              description="Access all our professional SEO tools to analyze, monitor, and optimize your website"
              centered
            />

            {/* Search Bar */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  className="w-full bg-card border border-border rounded-lg pl-12 pr-4 py-3 text-foreground focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary"
                }`}
              >
                All Tools
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:border-primary"
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  variants={itemVariants}
                  className="card-base group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-5xl">{tool.icon}</div>
                    <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-accent rounded">
                      {tool.pricing.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {tool.shortDescription}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 pb-6 border-b border-border">
                    {tool.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold"
                  >
                    Use Tool
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No tools found in this category
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
