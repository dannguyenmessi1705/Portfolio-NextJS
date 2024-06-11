"use client";
import { motion } from "framer-motion";
import NotFound from "@/app/not-found";
import { type Blog } from "@/lib/data";
import BlogRender from "./BlogRender";

export default function Blog({ blogs }: { blogs: Blog[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="space-y-8"
    >
      <ul>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogRender key={blog.id} blog={blog} />)
        ) : (
          <NotFound message="There are no blogs here" />
        )}
      </ul>
    </motion.div>
  );
}
