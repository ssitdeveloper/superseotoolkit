import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { Calendar, User, Clock, Share2 } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-primary/20 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readingTime} read</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center text-9xl">
              {post.image}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>

            {post.sections.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h2 className="text-3xl font-bold mt-12 mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-12 border-t border-b border-border">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl flex-shrink-0">
                  👩‍🔬
                </div>
                <div>
                  <h3 className="font-bold">{post.author}</h3>
                  <p className="text-muted-foreground text-sm">
                    SEO and content specialist focused on practical ranking growth.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Share this article</p>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-card rounded-lg transition-colors" aria-label="Share article">
                    <Share2 className="w-5 h-5 text-muted-foreground hover:text-accent" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <div className="card-base group cursor-pointer">
                    <div className="text-5xl mb-4">{article.image}</div>
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
