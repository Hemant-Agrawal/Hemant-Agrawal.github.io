import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://hemant-agrawal.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "experience", priority: 0.9, changeFrequency: "monthly" },
    { path: "projects", priority: 0.9, changeFrequency: "monthly" },
    { path: "ai-lab", priority: 0.7, changeFrequency: "monthly" },
    { path: "homelab", priority: 0.7, changeFrequency: "monthly" },
    { path: "contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
