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
    question: "How quickly will we see ranking improvements?",
    answer:
      "Most clients see meaningful improvements within 2-4 weeks. Our data shows the average agency identifies 40+ quick wins in their first audit. The key is prioritization—we help you focus on the highest-impact opportunities first.",
  },
  {
    question: "What's the difference between SuperSEOToolkit and competitors?",
    answer:
      "We're built for agencies, not just individual marketers. Our white-label dashboards, client reporting automation, and competitive intelligence are designed to help you deliver faster results and charge premium rates. Plus, our pricing scales with your growth—not against it.",
  },
  {
    question: "Can we white-label this for our clients?",
    answer:
      "Yes. Our white-label solution lets you brand everything—dashboards, reports, client portal—with your company colors and logo. This transforms SuperSEOToolkit into a revenue-generating service you can resell.",
  },
  {
    question: "How do you handle data accuracy and freshness?",
    answer:
      "We aggregate data from multiple authoritative sources and validate against live search results. Our 98% accuracy rate is independently verified. Real-time analysis happens instantly; historical data updates nightly.",
  },
  {
    question: "What's the ROI timeline for agencies?",
    answer:
      "Most agencies see ROI within 30 days through increased client retention and higher service pricing. The average client impact is $2M annually. We can show you exactly what similar agencies in your market are achieving.",
  },
  {
    question: "Do you offer enterprise support and SLAs?",
    answer:
      "Yes. Enterprise plans include dedicated account management, custom integrations, priority API access, and 99.99% SLA guarantees. Schedule a call with our enterprise team to discuss your specific needs.",
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
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Common Questions"
          title="Everything You Need to Know"
          description="Get answers about ROI, integration, and how agencies are using SuperSEOToolkit to transform their business"
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
