import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { HeroSection } from "@/components/sections/hero";
import { TrustedMetricsSection } from "@/components/sections/trusted-metrics";
import { FeaturedToolsSection } from "@/components/sections/featured-tools";
import { CategoriesSection } from "@/components/sections/categories-section";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { BlogSection } from "@/components/sections/blog-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateFAQSchema,
} from "@/lib/seo-config";

export default function Home() {
  // JSON-LD Schema Markup
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const faqData = [
    {
      question: "Is SuperSEOToolkit really free?",
      answer:
        "Yes! Our core tools are completely free to use. We offer premium features for power users, but all essential SEO analysis is available at no cost.",
    },
    {
      question: "How accurate are the results?",
      answer:
        "Our tools use enterprise-grade algorithms that match or exceed industry standards. We continuously update our data sources to provide the most accurate information.",
    },
  ];
  const faqSchema = generateFAQSchema(faqData);
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedMetricsSection />
        <FeaturedToolsSection />
        <CategoriesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
