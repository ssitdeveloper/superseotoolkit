"use client";

import { getToolBySlug } from "@/lib/tools-data";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { ToolHero } from "@/components/tools/tool-hero";
import { ToolInterface } from "@/components/tools/tool-interface";
import { useParams } from "next/navigation";

export default function ToolPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tool not found</h1>
          <p className="text-muted-foreground">
            The tool you&apos;re looking for doesn&apos;t exist.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <ToolHero tool={tool} />
        <ToolInterface
          placeholder="Enter URL or content..."
          buttonLabel="Analyze Now"
        />

        {/* How to Use Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">How to Use</h2>
            <div className="space-y-8">
              <div className="card-base">
                <h3 className="text-xl font-semibold mb-2">Step 1: Input</h3>
                <p className="text-muted-foreground">
                  Enter your website URL or paste content to analyze.
                </p>
              </div>
              <div className="card-base">
                <h3 className="text-xl font-semibold mb-2">Step 2: Analysis</h3>
                <p className="text-muted-foreground">
                  Our tool scans and analyzes your content in real-time.
                </p>
              </div>
              <div className="card-base">
                <h3 className="text-xl font-semibold mb-2">Step 3: Results</h3>
                <p className="text-muted-foreground">
                  Review detailed insights and actionable recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-3xl">⚡</div>
                <h3 className="font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Get results in seconds, not minutes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">🎯</div>
                <h3 className="font-semibold">Accurate</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade analysis and insights.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">✨</div>
                <h3 className="font-semibold">Easy to Use</h3>
                <p className="text-muted-foreground">
                  No technical knowledge required.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl">🚀</div>
                <h3 className="font-semibold">Actionable</h3>
                <p className="text-muted-foreground">
                  Clear recommendations you can implement immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="card-base">
                <h3 className="font-semibold mb-2">Is this tool free?</h3>
                <p className="text-muted-foreground">
                  Yes, {tool.name} is completely free to use with no signup required.
                </p>
              </div>
              <div className="card-base">
                <h3 className="font-semibold mb-2">How accurate is the analysis?</h3>
                <p className="text-muted-foreground">
                  Our analysis uses enterprise-grade algorithms for maximum accuracy.
                </p>
              </div>
              <div className="card-base">
                <h3 className="font-semibold mb-2">Can I share the results?</h3>
                <p className="text-muted-foreground">
                  Yes, you can download and share results in multiple formats.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
