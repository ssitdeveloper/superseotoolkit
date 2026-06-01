"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/common/section-header";
import { categories } from "@/lib/tools-data";
import { ArrowRight } from "lucide-react";

export function CategoriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Explore"
          title="Tools by Category"
          description="Find exactly what you need with our organized tool categories"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={`/categories/${category.id}`}>
                <div className="card-base group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{category.icon}</div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Essential tools for {category.name.toLowerCase()}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
