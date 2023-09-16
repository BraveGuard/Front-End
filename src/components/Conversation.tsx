import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import { RingCheck } from "./Ring";

type ConversationProps = {
  type: "vehicle" | "travel";
  date: Date;
  title: string;
};

export const Conversation = ({ date, type, title }: ConversationProps) => {
  return (
    <div
      className={twMerge(
        "text-white relative rounded-md w-full min-h-[30px] py-2 px-4",
        type == "vehicle" && colors.vehicle,
        type == "travel" && colors.travel
      )}
    >
      <div className="flex flex-col gap-2 ">
        <span className="text-lg">Previous Conversation</span>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 ">
            <RingCheck plain />
          </div>
          <div className="flex flex-col gap-2 ">
            <span>{title}</span>
            <div className="flex gap-1 items-center opacity-[60%]">
              <FontAwesomeIcon icon={faClock} />
              {date.toISOString()}
            </div>
          </div>
        </div>
        <div>
          <button className=" bg-white text-black inline-block px-4 py-2 rounded-md">
            Visit the conversation
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-[-20px]">
        <Artwork type={type} />
      </div>
    </div>
  );
};

const colors = {
  vehicle: "bg-[#00A2FF6E]",
  travel: "bg-[#9BE0DC]",
};

const Artwork = ({ type }: { type: "vehicle" | "travel" }) => {
  if (type == "travel") {
    return (
      <svg
        width="115"
        height="95"
        viewBox="0 0 115 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Car">
          <path
            id="Vector"
            d="M19.5 33.9286H22.75L44.8459 5.09353C46.0642 3.50436 47.6091 2.22149 49.3664 1.33982C51.1237 0.458155 53.0484 0.000254485 54.9981 0H98.4486C103.764 0 108.544 3.37801 110.518 8.53092L120.25 34.4078C125.848 35.9219 130 41.1829 130 47.5V71.25C130 73.1245 128.546 74.6429 126.75 74.6429H117C117 85.8859 108.27 95 97.5 95C86.7303 95 78 85.8859 78 74.6429H52C52 85.8859 43.2697 95 32.5 95C21.7303 95 13 85.8859 13 74.6429H3.24999C1.45438 74.6429 0 73.1245 0 71.25V54.2857C0 43.0426 8.73031 33.9286 19.5 33.9286ZM97.5 84.8214C102.877 84.8214 107.25 80.2559 107.25 74.6429C107.25 69.0298 102.877 64.4643 97.5 64.4643C92.1233 64.4643 87.75 69.0298 87.75 74.6429C87.75 80.2559 92.1233 84.8214 97.5 84.8214ZM82.875 33.9286H106.249L98.4486 13.5714H82.875V33.9286ZM73.125 33.9286V13.5714H54.9981L39.3981 33.9286H73.125ZM32.5 84.8214C37.8767 84.8214 42.25 80.2559 42.25 74.6429C42.25 69.0298 37.8767 64.4643 32.5 64.4643C27.1233 64.4643 22.75 69.0298 22.75 74.6429C22.75 80.2559 27.1233 84.8214 32.5 84.8214Z"
            fill="white"
            fill-opacity="0.25"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      width="126"
      height="115"
      viewBox="0 0 126 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="jam:plane-f">
        <path
          id="Vector"
          d="M80.4976 68.2034L60.3204 82.678L63.4173 94.1395L48.824 105.908L34.1193 87.361L11.1208 75.5022L25.7141 63.7333L40.7004 66.8553L57.8686 49.9541L21.6727 30.4938L38.2603 17.1119L83.5183 29.2828L105.766 11.3409C112.635 5.79706 123.275 5.39026 129.521 10.428C135.768 15.4657 135.258 24.0417 128.389 29.5856L106.141 47.5274L121.222 84.012L104.634 97.3939L80.5035 68.2034H80.4976Z"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
    </svg>
  );
};
