"use client";

import { motion } from "framer-motion";
import CreateBlogForm from "./CreateBlogForm";
import { Session } from "next-auth";
import NotFound from "@/app/not-found";

export default function CreateBlogPage({
  session,
}: {
  session: Session | null;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="py-2"
    >
      <div className="container mx-auto">
        {session && session.user?.id === process.env.NEXT_PUBLIC_ADMIN_ID ? (
          <CreateBlogForm />
        ) : (
          <NotFound message="You are not authorized to create a blog" />
        )}
      </div>
    </motion.section>
  );
}
