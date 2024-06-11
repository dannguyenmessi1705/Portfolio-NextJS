import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getBlogAction, getBlogsAction } from "@/lib/serverAction";
import { type Blog } from "@/lib/data";
import MarkdownDisplay from "@/components/blog/MarkdownDisplay";
import ButtonScrollTop from "@/components/ui/ButtonScrollTop";
import { FaRegClock } from "react-icons/fa";

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
  const processedContent = await remark().use(html).process(blog.content);
  const contentHtml = processedContent.toString();
  return {
    id: blog?.id,
    title: blog?.title,
    excerpt: blog?.excerpt,
    content: blog?.content,
    coverImage: blog?.coverImage,
    date: blog?.date,
    adminName: blog?.adminName,
    adminAvatar: blog?.adminAvatar,
    contentHtml,
  };
}

export async function generateStaticParams() {
  const blogs = (await getBlogsAction()) as Blog[];
  const params = blogs.map((blog) => {
    return {
      blogId: blog.id,
    };
  });
  return params;
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
    contentHtml,
  } = await getBlog(blogId);
  console.log(title);

  return (
    <section className="container mx-auto my-8 rounded-md p-4 shadow-md">
      <h1 className="mb-6 text-4xl font-extrabold text-white">{title}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={adminAvatar}
            alt="Author"
            width={40}
            height={40}
            quality={80}
            className="h-auto w-auto rounded-full"
          />
          <div className="flex flex-col justify-between">
            <p className="text-sm font-semibold">{adminName}</p>
            <p className="text-xs text-primary-400">
              Published in - {date.split("T")[0]}
            </p>
          </div>
        </div>
        <Link
          href="/blogs"
          prefetch={true}
          className="inline-block cursor-pointer rounded-md border-none bg-accent-700 px-4 py-2 text-base text-primary-50 no-underline"
        >
          Go Back
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <Image
          src={coverImage}
          alt={title}
          width={700}
          height={400}
          quality={80}
          className="rounded-md h-auto w-auto"
        />
      </div>

      <div className="mt-4">
        <MarkdownDisplay value={content} />
      </div>

      <ButtonScrollTop />
    </section>
  );
}

/*
 <section className="container mx-auto my-8 p-4 rounded-md shadow-md">
      <Link
        href="/blogs"
        prefetch={true}
        className="inline-block cursor-pointer rounded-md border-none bg-accent-700 px-4 py-2 text-base text-primary-50 no-underline"
      >
        Go Back
      </Link>
      <div className="rounded-xl shadow">
        <h1 className="my-3">{title}</h1>
        <div className="mt-5 bg-primary-900 px-2 py-1">
          Posted on {date.split("T")[0]}
        </div>
        <Image
          src={coverImage}
          alt={title}
          className="mx-auto w-3/4"
          width={1200}
          height={300}
          quality={80}
          crossOrigin="use-credentials"
        />
        <div className="">
          <MarkdownDisplay value={content} />
        </div>
      </div>
      <ButtonScrollTop />
    </section>
 */
