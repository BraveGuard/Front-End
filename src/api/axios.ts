import baseAxios from "axios";

// Back end server is up. I cannot make it secure because it doesn't have a domain name http://34.65.222.41/nearby-services?lat=8.5373686&lng=47.4117194

const API_URL = process.env.API_URL
  ? process.env.API_URL
  : "http://34.65.222.41";

export const api = baseAxios.create({
  baseURL: API_URL,
  timeout: 40000,
  maxContentLength: 100000000,
  maxBodyLength: 1000000000,
  withCredentials: false,
  headers: { "X-Frontend": true, "Access-Control-Allow-Origin": true },
});

export async function getEntries() {
  setTimeout(() => {
    Promise.resolve();
  }, 5000);
}

export type UploadResponse = {
  fireDamage: boolean;
  glassDamage: boolean;
  panelDamage: boolean;
  vehicleDescription: string;
};

export async function uploadImage(image: File) {
  const formData = new FormData();
  formData.append("image", image);

  const res = await api.post("/image-handling/", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Important for a file upload
    },
  });

  if (res.status == 200) {
    return res.data as UploadResponse;
  }
  if ((res.status = 422)) {
    return null;
  }
}
