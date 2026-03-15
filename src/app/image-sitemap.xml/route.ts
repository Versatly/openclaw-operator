import { siteConfig } from "@/lib/data";
import { cityLocations } from "@/lib/locations";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const pagePaths = [
    "",
    "/services",
    "/industries",
    "/locations",
    "/about",
    "/blog",
    "/contact",
    "/open-source",
    ...cityLocations.map((city) => `/locations/${city.slug}`),
  ];

  const imageLoc = `${siteConfig.domain}/opengraph-image`;
  const lastModified = new Date().toISOString();

  const urlEntries = pagePaths
    .map((path) => {
      const pageUrl = `${siteConfig.domain}${path}`;
      const title = path === "" ? "OpenClaw Operator by Versatly" : `OpenClaw Operator ${path}`;
      return `  <url>
    <loc>${escapeXml(pageUrl)}</loc>
    <lastmod>${lastModified}</lastmod>
    <image:image>
      <image:loc>${escapeXml(imageLoc)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
    </image:image>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
