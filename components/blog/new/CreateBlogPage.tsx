"use client";

import { motion } from "framer-motion";
import MarkdownEdit from "./MarkdownEdit";

export default function CreateBlogPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="py-2"
    >
      <MarkdownEdit />
    </motion.section>
  );
}
