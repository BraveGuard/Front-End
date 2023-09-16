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
        src={type == "car_rentals" ? CAR_RENTALS : TAXI_URL}
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

const CAR_RENTALS =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww&w=1000&q=80";
