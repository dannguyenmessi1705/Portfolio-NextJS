import CreateBlogPage from "@/components/blog/new/CreateBlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Blog",
  description: "Create a new Nguyễn Di Đan's blog",
  verification: {
    google: "y3XSeAKkSbUuPyZfcb7N9EEaI-3EotyUOgWxjjbLrjU",
  },
};

export default function page() {
  return <CreateBlogPage />;
}
