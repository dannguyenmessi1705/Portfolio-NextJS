"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "@/public/assets/avatar.png";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className=" h-[198px] w-[198px] xl:w-[398px] xl:h-[398px] mix-blend-lighten absolute m-auto left-0 right-0">
          <Image
            src={avatar}
            alt="avatar"
            placeholder="blur"
            priority
            fill
            className="object-contain"
          />
        </div>

        <motion.svg
          className="w-[235px] h-[235px] xl:w-[465px] xl:h-[465px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="255"
            cy="250"
            r="250"
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
