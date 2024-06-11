import { getAllBlogsNoRoute } from "@/lib/serverAction";
import { Blog as BlogType } from "@/lib/data";
import Blog from "@/components/blog/Blog";
export default async function BlogsList() {
  const blogs = (await getAllBlogsNoRoute()) as BlogType[];
  return <Blog blogs={blogs} />;
}
