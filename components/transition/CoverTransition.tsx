"use client";
import { AnimatePresence, motion } from "framer-motion";
import Cover from "./Cover";
import { usePathname } from "next/navigation";
export default function CoverTransition({children}: {children: React.ReactNode}) {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathName}>
          <motion.div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen">
            <Cover />
          </motion.div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
            }}
            className="pointer-events-none fixed top-0 h-screen w-screen bg-primary-950"
          />
        </motion.div>
        {children}
      </AnimatePresence>
    </>
  );
}
