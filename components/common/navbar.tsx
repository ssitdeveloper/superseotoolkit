"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold gradient-primary transition-all hover:scale-105 duration-200"
          >
            SuperSEOToolkit
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 xl:gap-10">
            <Link
              href="/tools"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium leading-none"
            >
              Tools
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium leading-none"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium leading-none"
            >
              Enterprise
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium leading-none"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link href="/tools" className="btn-primary py-2 px-5 text-sm font-semibold whitespace-nowrap">
              Launch Free Analysis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-card rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/tools"
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/blog"
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Enterprise
            </Link>
            <Link
              href="/contact"
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link href="/tools" className="btn-primary w-full text-center block">
              Launch Free Analysis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
