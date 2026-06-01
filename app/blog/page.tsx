import Link from "next/link";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { SectionHeader } from "@/components/common/section-header";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              eyebrow="Resources"
              title="SuperSEOToolkit Blog"
              description="Stay updated with SEO tips, guides, and industry insights from our expert team"
              centered
            />
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts[0] && (
          <section className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="card-base group cursor-pointer overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex items-center justify-center h-64 md:h-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <div className="text-8xl">{blogPosts[0].image}</div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Featured
                    </span>
                    <h2 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <span>{blogPosts[0].readingTime} read</span>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold w-fit"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            <div className="space-y-6">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="card-base group cursor-pointer flex gap-6 hover:border-primary transition-colors">
                    <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg text-5xl">
                      {post.image}
                    </div>
                    <div className="flex-grow">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
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
