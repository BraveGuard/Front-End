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
  recommendation: { src, name, type, contact, address },
}: {
  recommendation: RecommendationType;
}) => {
  return (
    <div className="w-full border rounded-xl p-3 flex flex-col gap-1">
      <img
        className="w-full aspect-square object-cover border rounded-xl"
        src={type == "taxi" ? TAXI_URL : (type == "workshop" ? WORKSHOPS : (RECOVERY))}
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

const TAXI_URL =
  "https://www.thoughtco.com/thmb/3TrAQ-Si8C-32jRl6GpN7vh60tw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-556712867-58e85b223df78c51620400d4.jpg";

const RECOVERY =
  "https://blog.fatberry.com/wp-content/uploads/2022/09/Feature-vehicle-towing-cost-980x653.jpg";

const WORKSHOPS = 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXd2CvdOuvyx4F-yAcqwX-mvk7aaIc-EJOQ&usqp=CAU";