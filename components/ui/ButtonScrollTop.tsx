"use client";
import {
  Variants,
  useAnimationControls,
  useScroll,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const isBrowser = () => typeof window !== "undefined";

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export default function ButtonScrollTop({
  bottomTop = "bottom-0",
}: {
  bottomTop?: string;
}) {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.2) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className={`fixed ${bottomTop} right-0 m-10 rounded-full bg-accent-600 p-4 text-[24px] text-primary-950 transition-all duration-300 hover:bg-accent-700 z-50`}
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </motion.button>
  );
}
