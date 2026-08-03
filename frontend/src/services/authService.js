import axios from "axios";

const API = "http://127.0.0.1:8000/auth";

export const signupUser = async (user) => {
  const response = await axios.post(`${API}/signup`, user);
  return response.data;
};

export const loginUser = async (user) => {
  const response = await axios.post(`${API}/login`, user);
  return response.data;
};