import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

export default apiInstance;