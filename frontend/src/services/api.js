import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------------- Message Scan ----------------
export const scanMessage = async (message) => {
  const response = await api.post("/scan/message", {
    message,
  });

  return response.data;
};

// ---------------- URL Scan ----------------
export const scanURL = async (url) => {
  const response = await api.post("/scan/url", {
    url,
  });

  return response.data;
};

// ---------------- Image Scan ----------------
export const scanImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/scan/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// ---------------- Voice Scan ----------------
export const scanVoice = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/scan/voice", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export default api;