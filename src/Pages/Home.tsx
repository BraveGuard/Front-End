import { useQuery } from "react-query";
import { getEntries } from "../api/axios";

export const Home = () => {
  const { data } = useQuery({
    queryKey: "entries",
    queryFn: getEntries,
  });
  return (
    <div className="text-black text-sm  h-screen w-[320px] flex flex-col px-2 py-2  mx-auto ">
      <div className=" bg-blue-200 h-full">
        <div>Hello World</div>
      </div>
    </div>
  );
};
