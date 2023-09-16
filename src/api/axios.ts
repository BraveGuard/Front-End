import baseAxios from "axios";

const API_URL = "https://catfact.ninja";

export const api = baseAxios.create({
  baseURL: API_URL,
  timeout: 1000,
  withCredentials: false,
  headers: { "X-Frontend": true, "Access-Control-Allow-Origin": true },
});

export async function getEntries() {
  setTimeout(() => {
    Promise.resolve();
  }, 5000);
}
