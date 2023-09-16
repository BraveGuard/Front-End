import React from "react";
import Webcam from "react-webcam";

export const Camera = ({
  onCapture,
}: {
  onCapture: (image: string) => void;
}) => {
  const webcamRef = React.useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const _onCapture = () => {
    const res = webcamRef.current?.getScreenshot({ width: 1080, height: 1920 });
    console.log(res);
  };
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div>
        <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      </div>
      <div className="w-8 h-8 rounded-full bg-transparent border-2 border-white flex flex-col items-center justify-center">
        <button
          className="w-6 h-6 rounded-full bg-white"
          onClick={_onCapture}
        ></button>
      </div>
    </div>
  );
};
