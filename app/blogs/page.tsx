import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Blog from "@/components/blog/Blog";
import { Metadata } from "next";
import { getBlogsAction } from "@/lib/serverAction";
import noImage from "@/public/assets/no-image.svg";
import Image from "next/image";
import SearchBar from "@/components/blog/SearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import ButtonScrollTop from "@/components/ui/ButtonScrollTop";
import { Suspense } from "react";
import BlogsList from "@/components/blog/BlogsList";
import BlogSkeleton from "@/components/blog/BlogSkeleton";

export const metadata: Metadata = {
  title: "Blog",
  description: "Nguyễn Di Đan's blog",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

async function Page() {
  return (
    <section className="min-h-[70vh] py-2">
      <div className="container mx-auto p-4">
        <SearchBar />
        <Suspense fallback={<BlogSkeleton />}>
          <BlogsList />
          <ButtonScrollTop />
        </Suspense>
      </div>
    </section>
  );

  // <Blog blogs={blogs} />;
}

export default Page;
