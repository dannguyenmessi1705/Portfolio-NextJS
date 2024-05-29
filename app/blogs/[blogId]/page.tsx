import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "public", "assets", "blog", "post"),
  );
  const params = files.map((filename) => {
    return {
      blogId: filename.replace(".md", ""),
    };
  });
  return params;
}
async function getPost(blogId: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(
      process.cwd(),
      "public",
      "assets",
      "blog",
      "post",
      `${blogId}.md`,
    ),
    "utf-8",
  );
  // convert markdown to html
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return { frontmatter, content, contentHtml };
}
export default async function page({ params }: any) {
  const { blogId } = params;
  const {
    frontmatter: { title, date, cover_image },
    content,
    contentHtml,
  } = await getPost(blogId);

  return (
    <div>
      <Link
        href="/blogs"
        className="inline-block cursor-pointer rounded-md border-none bg-accent-700 px-4 py-2 text-base text-primary-50 no-underline"
      >
        Go Back
      </Link>
      <div className="rounded-xl px-8 py-4 shadow">
        <h1 className="my-3">{title}</h1>
        <div className="mt-5 bg-primary-900 px-2 py-1">Posted on {date}</div>
        <img src={cover_image} alt={title} />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </div>
  );
}
