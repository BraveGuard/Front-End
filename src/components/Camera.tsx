import isMobile from "is-mobile";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

export const Camera = ({
  onCapture,
}: {
  onCapture: (image: string) => void;
}) => {
  const n = useNavigate();
  const webcamRef = React.useRef<Webcam>(null);
  const mobile = isMobile();
  const [facing, setFacing] = useState<"environment" | undefined>(
    mobile ? "environment" : undefined
  );
  const _onCapture = () => {
    const res = webcamRef.current?.getScreenshot({ width: 900, height: 1200 });
    console.log(res);
    res && onCapture(res);
  };

  const flipFacing = () => {
    setFacing((f) => (f === "environment" ? undefined : "environment"));
  };
  const _onGoBack = () => {
    n("/home");
  };

  return (
    <div className="flex h-full flex-col w-full items-center gap-4 bg-black">
      <div className="flex-1">
        <Webcam
          videoConstraints={
            facing
              ? { height: 1200, width: 900, facingMode: { exact: facing } }
              : undefined
          }
          height={1200}
          width={900}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      </div>
      <div className="w-full">
        <Tabs
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
}: {
  onBackPress: () => void;
  onClickPress: () => void;
  onRetakePress: () => void;
}) => {
  return (
    <div className="h-[100px] flex w-full py-2  px-10 pb-4 items-center justify-between bg-[#2D2C2C] rounded-t-md">
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
        className="bg-[#363E51] flex items-center justify-center rounded-md shadow-md"
        onClick={onClickPress}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="35"
          viewBox="0 0 44 35"
          fill="none"
        >
          <rect
            x="0.264374"
            y="0.0665283"
            width="42.8652"
            height="34.0513"
            rx="10"
            fill="#AFB2B9"
          />
          <rect
            x="3.17049"
            y="2.24002"
            width="37.0529"
            height="29.7043"
            rx="10"
            fill="#2D2C2C"
          />
          <rect
            x="9.70924"
            y="15.2809"
            width="23.2489"
            height="3.62248"
            rx="1.81124"
            fill="#4D94FF"
          />
          <rect
            width="2.31363"
            height="12.6374"
            transform="matrix(0.0135278 0.999908 -0.99991 0.0134523 27.7329 0)"
            fill="#2D2C2C"
          />
          <rect
            width="4.6904"
            height="12.6374"
            transform="matrix(0.0135278 0.999908 -0.99991 0.0134523 28.1256 29.5678)"
            fill="#2D2C2C"
          />
          <rect
            width="4.6904"
            height="3.91369"
            transform="matrix(0.0135278 0.999908 -0.99991 0.0134523 3.91333 14.6089)"
            fill="#2D2C2C"
          />
          <rect
            width="4.6904"
            height="3.91369"
            transform="matrix(0.0135278 0.999908 -0.99991 0.0134523 43.4102 14.5565)"
            fill="#2D2C2C"
          />
          <rect
            x="20"
            y="27"
            width="19"
            height="3"
            rx="1.5"
            transform="rotate(-90 20 27)"
            fill="#4D94FF"
          />
        </svg>
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
