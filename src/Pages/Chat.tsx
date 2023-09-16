import { useMutation, useQuery } from "react-query";
import { getEntries } from "../api/axios";

import { Bubble } from "../components/Bubble";
import { Message } from "../components/Message";
import { twMerge } from "tailwind-merge";
import { KeyboardEventHandler, useState } from "react";
import { Modal } from "../components/Modal";
import { Camera } from "../components/Camera";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faFile } from "@fortawesome/free-solid-svg-icons";
import { Recommendations } from "../components/Recommendation";
import { MessageType } from "../types/Message";
import { AnimatePresence } from "framer-motion";
import { Loading } from "../components/Loading";
import { Upload } from "./Upload";

const messages: MessageType[] = [
  {
    message: "I broke by car can yu helop me. long long help thats",
    type: "incoming",
  },

  {
    type: "recommendation",
    recommendation: [
      {
        name: "colorful name one two dadsga dsadsja",
        contact: "13322423",
      },
    ],
  },
];

export const Chat = () => {
  const [showCamera, setShowCamera] = useState(true);
  const [messageStream, setMessageStream] = useState(messages);
  const [query, setQuery] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: "entries",
    queryFn: getEntries,
  });

  const onUploadDone = (d: any, image: string) => {
    setShowCamera(false);
    setImageUrl(image);
    console.log(data);
  };

  const sendMessage = (query: string) => {
    //TODO:Send message
    setMessageStream((m) => [...m, { message: query, type: "outgoing" }]);
    setQuery("");
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == "Enter") {
      sendMessage(query);
    }
  };

  if (showCamera) {
    return <Upload onUploadDone={onUploadDone} />;
  }

  return (
    <div className="relative h-full flex flex-col bg-slate-50 text-gray-800">
      <div>{imageUrl ? <img src={imageUrl} /> : null}</div>
      <div className="flex-1 overflow-x-scroll flex flex-col gap-2 py-2 px-4">
        {messageStream.map((m, index) => {
          const isIncoming = m.type == "incoming" || m.type == "recommendation";
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
                <Recommendations recommendations={m.recommendation} />
              )}
            </div>
          );
        })}

        <div>{<Bubble />}</div>
      </div>
      <div className="items-center justify-self-end flex gap-2 justify-between px-2  bg-slate-200 rounded-t-md p-6 ">
        <input
          onChange={(e) => setQuery(e.currentTarget.value)}
          value={query}
          onKeyDown={onKeyDown}
          className="block w-full p-2 rounded-md"
          type="text"
        />
        {/* <input id="fileInput" type="file" className="hidden" />
        <label
          htmlFor="fileInput"
          className="cursor-pointer h-full flex items-center justify-center aspect-square rounded-md bg-white"
        >
          <FontAwesomeIcon icon={faFile} />
        </label>
        <button
          className="h-full aspect-square rounded-md bg-white"
          onClick={() => setShowCamera(true)}
        >
          <FontAwesomeIcon icon={faCamera} />
        </button> */}
      </div>
    </div>
  );
};
