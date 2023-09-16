import { RingCheck } from "../components/Ring";

const policies = [
  {
    title: "This is a cool one policy long dasa daskjdbsajhdbsa",
    expired: false,
    number: "CP1",
  },
  {
    title: " This is another one aiaada",
    expired: true,
    number: "CP2",
  },
  {
    title: "dafhsakja dsadhksja ",
    expired: true,
    number: "CP3",
  },
];

export const Policies = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-md font-bold ">Active Policies</span>
        <span className=" text-[#72D8D2]">details</span>
      </div>
      {policies
        .filter((p) => !p.expired)
        .map((p) => (
          <Policy {...p} />
        ))}

      <div className="flex justify-between">
        <span className="text-md font-bold ">Expired Policies</span>
        <span className=" text-[#72D8D2]">details</span>
      </div>
      {policies
        .filter((p) => p.expired)
        .map((p) => (
          <Policy {...p} />
        ))}
    </div>
  );
};

const Policy = ({
  title = "",
  expired = false,
  number = "",
}: {
  title?: string;
  expired: boolean;
  number: string;
}) => {
  return (
    <div className="py-2 px-2 flex gap-2 shadow-md	 ring-1 ring-gray-300 ring-opacity-40 bg-white rounded-md">
      <div className="w-10 h-10 ">
        <RingCheck checked={!expired} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="text-lg">{title}</span>
          {!expired && (
            <div className=" text-xs flex items-center gap-2">
              <span>Active</span>
              <div className="w-3 h-3 rounded-full  bg-green-500"></div>
            </div>
          )}
        </div>
        <div className=" text-xs flex justify-between">
          <span>Policy Nr: </span>
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
};
