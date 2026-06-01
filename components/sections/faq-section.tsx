"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is SuperSEOToolkit really free?",
    answer:
      "Yes! Our core tools are completely free to use. We offer premium features for power users, but all essential SEO analysis is available at no cost.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "Our tools use enterprise-grade algorithms that match or exceed industry standards. We continuously update our data sources to provide the most accurate information.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Real-time analysis is performed instantly when you use our tools. For tracking features, data is updated daily and synchronized with search engines.",
  },
  {
    question: "Can I export my reports?",
    answer:
      "Yes, all reports can be exported in multiple formats including PDF, CSV, and JSON for easy sharing and analysis.",
  },
  {
    question: "Do you offer API access?",
    answer:
      "We offer API access for enterprise customers. Contact our sales team to learn about custom API solutions for your needs.",
  },
  {
    question: "What's your support policy?",
    answer:
      "We provide 24/7 email support for all users and live chat for premium members. Our average response time is under 2 hours.",
  },
];

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-border rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/50 transition-colors text-left"
      >
        <span className="font-semibold text-lg">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-accent transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 text-muted-foreground">{item.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Help"
          title="Frequently Asked Questions"
          description="Find answers to common questions about SuperSEOToolkit"
          centered
        />

        <div className="space-y-4 mt-16">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
