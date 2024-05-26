"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectValue,
} from "./ui/select";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import InfoContact from "./InfoContact";

type Props = {
  children: ReactNode;
};
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
export default function Contact({ children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">{children}</div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <InfoContact />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
