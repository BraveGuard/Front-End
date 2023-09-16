import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type {
  Recommendation as RecommendationType,
  Recommendations as RecommendationsType,
} from "../types/Recommendation";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Recommendations = ({
  recommendations,
}: {
  recommendations: RecommendationsType;
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {recommendations.map((r) => {
        return <Recommendation recommendation={r}></Recommendation>;
      })}
    </div>
  );
};

const Recommendation = ({
  recommendation: { src, name, contact },
}: {
  recommendation: RecommendationType;
}) => {
  return (
    <div className="flex gap-2 rounded-lg rounded-tl-none bg-slate-200 py-2 px-2">
      <div className="w-10 h-10 bg-purple-200 rounded-full flex justify-center items-center">
        {src ? (
          <image href={src}></image>
        ) : (
          <span className="text-purple-700 text-lg font-bold">
            {name[0].toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <span>{name}</span>
        <div className="text-blue-500">
          <FontAwesomeIcon icon={faPhone} />
          <a className="ml-1" href={"tel:" + contact}>
            {contact}
          </a>
        </div>
      </div>
    </div>
  );
};
