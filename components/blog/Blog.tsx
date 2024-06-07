"use client";
import { motion } from "framer-motion";
import PostCard from "./PostCard";
import ButtonScrollTop from "../ui/ButtonScrollTop";

type Post = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};
export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="py-2"
    >
      <div className="container mx-auto mt-[30px] grid grid-cols-[1fr] gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
      </div>
      <div className="block sm:hidden">
        <ButtonScrollTop />
      </div>
    </motion.section>
  );
}
