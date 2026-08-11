import { MetadataRoute } from "next";

const BASE = "https://ictsummit.gov.na";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/sponsorship`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/ict-summit-2024`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/ict-summit-2023`, lastModified, changeFrequency: "yearly", priority: 0.4 },
  ];
}
