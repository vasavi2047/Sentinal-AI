import api from "./api";

// ---------------- Message ----------------

export const scanMessage = async (message) => {
  const response = await api.post("/scan/message", {
    message,
  });

  return response.data;
};

// ---------------- URL ----------------

export const scanURL = async (url) => {
  const response = await api.post("/scan/url", {
    url,
  });

  return response.data;
};

// ---------------- Image ----------------

export const scanImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/scan/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

// ---------------- Voice ----------------

export const scanVoice = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/scan/voice",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};