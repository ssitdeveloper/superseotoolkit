export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readingTime: string;
  category: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "seo-basics-2024",
    title: "SEO Basics: What Changed in 2024",
    excerpt:
      "A practical guide to the most important ranking changes and what they mean for your SEO workflow.",
    image: "🔍",
    date: "June 1, 2024",
    author: "Sarah Johnson",
    readingTime: "8 min",
    category: "SEO",
    sections: [
      {
        heading: "Core Web Vitals Still Matter",
        paragraphs: [
          "Performance and interaction quality continue to affect rankings. Teams that fix layout shift and speed bottlenecks are seeing stronger indexation and better engagement.",
          "Treat page speed work as continuous maintenance, not a one-time task."
        ]
      },
      {
        heading: "Topical Depth Beats Thin Content",
        paragraphs: [
          "Google is rewarding content that demonstrates real expertise and context. Pages that only repeat a keyword are losing visibility.",
          "Build clusters around user intent and add concrete examples, data, and implementation steps."
        ]
      },
      {
        heading: "Technical Hygiene Is Non-Negotiable",
        paragraphs: [
          "Broken canonicals, weak internal linking, and index bloat quietly hurt rankings.",
          "A monthly technical SEO review can recover substantial lost visibility."
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "keyword-research-guide",
    title: "The Complete Guide to Keyword Research",
    excerpt:
      "How to find high-value keywords that match intent and drive measurable traffic.",
    image: "🎯",
    date: "May 28, 2024",
    author: "Mike Chen",
    readingTime: "12 min",
    category: "Strategy",
    sections: [
      {
        heading: "Start With Intent, Not Volume",
        paragraphs: [
          "A lower-volume query with clear purchase intent often outperforms broad high-volume terms.",
          "Group targets by informational, commercial, and transactional intent before creating content."
        ]
      },
      {
        heading: "Map Keywords to Pages",
        paragraphs: [
          "Avoid cannibalization by assigning one primary target per page and supporting terms around it.",
          "Use internal links to connect related pages in the same cluster."
        ]
      },
      {
        heading: "Build a Repeatable Prioritization Score",
        paragraphs: [
          "Score opportunities by intent fit, ranking difficulty, and business value.",
          "This helps teams ship the highest-impact pages first."
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist 2024",
    excerpt:
      "A practical checklist to keep crawling, indexing, and performance healthy at scale.",
    image: "⚙️",
    date: "May 20, 2024",
    author: "Emma Rodriguez",
    readingTime: "10 min",
    category: "Technical",
    sections: [
      {
        heading: "Crawl and Index Controls",
        paragraphs: [
          "Validate robots directives, canonical tags, and sitemap consistency every release.",
          "Fixing crawl traps and duplicate URL patterns prevents index waste."
        ]
      },
      {
        heading: "Performance and Rendering",
        paragraphs: [
          "Monitor Core Web Vitals and long-task blocking on key templates.",
          "Server rendering and asset compression improvements often produce immediate gains."
        ]
      },
      {
        heading: "Structured Data and Internal Linking",
        paragraphs: [
          "Schema coverage and clean internal link architecture improve discoverability.",
          "Ensure critical pages are reachable within a few clicks from top-level hubs."
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "link-building-strategies",
    title: "Modern Link Building Strategies",
    excerpt:
      "Build durable authority with editorial links, digital PR, and partner distribution.",
    image: "🔗",
    date: "May 15, 2024",
    author: "John Smith",
    readingTime: "9 min",
    category: "Strategy",
    sections: [
      {
        heading: "Create Link-Worthy Assets",
        paragraphs: [
          "Original research, calculators, and benchmark content attract links naturally.",
          "Promote assets through targeted outreach to publications already covering your topic."
        ]
      },
      {
        heading: "Digital PR With Relevance",
        paragraphs: [
          "Relevance and context matter more than raw domain metrics.",
          "Focus on placements where your audience actually reads and shares."
        ]
      },
      {
        heading: "Measure by Rankings and Revenue",
        paragraphs: [
          "Track the assisted impact of link campaigns on rankings and conversions.",
          "Use those results to refine outreach and content investment."
        ]
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
