import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://media-content.ccbp.in/website/react-assignment/",
  // timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

export default apiInstance;
