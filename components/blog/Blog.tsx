"use client";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import NotFound from "@/app/not-found";
import { type Blog } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import noImage from "@/public/assets/no-image.svg";

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
      {blogs ? (
        blogs.map((blog) => (
          <li key={blog.id} className="flex items-start gap-4 border-b p-4">
            <div className="flex-shrink-0">
              <Image
                src={blog.adminAvatar ? blog.adminAvatar : noImage}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="mb-1 text-sm text-primary-400">
                {blog.adminName} - {blog.date.split("T")[0]}
              </div>
              <h2 className="mb-2 text-xl font-bold text-white">
                {blog.title}
              </h2>
              <p className="mb-2 text-accent-400">{blog.excerpt}</p>
              <div className="mb-2 flex items-center space-x-2">
                <span className="rounded bg-accent-600 px-2 py-1 text-white">
                  #didanblog
                </span>
              </div>
            </div>
            <div className="relative hidden aspect-video w-2/6 flex-shrink-0 md:block">
              <Image
                src={blog.coverImage ? blog.coverImage : noImage}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                loading="lazy"
                className="rounded-lg object-cover"
              />
            </div>
          </li>
        ))
      ) : (
        <NotFound message="There are no blogs here" />
      )}
      {/* <div className="container mx-auto mt-[30px] grid grid-cols-[1fr] gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog, index) => {
          return <BlogCard key={index} blog={blog} />;
        })}
      </div>
      <div className="block sm:hidden">
        <ButtonScrollTop />
      </div> */}
    </motion.div>
  );
}
