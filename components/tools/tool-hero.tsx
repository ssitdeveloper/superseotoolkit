import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Tool } from "@/lib/tools-data";

interface ToolHeroProps {
  tool: Tool;
}

export function ToolHero({ tool }: ToolHeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6"
        >
          <motion.div variants={fadeInUp} className="text-6xl mb-4">
            {tool.icon}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold"
          >
            {tool.name}
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {tool.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4">
            <button className="btn-primary text-lg px-8 py-3">
              Start Analysis
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-border"
          >
            {tool.features.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl">✨</div>
                <p className="text-sm font-semibold">{feature}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
