"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import InfoContact from "./InfoContact";

type Props = {
  children: ReactNode;
};

export default function Contact({ children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="py-2 mb-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[60%] order-2 xl:order-none">{children}</div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <InfoContact />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
