import { motion } from "framer-motion";

const variants = {
  initial: {
    left: "0%",
  },
  animate: {
    left: "100%",
  },
  exit: {
    left: ["100%", "0%"],
  },
};

const reverse = (index: number): number => {
  const totalStep: number = 6;
  return totalStep - index - 1;
};

export default function Cover() {
  return (
    <>
      {/* {[...Array(5)].map((_, index) => {
        return ( */}
      <motion.div
        // key={index}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.4,
          ease: "linear",
          delay: 0.05,
        }}
        className="relative h-full w-full bg-gradient-to-r from-primary-950 via-primary-800 to-primary-700 left-0"
      />
      {/* );
      })} */}
    </>
  );
}
