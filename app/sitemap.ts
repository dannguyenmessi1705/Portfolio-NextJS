import { Blog } from "@/lib/data";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/all-id`,
  );
  const blogs: Blog[] = await res.json();
  const blogEntries: MetadataRoute.Sitemap = blogs.map(({ id, date }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
    lastModified: new Date(date),
    priority: 0.8,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-me`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
