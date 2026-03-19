import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aiautocar.com";
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/ai-cars`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/autonomous-driving`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.6 },
  ];
}
