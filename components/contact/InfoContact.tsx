"use client";
import { slideInFromRight } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { type ReactNode } from "react";
type Info = {
  icon: ReactNode;
  title: string;
  description: string;
};
const info: Info[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 345 221 946",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "didannguyen17@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Ha Dong, Hanoi, Vietnam",
  },
];
export default function InfoContact() {
  return (
    <motion.ul
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col gap-10"
    >
      {info.map((item, index) => {
        return (
          <li key={index} className="flex items-center gap-6">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-primary-900 text-accent-600 xl:h-[72px] xl:w-[72px]">
              <div className="text-3xl">{item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-primary-50">{item.title}</p>
              <h3 className="text-xl">{item.description}</h3>
            </div>
          </li>
        );
      })}
    </motion.ul>
  );
}
