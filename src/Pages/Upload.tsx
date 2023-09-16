import { AnimatePresence } from "framer-motion";
import { useMutation } from "react-query";
import { Camera } from "../components/Camera";
import { Loading } from "../components/Loading";
import { UploadResponse, getEntries, uploadImage } from "../api/axios";
import isMobile from "is-mobile";
import { useState } from "react";

export const Upload = ({
  onUploadDone,
}: {
  onUploadDone: (data: UploadResponse, image: string) => void;
}) => {
  const { data, isError, mutateAsync, isLoading } = useMutation({
    mutationFn: (file: File) => {
      return uploadImage(file);
    },
    mutationKey: "upload-image",
    onError: () => {},
  });

  const _onCapture = async (file: File | null, image: string) => {
    if (file) {
      const res = await mutateAsync(file);
      res && onUploadDone(res, image);
    }
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="relative h-full flex flex-col bg-slate-50 text-gray-800">
      {!!isError && (
        <div className="bg-orange-700 text-white p-3">
          could not identify image. Please try again later
        </div>
      )}
      <AnimatePresence>
        <div className="absolute top-0 w-full h-full bg-transparent">
          <Camera onCapture={_onCapture} />
        </div>
      </AnimatePresence>
    </div>
  );
};
