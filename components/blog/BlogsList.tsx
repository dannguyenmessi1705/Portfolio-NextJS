import { getAllBlogsNoRoute } from "@/lib/serverAction";
import { Blog as BlogType } from "@/lib/data";
import Blog from "@/components/blog/Blog";
export default async function BlogsList({ query }: { query: string }) {
  const blogs = (await getAllBlogsNoRoute("0", query)) as BlogType[];
  return <Blog blogs={blogs} />;
}
