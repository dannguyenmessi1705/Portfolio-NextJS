import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getBlogAction, getBlogsAction } from "@/lib/serverAction";
import { type Blog } from "@/lib/data";
import MarkdownDisplay from "@/components/blog/MarkdownDisplay";
import ButtonScrollTop from "@/components/ui/ButtonScrollTop";

export async function generateMetadata({ params }: { params: any }) {
  const { blogId } = params;
  const { title, content } = await getBlog(blogId);
  return {
    title,
    description: content.length > 100 ? content.slice(0, 100) : content,
    verification: {
      google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
    },
  } as Metadata;
}

async function getBlog(blogId: string) {
  const blog = (await getBlogAction(blogId)) as Blog;
  return {
    id: blog?.id,
    title: blog?.title,
    excerpt: blog?.excerpt,
    content: blog?.content,
    coverImage: blog?.coverImage,
    date: blog?.date,
    adminName: blog?.adminName,
    adminAvatar: blog?.adminAvatar,
  };

  // // read markdown file
  // const markdownWithMeta = fs.readFileSync(
  //   path.join(
  //     process.cwd(),
  //     "public",
  //     "assets",
  //     "blog",
  //     "posts",
  //     `${blogId}.md`,
  //   ),
  //   "utf-8",
  // );
  // // convert markdown to html
  // const { data: frontmatter, content } = matter(markdownWithMeta);
  // const processedContent = await remark().use(html).process(content);
  // const contentHtml = processedContent.toString();
  // return { frontmatter, content, contentHtml };
}

export async function generateStaticParams() {
  const blogs = (await getBlogsAction()) as Blog[];
  const params = blogs.map((blog) => {
    return {
      blogId: blog.id,
    };
  });
  return params;
  // const files = fs.readdirSync(
  //   path.join(process.cwd(), "public", "assets", "blog", "posts"),
  // );
  // const params = files.map((filename) => {
  //   return {
  //     blogId: filename.replace(".md", ""),
  //   };
  // });
  // return params;
}

export default async function page({ params }: any) {
  const { blogId } = params;
  const {
    id,
    title,
    excerpt,
    content,
    coverImage,
    date,
    adminName,
    adminAvatar,
  } = await getBlog(blogId);

  return (
    <div className="container mx-auto">
      <Link
        href="/blogs"
        className="inline-block cursor-pointer rounded-md border-none bg-accent-700 px-4 py-2 text-base text-primary-50 no-underline"
      >
        Go Back
      </Link>
      <div className="rounded-xl shadow">
        <h1 className="my-3">{title}</h1>
        <div className="mt-5 bg-primary-900 px-2 py-1">Posted on {date}</div>
        <Image
          src={coverImage}
          alt={title}
          className="mx-auto w-3/4"
          width={1200}
          height={300}
          crossOrigin="use-credentials"
        />
        <div className="" data-color-mode="light">
          <MarkdownDisplay value={content} />
        </div>
        {/* <div className="prose prose-invert mx-auto w-3/4 lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div> */}
      </div>
      <ButtonScrollTop />
    </div>
  );
}
