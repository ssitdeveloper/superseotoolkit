import Link from "next/link";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="text-9xl font-bold mb-4 gradient-text">404</div>
          <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. Let&apos;s
            get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/" className="btn-primary text-lg px-8 py-3">
              Go Home
            </Link>
            <Link href="/tools" className="btn-secondary text-lg px-8 py-3">
              Browse Tools
            </Link>
          </div>

          {/* Quick Links */}
          <div className="card-base inline-block">
            <h3 className="font-semibold mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="/tools"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Tools
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
