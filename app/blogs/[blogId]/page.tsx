import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllBlogsNoRoute, getBlogDetailNoRoute } from "@/lib/serverAction";
import { type Blog } from "@/lib/data";
import MarkdownDisplay from "@/components/blog/MarkdownDisplay";
import ButtonScrollTop from "@/components/ui/ButtonScrollTop";
import { ImArrowLeft } from "react-icons/im";
import noImage from "@/public/assets/no-image.svg";

export async function generateMetadata({ params }: { params: any }) {
  const { blogId } = params;
  const { title, content } = (await getBlogDetailNoRoute(blogId)) as Blog;
  return {
    title,
    description: content!.length > 100 ? content!.slice(0, 100) : content,
    verification: {
      google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
    },
  } as Metadata;
}

async function getBlog(blogId: string) {
  const blog = await getBlogDetailNoRoute(blogId);
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
}

export async function generateStaticParams() {
  const blogs = (await getAllBlogsNoRoute()) as Blog[];
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
  } = (await getBlog(blogId)) as Blog;

  return (
    <section className="container mx-auto my-8 rounded-md p-4 shadow-md">
      <h1 className="mb-6 text-4xl font-extrabold text-white">{title}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={adminAvatar ? adminAvatar : noImage}
            alt="Author"
            width={40}
            height={40}
            quality={80}
            className="h-auto w-auto rounded-full"
          />
          <div className="flex flex-col justify-between">
            <p className="text-sm font-semibold">{adminName}</p>
            <p className="text-xs text-primary-400">
              Published in -{" "}
              {(Date.now() - new Date(date).getTime()) / 86400000 > 1
                ? `${Math.floor((Date.now() - new Date(date).getTime()) / 86400000)} days ago`
                : "Today"}
            </p>
          </div>
        </div>
        <Link
          href="/blogs"
          prefetch={true}
          className="flex cursor-pointer items-center justify-center rounded-md border-none bg-accent-600 px-4 py-2 text-base text-white no-underline hover:bg-accent-700"
        >
          <ImArrowLeft className="mr-2" />
          Go Back
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <Image
          src={coverImage ? coverImage : noImage}
          alt={title!}
          width={700}
          height={400}
          quality={80}
          className="h-auto w-auto rounded-md"
        />
      </div>

      <div className="mt-4">
        <MarkdownDisplay value={content!} />
      </div>
      <ButtonScrollTop />
    </section>
  );
}
