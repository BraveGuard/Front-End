import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useCallback, useEffect } from "react";
export const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  const modalWrapperRef = React.useRef<HTMLDivElement>(null);

  const backDropHandler = useCallback((e: any) => {
    if (e.target && !modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", backDropHandler);
    });
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  return (
    <motion.div
      initial={{ background: "rgb(0 0 0,0.0)" }}
      exit={{ background: "rgb(0 0 0,0.0)" }}
      animate={{ background: "rgb(0 0 0,0.3)" }}
      transition={{ duration: 0.3 }}
      ref={modalWrapperRef}
      className="bg-gray-100 bg-opacity-10 flex items-center w-full h-full bg-transparent"
    >
      <motion.div
        layout
        className="h-max rounded-lg p-3 bg-white min-h-[200px] my-10  mx-3"
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
      >
        {/* <motion.div layout transition={{ duration: 1, type: "spring" }}> */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row-reverse">
            <button
              onClick={onClose}
              className="rounded-full w-6 h-6 bg-slate-100"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
          {children}
        </div>
      </motion.div>
      {/* </motion.div> */}
    </motion.div>
  );
};
