import { twMerge } from "tailwind-merge";

export const Message = ({
  message,
  incoming = false,
}: {
  message: string;
  incoming?: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "py-2 px-2 rounded-lg ",
        incoming && " bg-slate-200  rounded-tl-none",
        !incoming && "bg-blue-200 rounded-tr-none"
      )}
    >
      {message}
    </div>
  );
};
