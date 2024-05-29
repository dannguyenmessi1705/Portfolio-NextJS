import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Blog from "@/components/blog/Blog";

async function Page() {
  const posts = await getPost();
  return <Blog posts={posts} />;
}

async function getPost() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "public", "assets", "blog", "posts"),
  );
  const posts = files.map((filename) => {
    // slug
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "public", "assets", "blog", "posts", filename),
      "utf-8",
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });
  return posts;
}

export default Page;
