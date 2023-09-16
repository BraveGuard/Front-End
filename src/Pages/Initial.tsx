import { Link } from "react-router-dom";

export const Landing = ({ onGoNext }: { onGoNext?: () => void }) => {
  return (
    <div className="h-full bg-red-200">
      <Link to="/home">Next</Link>
    </div>
  );
};
