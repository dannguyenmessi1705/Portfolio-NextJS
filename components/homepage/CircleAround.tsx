"use client";
import { motion } from "framer-motion";

export default function CircleAround() {
  return (
    <motion.svg
      className="h-[210px] w-[210px] xl:h-[390px] xl:w-[390px]"
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
  );
}
