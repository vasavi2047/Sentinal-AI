import axios from "axios";

const API = "https://sentinal-ai-backend.onrender.com/auth";

export const signupUser = async (user) => {
  const response = await axios.post(`${API}/signup`, user);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await axios.post(`${API}/login`, user);
  return response.data;
};