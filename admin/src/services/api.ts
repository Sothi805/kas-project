// src/services/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,});

// Hardcoded mock user
const MOCK_USER = {
  id: 1,
  username: "admin",
  name: "Admin User",
};

// Hardcoded credentials
const VALID_USERNAME = "";
const VALID_PASSWORD = "";

// Mock authentication endpoints
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Override axios to handle mock endpoints
const originalGet = api.get.bind(api);
api.get = function(url: string, ...args: any[]) {
  if (url === "/me") {
    const token = localStorage.getItem("authToken");
    if (token) {
      return Promise.resolve({ data: MOCK_USER });
    }
    return Promise.reject({ response: { status: 401 } });
  }
  return originalGet(url, ...args);
} as typeof api.get;

const originalPost = api.post.bind(api);
api.post = function(url: string, data: any, ...args: any[]) {
  if (url === "/login") {
    const { username, password } = data as { username: string; password: string };
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      const token = "mock-jwt-token-" + Date.now();
      localStorage.setItem("authToken", token);
      return Promise.resolve({ data: { user: MOCK_USER, token } });
    }
    return Promise.reject({ response: { status: 401, data: { message: "Invalid credentials" } } });
  }
  return originalPost(url, data, ...args);
} as typeof api.post;

export const logout = () => {
  localStorage.removeItem("authToken");
};
