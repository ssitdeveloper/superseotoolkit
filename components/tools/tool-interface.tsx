"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

interface ToolInterfaceProps {
  placeholder: string;
  buttonLabel: string;
}

export function ToolInterface({ placeholder, buttonLabel }: ToolInterfaceProps) {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="card-base space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-3">
              Enter your URL or content
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !input.trim()}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <>
                <span className="animate-spin">⌛</span>
                Analyzing...
              </>
            ) : (
              <>
                {buttonLabel}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Fast, accurate analysis. No signup required.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
