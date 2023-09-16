import { Variants, motion } from "framer-motion";

export const Bubble = () => {
  return (
    <motion.div
      className="py-2 px-2 inline-flex gap-1 bg-slate-100 overflow-hidden rounded-md items-center"
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ repeat: Infinity }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={index}
          //   transition={{ repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-black"
          variants={item}
        />
      ))}
    </motion.div>
  );
};

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      repeat: Infinity,
      //   repeatDelay: 0.1,
      repeatType: "reverse",
      duration: 0.5,
    },
  },
};
