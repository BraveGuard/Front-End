import { motion } from "framer-motion";
import { Camera } from "../components/Camera";
export const Landing = ({ onGoNext }: { onGoNext: () => void }) => {
  const onCapture = () => {};
  return (
    <div className="h-full bg-red-200">
      Landing Page
      <Camera onCapture={onCapture}></Camera>
      <button onClick={onGoNext}>Next</button>
    </div>
  );
};
