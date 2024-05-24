"use client";
import { AnimatePresence, motion } from "framer-motion";
import Cover from "./Cover";
import { usePathname } from "next/navigation";
export default function CoverTransition() {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen top-0 right-0 left-0 fixed pointer-events-none z-40 flex">
            <Cover />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}
