import { AnimatePresence } from "framer-motion";
import { useMutation } from "react-query";
import { Camera } from "../components/Camera";
import { Loading } from "../components/Loading";
import { getEntries } from "../api/axios";
import isMobile from "is-mobile";
import { useState } from "react";

export const Upload = ({
  onUploadDone,
}: {
  onUploadDone: (data: any, image: string) => void;
}) => {
  const { data, mutateAsync, isLoading } = useMutation({
    mutationFn: (image: string) => {
      function wait(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      }

      return wait(1000);
    },
    mutationKey: "upload-image",
  });

  const [imageUrl, setImage] = useState("");
  const _onCapture = async (image: string) => {
    await mutateAsync(image);
    onUploadDone(null, image);
  };
  if (isLoading) {
    return (
      <div>
        <img src={imageUrl} />
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="relative h-full flex flex-col bg-slate-50 text-gray-800">
      <AnimatePresence>
        <div className="absolute top-0 w-full h-full bg-transparent">
          <Camera onCapture={_onCapture} />
        </div>
      </AnimatePresence>
    </div>
  );
};
