"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { SectionHeader } from "@/components/common/section-header";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "seo-basics-2024",
    title: "SEO Basics: What Changed in 2024",
    excerpt:
      "A comprehensive guide to the latest SEO trends and algorithm changes that every digital marketer should know.",
    image: "🔍",
    date: "June 1, 2024",
    author: "Sarah Johnson",
    readingTime: "8 min",
    category: "SEO",
  },
  {
    id: 2,
    slug: "keyword-research-guide",
    title: "The Complete Guide to Keyword Research",
    excerpt:
      "Learn how to find high-value keywords that drive traffic and conversions with our step-by-step approach.",
    image: "🎯",
    date: "May 28, 2024",
    author: "Mike Chen",
    readingTime: "12 min",
    category: "Strategy",
  },
  {
    id: 3,
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist 2024",
    excerpt:
      "Everything you need to know about optimizing your website's technical foundation for search engines.",
    image: "⚙️",
    date: "May 20, 2024",
    author: "Emma Rodriguez",
    readingTime: "10 min",
    category: "Technical",
  },
];

export function BlogSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Resources"
          title="Latest Blog Articles"
          description="Stay updated with SEO tips, guides, and industry insights"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="card-base group flex flex-col"
            >
              {/* Featured Image */}
              <div className="text-6xl mb-4 flex items-center justify-center h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                {post.image}
              </div>

              {/* Category */}
              <div className="inline-block mb-2">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>

              {/* Reading Time & CTA */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {post.readingTime} read
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold"
                >
                  Read
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Blog CTA */}
        <div className="text-center mt-16">
          <Link href="/blog" className="btn-secondary text-lg px-8 py-3">
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
