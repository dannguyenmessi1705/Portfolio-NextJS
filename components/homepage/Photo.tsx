"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "@/public/assets/avatar.webp";

export default function Photo() {
  return (
    <div className="relative h-full w-full rounded-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="absolute left-0 right-0 m-auto h-[198px] w-[198px] overflow-hidden rounded-full mix-blend-lighten xl:h-[398px] xl:w-[398px]">
          <Image
            src={avatar}
            alt="avatar"
            placeholder="blur"
            fill
            priority
            quality={10}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="pointer-events-none object-contain"
          />
        </div>

        <motion.svg
          className="h-[220px] w-[220px] xl:h-[430px] xl:w-[430px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="255"
            cy="250"
            r="248"
            stroke="#B78343"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
