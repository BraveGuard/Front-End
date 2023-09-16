import { api } from "./axios";

const ZurichAddr = {
  lat: "",
  long: "",
};

export type LocalSuggestionResponse = {
  type: "car_rentals" | "taxi";
  name: string;
  location: { lat: number; lng: number };
};

export const getLocalSuggestions = async () => {
  return (
    await api.get("nearby-services", {
      params: {
        lat: 8.5373686,
        lng: 47.4117194,
      },
    })
  ).data as LocalSuggestionResponse[];
};
