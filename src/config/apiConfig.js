import axios from "axios";

export const API_BASE_URL = "https://e-commerce-8uqv.onrender.com/";

// export const API_BASE_URL = "http://localhost:5454/";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to dynamically set the Authorization header
api.interceptors.request.use(
  (config) => {
    const jwt = localStorage.getItem("jwt"); // Get the latest token
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
