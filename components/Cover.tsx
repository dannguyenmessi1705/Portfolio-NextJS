import { motion } from "framer-motion";

const variants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverse = (index: number): number => {
  const totalStep: number = 6;
  return totalStep - index - 1;
};

export default function Cover() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            // key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "linear",
              delay: reverse(index) * 0.1,
            }}
            className="relative w-full h-full bg-primary-50"
          />
         );
      })}
    </>
  );
}
