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
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed top-0 bg-primary-950 pointer-events-none"
        />
          {children}
      </div>
    </AnimatePresence>
  );
}
