import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Blog from "@/components/blog/Blog";
import { Metadata } from "next";
import { getBlogsAction } from "@/lib/serverAction";

export const metadata: Metadata = {
  title: "Blog",
  description: "Nguyễn Di Đan's blog",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

async function getBlogs(page: string = "0") {
  // const files = fs.readdirSync(
  //   path.join(process.cwd(), "public", "assets", "blog", "posts"),
  // );
  // const posts = files.map((filename) => {
  //   // slug
  //   const slug = filename.replace(".md", "");
  //   const markdownWithMeta = fs.readFileSync(
  //     path.join(process.cwd(), "public", "assets", "blog", "posts", filename),
  //     "utf-8",
  //   );
  //   const { data: frontmatter } = matter(markdownWithMeta);
  //   return { slug, frontmatter };
  // });
  // return posts;
  const blogs = await getBlogsAction(page);
  return blogs;
}

async function Page() {
  const blogs = await getBlogs();
  return <Blog blogs={blogs} />;
}

export default Page;
