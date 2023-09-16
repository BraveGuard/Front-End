import { LocalSuggestionResponse } from "../api/getLocalSuggestions";

export type Recommendation = {
  src?: string;
  name: string;
  contact?: string;
  address?: string;
  type: LocalSuggestionResponse["type"];
};

export type Recommendations = Recommendation[];
