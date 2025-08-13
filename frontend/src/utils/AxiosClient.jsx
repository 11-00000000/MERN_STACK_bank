// frontend/src/utils/AxiosClient.jsx
// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: "http://localhost:2000/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosClient;
// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: "http://localhost:2000/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosClient;

import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:2000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});