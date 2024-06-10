"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function ProjectSekeleton() {
  return (
    <section
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      // }}
      className="flex min-h-[70vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex h-[480px] w-full flex-col xl:order-none xl:h-[420px] xl:w-[50%] xl:justify-between">
            <div className="flex h-3/4 flex-col gap-[30px]">
              <Skeleton className="h-[50px] w-4/5" />

              <Skeleton className="h-[180px] w-3/4 flex-1" />

              <Skeleton className="mb-2 h-[30px] w-[100px] xl:mb-0" />
            </div>
            <div className="mb-2 border border-primary-800 xl:mb-0"></div>
            <Skeleton className="mt-2 h-[30px] w-[150px] xl:mt-0" />
          </div>

          <div className="xl-h-[420px] w-full xl:w-[50%]">
            <Skeleton className="mb-12 h-[220px] sm:h-[360px] md:h-[480px] xl:h-5/6" />
          </div>
        </div>
      </div>
    </section>
  );
}
