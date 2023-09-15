import { useQuery } from "react-query";
import { getEntries } from "../api/axios";

import { Bubble } from "../components/Bubble";
export const Chat = () => {
  const { data } = useQuery({
    queryKey: "entries",
    queryFn: getEntries,
  });
  return (
    <div className="h-full bg-blue-100">
      <div>Home Page</div>
      <Bubble></Bubble>
    </div>
  );
};
