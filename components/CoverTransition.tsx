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
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed top-0 bg-primary-950 pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  );
}
