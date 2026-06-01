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
          className="relative overflow-hidden rounded-2xl p-px"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl" />
          <div className="relative card-base text-center space-y-8 py-20 rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Competitors Are Already Ranked.{" "}
              <span className="gradient-primary">Start Winning Today.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Get actionable insights in 60 seconds. Most agencies see ranking improvements within 2 weeks. The question isn't whether you can improve—it's how quickly you want to move.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/tools" className="btn-primary text-lg px-10 py-3.5 font-semibold">
                Analyze My Site Now →
              </Link>
              <a href="#contact" className="btn-outline text-lg px-10 py-3.5 font-semibold">
                Get Expert Guidance
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              ✓ No credit card required  •  ✓ Takes 60 seconds  •  ✓ Full featured access
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
