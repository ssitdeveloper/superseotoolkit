import Link from "next/link";
import { Share2, ExternalLink, Mail, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold gradient-primary">SuperSEOToolkit</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enterprise-grade SEO intelligence trusted by 10,000+ agencies and marketers worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/keyword-density-checker"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Keyword Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/meta-tag-analyzer"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Meta Tag Analyzer
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/serp-preview"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  SERP Preview
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  All Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-10 mb-16">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-3">Ready to dominate search?</h3>
            <p className="text-muted-foreground mb-6">
              Join 10,000+ agencies getting real results with SuperSEOToolkit. Start your free analysis in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/tools" className="btn-primary py-3 px-8 font-semibold">
                Launch Free Analysis
              </Link>
              <a href="#contact" className="btn-outline py-3 px-8 font-semibold">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-xs">
            <p>&copy; 2024 SuperSEOToolkit. All rights reserved.</p>
            <p className="mt-2">SOC 2 Type II • GDPR Compliant • 99.99% Uptime SLA</p>
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              Terms
            </Link>
            <a
              href="mailto:support@superseotoolkit.com"
              className="text-muted-foreground hover:text-accent transition-colors text-sm"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
