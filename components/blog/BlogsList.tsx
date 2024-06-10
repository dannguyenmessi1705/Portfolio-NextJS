import { getBlogsAction } from "@/lib/serverAction";
import Blog from "@/components/blog/Blog";
export default async function BlogsList() {
  const blogs = await getBlogsAction();
  return <Blog blogs={blogs} />;
}
