"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="card-base text-center space-y-8 py-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to improve your rankings?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of marketers and agencies using SuperSEOToolkit to
            dominate search results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/tools" className="btn-primary text-lg px-8 py-3">
              Start Free Analysis
            </Link>
            <button className="btn-secondary text-lg px-8 py-3">
              Schedule Demo
            </button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required • Free forever • Full featured
          </p>
        </motion.div>
      </div>
    </section>
  );
}
