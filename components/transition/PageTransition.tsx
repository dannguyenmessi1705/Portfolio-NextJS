"use client";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: ReactNode;
};
export default function PageTransition({ children }: Props) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
          }}
          className="pointer-events-none fixed top-0 h-screen w-screen bg-primary-950"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
