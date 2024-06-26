"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import NavbarProject from "./NavbarProject";

import { type Category } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsSkeleton() {
  const [active, setActive] = useState<Category | "all">("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setActive(category);
      return;
    }
    setActive(category);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 1, ease: "easeIn" },
      }}
      className="h-full w-full"
    >
      <div className="mb-6 flex justify-center">
        <NavbarProject
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
      </div>
      <div className="relative my-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="mb-4 xl:mb-0">
            <Skeleton className="h-[200px]" />
            <Skeleton className="mt-3 h-[30px]" />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
