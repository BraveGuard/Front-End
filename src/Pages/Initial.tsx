import { motion } from "framer-motion";
export const Landing = ({ onGoNext }: { onGoNext: () => void }) => {
  return (
    <div className="h-full bg-red-200">
      Landing Page
      <button onClick={onGoNext}>Next</button>
    </div>
  );
};
