export interface Tool {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  isFeatured: boolean;
  pricing: "free" | "pro" | "enterprise";
  shortDescription: string;
}

export const tools: Tool[] = [
  {
    id: "keyword-density-checker",
    slug: "keyword-density-checker",
    name: "Keyword Density Checker",
    category: "SEO",
    description:
      "Analyze keyword density and distribution across your web pages to optimize content relevance.",
    icon: "📊",
    features: [
      "Real-time keyword analysis",
      "Density percentage calculation",
      "Competitor comparison",
      "Content optimization suggestions",
    ],
    isFeatured: true,
    pricing: "free",
    shortDescription: "Analyze keyword density in your content",
  },
  {
    id: "meta-tag-analyzer",
    slug: "meta-tag-analyzer",
    name: "Meta Tag Analyzer",
    category: "SEO",
    description:
      "Evaluate and improve your meta tags, titles, and descriptions for better search visibility.",
    icon: "🏷️",
    features: [
      "Title tag analysis",
      "Meta description optimization",
      "Length recommendations",
      "Character count tracking",
    ],
    isFeatured: true,
    pricing: "free",
    shortDescription: "Optimize your meta tags for search engines",
  },
  {
    id: "xml-sitemap-generator",
    slug: "xml-sitemap-generator",
    name: "XML Sitemap Generator",
    category: "Developer",
    description: "Generate XML sitemaps to help search engines crawl your website more effectively.",
    icon: "🗺️",
    features: [
      "Automatic sitemap generation",
      "Sitemap indexing",
      "Mobile sitemaps",
      "Download as XML",
    ],
    isFeatured: true,
    pricing: "free",
    shortDescription: "Generate XML sitemaps for your website",
  },
  {
    id: "robots-txt-generator",
    slug: "robots-txt-generator",
    name: "Robots.txt Generator",
    category: "Developer",
    description: "Create optimized robots.txt files to control search engine crawler access.",
    icon: "🤖",
    features: [
      "Custom disallow rules",
      "User-agent targeting",
      "Sitemap inclusion",
      "Copy to clipboard",
    ],
    isFeatured: true,
    pricing: "free",
    shortDescription: "Generate robots.txt files",
  },
  {
    id: "serp-preview",
    slug: "serp-preview",
    name: "SERP Preview Tool",
    category: "SEO",
    description: "Preview how your pages appear in search engine results.",
    icon: "👁️",
    features: [
      "Desktop preview",
      "Mobile preview",
      "Rich snippet simulation",
      "Real-time updates",
    ],
    isFeatured: true,
    pricing: "free",
    shortDescription: "Preview SERP appearance",
  },
  {
    id: "json-ld-schema-generator",
    slug: "json-ld-schema-generator",
    name: "JSON-LD Schema Generator",
    category: "Developer",
    description: "Generate structured data markup to enhance search results.",
    icon: "⚙️",
    features: [
      "Multiple schema types",
      "JSON-LD generation",
      "Schema validation",
      "Best practices guide",
    ],
    isFeatured: false,
    pricing: "free",
    shortDescription: "Generate schema markup",
  },
];

export const categories = [
  { id: "seo", name: "SEO Tools", icon: "🔍", color: "#2563eb" },
  { id: "developer", name: "Developer Tools", icon: "👨‍💻", color: "#3b82f6" },
  { id: "text", name: "Text Tools", icon: "✍️", color: "#60a5fa" },
  { id: "security", name: "Security Tools", icon: "🔒", color: "#0ea5e9" },
  { id: "marketing", name: "Marketing Tools", icon: "📢", color: "#06b6d4" },
  { id: "ai", name: "AI Tools", icon: "🤖", color: "#14b8a6" },
];

export const getToolsByCategory = (categoryId: string) => {
  return tools.filter((tool) => tool.category === categoryId);
};

export const getFeaturedTools = () => {
  return tools.filter((tool) => tool.isFeatured);
};

export const getToolBySlug = (slug: string) => {
  return tools.find((tool) => tool.slug === slug);
};
