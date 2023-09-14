import request from "../request";
import { BASE_URL, TIME_OUT } from "../request/config";

const requestObj = new request({
  baseURL: "http://10.102.212.33:8081/api/v1",
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (error) => {
      return error;
    },
    responseInterceptor: (config) => {
      return config;
    },
  },
});
export default requestObj;
