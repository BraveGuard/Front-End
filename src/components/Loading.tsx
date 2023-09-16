import { motion } from "framer-motion";
export const Loading = () => {
  return (
    <div className=" h-full flex relative items-center justify-center  bg-white">
      <div className="z-10 text-zinc-800 text-2xl font-semibold ">
        Searching
      </div>

      <motion.div
        initial={{ top: 274, left: 74, scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ top: 274, left: 74, scale: 0.7 }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          type: "spring",
        }}
        className=" w-60 h-60  absolute bg-sky-200 rounded-full blur-3xl"
      ></motion.div>
    </div>
  );
};
