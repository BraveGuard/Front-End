import { Recommendations } from "./Recommendation";

export type MessageType =
  | {
      message: string;
      type: "incoming";
    }
  | {
      recommendation: Recommendations;
      type: "recommendation";
    }
  | {
      message: string;
      type: "outgoing";
    };
