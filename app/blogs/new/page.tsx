import CreateBlogPage from "@/components/blog/new/CreateBlogPage";
import { Metadata } from "next";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "New Blog",
  description: "Create a new Nguyễn Di Đan's blog",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

export default async function page() {
  const session = await auth();
  return <CreateBlogPage session={session} />;
}
