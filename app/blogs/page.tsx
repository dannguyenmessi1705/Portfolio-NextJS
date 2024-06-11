import { Metadata } from "next";
import SearchBar from "@/components/blog/SearchBar";
import ButtonScrollTop from "@/components/ui/ButtonScrollTop";
import { Suspense } from "react";
import BlogsList from "@/components/blog/BlogsList";
import BlogSkeleton from "@/components/blog/BlogSkeleton";
import CreateBlogButton from "@/components/blog/CreateBlogButton";
import { auth } from "@/lib/auth";
import LoadMoreBlog from "@/components/blog/LoadMoreBlog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Nguyễn Di Đan's blog",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

async function Page({ searchParams }: { searchParams: any }) {
  const query = searchParams?.q ?? "";
  const session = await auth();
  return (
    <section className="min-h-[70vh] py-2">
      <div className="container mx-auto p-4">
        <SearchBar />
        <Suspense fallback={<BlogSkeleton />}>
          <BlogsList query={query} />
          <ButtonScrollTop bottomTop="bottom-20" />
        </Suspense>
        {session?.user &&
          session.user.id === process.env.NEXT_PUBLIC_ADMIN_ID && (
            <CreateBlogButton />
          )}
        <LoadMoreBlog query={query}/>
      </div>
    </section>
  );

  // <Blog blogs={blogs} />;
}

export default Page;
