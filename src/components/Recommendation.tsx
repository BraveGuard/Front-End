import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type {
  Recommendation as RecommendationType,
  Recommendations as RecommendationsType,
} from "../types/Recommendation";
import {
  faMapMarker,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export const Recommendations = ({
  recommendations,
}: {
  recommendations: RecommendationsType;
}) => {
  return (
    <div className="flex gap-1 w-auto">
      {recommendations.map((r) => {
        return (
          <div className="w-40 flex-shrink-0">
            <Recommendation recommendation={r}></Recommendation>
          </div>
        );
      })}
    </div>
  );
};

const Recommendation = ({
  recommendation: { src, name, contact, address },
}: {
  recommendation: RecommendationType;
}) => {
  return (
    <div className="w-full border rounded-xl p-3 flex flex-col gap-1">
      <img
        className="w-full aspect-square object-cover border rounded-xl"
        src={src}
      />
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FontAwesomeIcon color="orange" size="sm" icon={faStar} />
        ))}
      </div>
      <span className="text-base">{name}</span>
      {contact && (
        <div className="text-xs  flex items-center gap-1">
          <FontAwesomeIcon size="sm" icon={faPhone} /> {contact}
        </div>
      )}
      {address && (
        <div className="text-xs flex items-center gap-1">
          <FontAwesomeIcon size="sm" icon={faMapMarker} />
          {address}
        </div>
      )}
    </div>
  );
};
