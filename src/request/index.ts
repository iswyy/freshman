import cache from "@/utils/cache";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

interface RequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;

  responseInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  responseInterceptorCatch?: (error: any) => any;
}
interface requestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
  showLoading?: boolean;
}
// const navigate = useNavigate();
// const [messageApi, contextHolder] = message.useMessage();
class request {
  instance: AxiosInstance;
  interceptors?: RequestInterceptors;
  constructor(config: requestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 给每个实例添加自己的拦截器
    //@ts-ignore
    this.instance.interceptors.request.use(this.interceptors?.requestInterceptor);
    // 全局拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        if (res.data.returnCode === "-1001") {
          console.log("请求失败，错误信息");
        } else {
          return res.data;
        }
      },
      (error) => {
        // const _token = cache.getCache("_token");
        // switch (error.response.status) {
        //   // 未登录
        //   case 401:
        //     if (_token) {
        //       break;
        //     }
        //     messageApi.info("请先登录！");
        //     setTimeout(() => {
        //       navigate("/login");
        //     }, 2000);
        //     break;
        //   // 登录过期
        //   case 403:
        //     messageApi.info("登录过期，请重新登录！");

        //     cache.deleteCache("token");
        //     setTimeout(() => {
        //       navigate("/login");
        //     }, 2000);
        //     break;
        //   case 404:
        //     messageApi.info("网络请求不存在!");

        //     setTimeout(() => {
        //       navigate("/notFound");
        //     }, 2000);
        //     break;
        //   default:
        //     messageApi.info(error.response.data.message || "请求失败！");
        // }
        return error;
      }
    );
  }

  request<T = any>(config: requestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          // return error;
        });
    });
  }
  get<T = any>(config: requestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T = any>(config: requestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T = any>(config: requestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: requestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}
export default request;
