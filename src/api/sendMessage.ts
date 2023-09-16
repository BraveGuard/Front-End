import { MessageType } from "../types/Message";
import { UploadResponse, api } from "./axios";
import { getLocalSuggestions } from "./getLocalSuggestions";

function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function checkCoverage(req: {
  fireDamage: boolean;
  glassDamage: boolean;
  panelDamage: boolean;
}): Promise<{
  fireDamage: boolean;
  glassDamage: boolean;
  panelDamage: boolean;
}> {
  const res = await api.post("/policy-parsing", {
    ...req,
  });

  if (res.status == 200) {
    return res.data;
  }
  throw "error in api";
}

export const sendMessage = async (
  message: string,
  context: UploadResponse | null
): Promise<MessageType> => {
  const coverageCheck = message.toLowerCase().includes("am i covered");
  const recommend = message.toLowerCase().includes("recommend");

  if (recommend) {
    try {
      const res = await getLocalSuggestions();

      return {
        type: "recommendation",
        recommendation: res.map((r) => ({ type: r.type, name: r.name })),
      };
    } catch {}
  }
  if (coverageCheck && context) {
    try {
      const { fireDamage, panelDamage, glassDamage } = context;
      const res = await checkCoverage({ fireDamage, panelDamage, glassDamage });
      const coverage = [
        res.fireDamage && "fire damage",
        res.glassDamage && "glass damage",
        res.panelDamage && "panel damange",
      ]
        .filter((t) => t)
        .join(",");
      const response =
        "Your insurance cover " + (coverage ? "s" + coverage : "is uncertain.");
      return {
        message: response,
        type: "incoming",
      } as const;
    } catch {}
  }
  return {
    message:
      "Sorry, we cannot process your data at the moment. Please try again later.",
    type: "incoming",
  } as const;
};
