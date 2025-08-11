// frontend/src/utils/AxiosClient.jsx
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:2000/api/v1",  // URL as string with quotes
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;