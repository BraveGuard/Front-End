import { faCamera, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isMobile from "is-mobile";
import React, { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

function base64ToImageFile(base64String: string) {
  const base64Data = base64String.replace(/^data:[^;]+;base64,/, "");

  const binaryData = atob(base64Data);
  const arrayBuffer = new ArrayBuffer(binaryData.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  const blob = new Blob([uint8Array], { type: "application/octet-stream" });
  const file = new File([blob], "image.png", { type: "image/png" });
  return file;
}

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const Camera = ({
  onCapture,
}: {
  onCapture: (file: File | null, image: string) => void;
}) => {
  const n = useNavigate();
  const webcamRef = React.useRef<Webcam>(null);
  const mobile = isMobile();
  const [url, setUrl] = useState("");
  const [facing, setFacing] = useState<"environment" | undefined>(
    mobile ? "environment" : undefined
  );
  const _onCapture = () => {
    const res = webcamRef.current?.getScreenshot({ width: 1600, height: 1600 });
    res && setUrl(res);
    setTimeout(() => {
      const file = res ? base64ToImageFile(res) : null;
      res && onCapture(file, res);
    }, 1500);
  };

  const flipFacing = () => {
    setFacing((f) => (f === "environment" ? undefined : "environment"));
  };

  const onFilePick: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const res: string = (await toBase64(file)) as string;
      onCapture(file, res);
    }
  };
  const _onGoBack = () => {
    n("/home");
  };

  return (
    <div className="flex h-full justify-center flex-col w-full items-center gap-4 bg-black">
      <div className="flex-1 flex-col gap-6 flex items-center justify-center ">
        {url ? (
          <img src={url} />
        ) : (
          <Webcam
            videoConstraints={
              facing
                ? { height: 1600, width: 1600, facingMode: { exact: facing } }
                : { height: 1600, width: 1600, facingMode: "" }
            }
            height={1600}
            width={1600}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        )}

        <div className={url ? "invisible" : undefined}>
          <input
            multiple={false}
            onChange={(f) => onFilePick(f)}
            accept="image/png, image/jpeg"
            id="fileInput"
            type="file"
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="p-2 cursor-pointer h-full flex items-center justify-center  rounded-md bg-white"
          >
            or select a File
          </label>
        </div>
      </div>

      <div className="w-full">
        <Tabs
          tick={!!url}
          onBackPress={_onGoBack}
          onClickPress={_onCapture}
          onRetakePress={() => {}}
        ></Tabs>
      </div>
    </div>
  );
};

const Tabs = ({
  onBackPress,
  onClickPress,
  onRetakePress,
  tick = false,
}: {
  onBackPress: () => void;
  onClickPress: () => void;
  tick?: boolean;
  onRetakePress: () => void;
}) => {
  return (
    <div className="h-[80px] flex w-full py-2  px-10 pb-4 items-center justify-between bg-[#2D2C2C] rounded-t-md">
      <button
        className=" w-8 h-8 bg-[#363E51] flex items-center justify-center rounded-md shadow-md"
        onClick={onBackPress}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.30002 5.99999L6.80002 2.49999C7.20003 2.09999 7.20003 1.49999 6.80002 1.09999C6.40002 0.699988 5.80002 0.699988 5.40002 1.09999L1.20002 5.29999C0.800024 5.69999 0.800024 6.29999 1.20002 6.69999L5.40002 10.9C5.60002 11.1 5.80002 11.2 6.10003 11.2C6.40003 11.2 6.60003 11.1 6.80002 10.9C7.20003 10.5 7.20003 9.89999 6.80002 9.49999L3.30002 5.99999Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        className=" text-white flex items-center justify-center rounded-md shadow-md"
        onClick={onClickPress}
      >
        <FontAwesomeIcon size={"2xl"} icon={tick ? faCheck : faCamera} />
      </button>

      <button
        className="w-8 h-8 bg-[#363E51] flex items-center justify-center rounded-md shadow-md"
        onClick={onRetakePress}
      >
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6.33337H5L1 2.33337V6.33337Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.38733 17.4761C2.62977 19.3893 4.45283 20.8538 6.58889 21.6546C8.72494 22.4553 11.0614 22.5502 13.2554 21.9252C15.4493 21.3003 17.3851 19.9884 18.7786 18.1823C20.172 16.3761 20.9497 14.1708 20.9975 11.8901C21.0453 9.60934 20.3606 7.37338 19.044 5.51045C17.7274 3.64752 15.8482 2.25574 13.6824 1.53946C11.5166 0.823177 9.17813 0.820117 7.01042 1.53073C4.84271 2.24134 2.95991 3.62819 1.63845 5.48767"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3333 6.33337V11.6667L15.6666 17"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
