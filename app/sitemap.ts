import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextchapterlearn.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/elementary`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/middle-school`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/high-school`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/test-prep`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/college-counseling`,
      lastModified: new Date(),
    },
  ];
}