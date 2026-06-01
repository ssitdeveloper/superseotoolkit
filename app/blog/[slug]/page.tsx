import Link from "next/link";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Calendar, User, Clock, Share2 } from "lucide-react";

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Article Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-primary/20 px-3 py-1 rounded-full">
                SEO
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              SEO Basics: What Changed in 2024
            </h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>June 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center text-9xl">
              🔍
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Search engine optimization continues to evolve at a rapid pace. In
              2024, we&apos;ve seen significant changes to how Google ranks
              websites and evaluates content quality. This guide covers the most
              important updates and what they mean for your SEO strategy.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Key Changes in 2024</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">1. Core Web Vitals Update</h3>
            <p className="text-muted-foreground leading-relaxed">
              Google&apos;s Core Web Vitals remain a critical ranking factor.
              The focus on user experience metrics means faster page loads and
              smoother interactions are more important than ever.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">2. Content Quality</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI-generated content continues to face scrutiny. Google rewards
              original, well-researched, and authoritative content that
              demonstrates genuine expertise.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">3. Mobile-First Indexing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mobile-first indexing is now the standard. Your mobile experience
              directly impacts your search rankings, making responsive design
              essential.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4">Best Practices Moving Forward</h2>

            <div className="bg-card/50 border border-border rounded-lg p-6 my-8">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Focus on user intent and create content that answers real questions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Optimize for mobile devices and ensure fast page loads</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Build quality backlinks from authoritative sources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Use structured data markup to enhance your search appearance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Keep your website updated with fresh, relevant content</span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              The SEO landscape in 2024 rewards websites that prioritize user
              experience, content quality, and technical excellence. By focusing
              on these fundamentals, you&apos;ll be well-positioned to maintain
              and improve your search rankings.
            </p>
          </div>
        </section>

        {/* Share & Author */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-b border-border">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {/* Author */}
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl flex-shrink-0">
                  👩‍🔬
                </div>
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-muted-foreground text-sm">
                    SEO Expert & Content Strategist. 8+ years helping brands
                    dominate search rankings.
                  </p>
                </div>
              </div>

              {/* Share */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Share this article</p>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-card rounded-lg transition-colors">
                    <Share2 className="w-5 h-5 text-muted-foreground hover:text-accent" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Keyword Research Guide",
                  date: "May 28, 2024",
                  icon: "🎯",
                },
                {
                  title: "Technical SEO Checklist",
                  date: "May 20, 2024",
                  icon: "⚙️",
                },
              ].map((article, index) => (
                <Link key={index} href="/blog">
                  <div className="card-base group cursor-pointer">
                    <div className="text-5xl mb-4">{article.icon}</div>
                    <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
