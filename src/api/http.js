import axios from "axios";
import { API_URL } from "utils/constants";

// Create an Axios instance
const http = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
