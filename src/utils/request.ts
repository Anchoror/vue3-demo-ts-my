import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import useAppStore from '@/stores/modules/app'

export const REQUEST_TOKEN_KEY = 'Authorization'



const axiosInstance: AxiosInstance = axios.create({
  // API 请求的默认前缀
  baseURL: import.meta.env.DEV ? '/api' : import.meta.env.VITE_APP_API_TARGET_URL,
  timeout: 20000, // 请求超时时间
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么
    const { token } = storeToRefs(useAppStore())

    if (token.value)
      config.headers[REQUEST_TOKEN_KEY] = token.value
    return config
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error)
  },
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么

    const { code } = response.data
    if (code !== 200) {
      return Promise.reject(response.data)
    }
    return response
  },
  (error: any) => {
    // 处理响应错误
    return Promise.reject(error)
  },
)

export interface ApiResult<T> {
  code: number
  message: string
  data: T
}

export async function get<T>(option: { url: string, params?: any}): Promise<ApiResult<T>> {
  const response = await axiosInstance.get<ApiResult<T>>(option.url, { params:option.params });
  return response.data;
}
 
export async function post<T>(option: { url: string, data?: any }): Promise<ApiResult<T>> {
  const response = await axiosInstance.post<ApiResult<T>>(option.url, option.data)
  return response.data
}

export async function put<T>(option: { url: string, data?: any }): Promise<ApiResult<T>> {
  const response = await axiosInstance.put<ApiResult<T>>(option.url, option.data);
  return response.data;
}

export async function del<T>(option: { url: string, data?: any }): Promise<ApiResult<T>> {
  const response = await axiosInstance.delete<ApiResult<T>>(option.url, option.data);
  return response.data;
}
 