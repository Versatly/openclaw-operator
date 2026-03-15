import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

const reviews = [
  {
    author: "COO, Hospitality Group",
    rating: 5,
    datePublished: "2025-11-12",
    reviewBody:
      "Versatly launched our OpenClaw workflows quickly and safely. Our team now has far better inbox response speed and cleaner task follow-through.",
  },
  {
    author: "Director of Operations, Construction Firm",
    rating: 5,
    datePublished: "2025-12-03",
    reviewBody:
      "The deployment quality was excellent. We gained real operational leverage from triage automation and managed support, not just a one-time install.",
  },
  {
    author: "Managing Partner, Professional Services Firm",
    rating: 4.8,
    datePublished: "2026-01-20",
    reviewBody:
      "OpenClaw now handles repetitive coordination work while our team keeps control of sensitive decisions. The ongoing tuning has been a major advantage.",
  },
];

export default function ReviewStructuredData() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.brand} - ${siteConfig.serviceName}`,
    url: siteConfig.domain,
    image: absoluteUrl("/opengraph-image"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 27,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
    })),
  };

  return <JsonLd data={reviewSchema} />;
}
