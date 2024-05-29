"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import InfoContact from "@/components/contact/InfoContact";

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
      className="mb-4 py-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[60%]">{children}</div>

          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <InfoContact />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
