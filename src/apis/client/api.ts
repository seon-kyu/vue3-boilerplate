import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    const { header, result } = response.data;

    // 성공 처리
    if (header.isSuccessful) {
      return Promise.resolve(result);
    }

    return Promise.reject({
      header,
    });
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
