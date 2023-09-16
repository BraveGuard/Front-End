import { useMutation, useQuery } from "react-query";
import { getEntries } from "../api/axios";

import { Bubble } from "../components/Bubble";
import { Message } from "../components/Message";
import { twMerge } from "tailwind-merge";
import { KeyboardEventHandler, useRef, useState } from "react";
import { Modal } from "../components/Modal";
import { Camera } from "../components/Camera";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRightFromBracket,
  faCamera,
  faEllipsisVertical,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { Recommendations } from "../components/Recommendation";
import { MessageType } from "../types/Message";
import { AnimatePresence } from "framer-motion";
import { Loading } from "../components/Loading";
import { Upload } from "./Upload";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const messages: MessageType[] = [
  {
    message: "Here is the details about the item you scanned.",
    type: "incoming",
  },
  {
    message:
      "To provide you better answers, could you expain the accident in more detail to me?",
    type: "incoming",
  },

  {
    type: "recommendation",
    recommendation: [
      {
        name: "Zurich Taxi Service",
        src: "https://www.thoughtco.com/thmb/3TrAQ-Si8C-32jRl6GpN7vh60tw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-556712867-58e85b223df78c51620400d4.jpg",
        contact: "+49 13322423",
      },
      {
        name: "Zurich Taxi Service",
        src: "https://www.thoughtco.com/thmb/3TrAQ-Si8C-32jRl6GpN7vh60tw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-556712867-58e85b223df78c51620400d4.jpg",
        contact: "+49 13322423",
      },
      {
        name: "Zurich Taxi Service",
        src: "https://www.thoughtco.com/thmb/3TrAQ-Si8C-32jRl6GpN7vh60tw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-556712867-58e85b223df78c51620400d4.jpg",
        contact: "+49 13322423",
      },
    ],
  },
];

export const Chat = () => {
  const [showCamera, setShowCamera] = useState(true);
  const [displayClaim, setDisplayClaim] = useState(false);
  const [messageStream, setMessageStream] = useState(messages);
  const [query, setQuery] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  const ref_claim = useRef<HTMLDivElement>(null);

  const [imageUrl, setImageUrl] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: "entries",
    queryFn: getEntries,
    onSuccess: () => _scroll(),
  });

  const onUploadDone = (d: any, image: string) => {
    setShowCamera(false);
    setImageUrl(image);
    console.log(data);
  };

  const _scroll = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 300);
  };
  const sendMessage = (query: string) => {
    //TODO:Send message

    setMessageStream((m) => [...m, { message: query, type: "outgoing" }]);
    setQuery("");
    _scroll();
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == "Enter") {
      sendMessage(query);
    }
  };

  const enableClaim = () => {
    setDisplayClaim(true);
    setTimeout(() => {
      ref_claim.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 500);
  };
  if (showCamera) {
    return <Upload onUploadDone={onUploadDone} />;
  }

  return (
    <div className=" relative  h-full flex flex-col bg-slate-50 text-gray-800">
      <div className="flex-1 w-full flex-col flex gap-2 overflow-x-scroll ">
        <div className="w-full bg-black p-4 text-white h-auto rounded-b-xl">
          <div className="py-4 flex justify-between items-center">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Messages</span>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div>
            {imageUrl ? (
              <div className="w-full overflow-hidden rounded-lg aspect-video">
                <img className="w-full h-full object-cover" src={imageUrl} />
              </div>
            ) : null}
            <div className="pt-2"> Here is some information about your car</div>
          </div>
        </div>
        <div className="p-4 bg-slate-50 sticky top-0">
          <InfoBox description="aa" damageDetails="aa" model="Honda" />
        </div>
        <div ref={ref} className="flex flex-col gap-2 py-2 px-4">
          {messageStream.map((m, index) => {
            const isIncoming =
              m.type == "incoming" || m.type == "recommendation";
            return (
              <div
                key={index}
                className={twMerge(
                  !isIncoming && "self-end",
                  isIncoming && "self-start"
                )}
              >
                {m.type != "recommendation" ? (
                  <Message message={m.message} incoming={isIncoming}></Message>
                ) : (
                  <div className="w-[335px] overflow-scroll">
                    <div className="w-full">
                      <Recommendations recommendations={m.recommendation} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {isLoading && <div>{<Bubble />}</div>}
          <div ref={ref_claim}>{displayClaim && <CreatClaim />}</div>
        </div>
      </div>
      <div className="items-center justify-self-end flex gap-2 justify-between px-2  bg-slate-200 rounded-t-md p-6 ">
        <input
          placeholder="Type your query here"
          onChange={(e) => setQuery(e.currentTarget.value)}
          value={query}
          onKeyDown={onKeyDown}
          className={twMerge(
            "block w-full p-2 h-12 rounded-md",
            displayClaim && "invisible"
          )}
          type="text"
        />
        <button
          onClick={enableClaim}
          className=" flex text-white bg-gray-700 items-center justify-center rounded-md h-full aspect-square"
        >
          <FontAwesomeIcon size="xl" icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
};

const InfoBox = ({
  description,
  damageDetails,
  model,
}: {
  description: string;
  damageDetails: string;
  model: string;
}) => {
  return (
    <div className="flex flex-col rounded-lg w-full p-4 gap-2 bg-[#A9DBF8]">
      <div className="flex flex-row-reverse items-center gap-2">
        <FontAwesomeIcon icon={faEllipsisVertical} />
        <span className="text-xs text-black-400">edit</span>
      </div>
      <div className="text-white">
        <div>
          Image Description: <span>{description}</span>
        </div>
        <div>
          Damage Details: <span>{damageDetails}</span>
        </div>
        <div>
          Car Model: <span>{model}</span>
        </div>
      </div>
      <div className="self-end font-semibold text-right">
        <div className=" flex items-center gap-1">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <div>Active Policy: MP.500.002</div>
        </div>
        <div className="">Motor Vehicle Insurance</div>
      </div>
    </div>
  );
};

const CreatClaim = () => {
  return (
    <div className="mt-[50%] mb-[50%]  ring-gray-200 ring-1 gap-4 flex flex-col rounded-xl p-4 shadow-xl">
      <div>
        Would you like to create a claim out of the information you submitted ?
      </div>
      <div className="w-full text-center flex gap-4 justify-between">
        <button className="flex-1 rounded-md px-3 py-2 bg-green-600 text-white">
          Create Claim
        </button>
        <Link
          to="/home"
          className="flex-1 rounded-md px-3 py-2 bg-black text-white"
        >
          Exit
        </Link>
      </div>
    </div>
  );
};
