import { AnimatePresence } from "framer-motion";
import { useMutation } from "react-query";
import { Camera } from "../components/Camera";
import { Loading } from "../components/Loading";
import { getEntries } from "../api/axios";
import isMobile from "is-mobile";

export const Upload = ({
  onUploadDone,
}: {
  onUploadDone: (data: any, image: string) => void;
}) => {
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (d) => {
      function wait(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      }
      return wait(5000);
    },
    mutationKey: "upload-image",
  });

  const _onCapture = async (image: string) => {
    await mutateAsync();
    onUploadDone(null, image);
  };
  if (isLoading) {
    return <Loading></Loading>;
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
