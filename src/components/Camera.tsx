import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Webcam from "react-webcam";

export const Camera = ({
  onCapture,
}: {
  onCapture: (image: string) => void;
}) => {
  const webcamRef = React.useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [facing, setFacing] = useState<"environment" | undefined>(undefined);
  const _onCapture = () => {
    const res = webcamRef.current?.getScreenshot({ width: 900, height: 1200 });
    console.log(res);
  };

  const flipFacing = () => {
    setFacing((f) => (f === "environment" ? undefined : "environment"));
  };

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div>
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
      <div className="flex w-full">
        <button className="flex-1" onClick={flipFacing}>
          <FontAwesomeIcon icon={faCameraRotate} />
        </button>
        <div className="flex-1"></div>
        <div className="w-8 h-8 rounded-full bg-transparent border-2 border-blue-300 flex items-center justify-center">
          <button
            className=" w-6 h-6 rounded-full bg-blue-300"
            onClick={_onCapture}
          ></button>
        </div>
        <div className="flex-1"></div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
};
