import axios from "axios";
import {toast} from "react-hot-toast";

export default function httpService(configHeaders: any){
    const config: any = {  };
    config.baseURL = process.env.HOST_API_KEY_SSL || "";
    config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
    const axiosInstance = axios.create(config);

    axiosInstance.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        console.log( error?.message || "Not able to connect to server")
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosInstance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        console.log( error?.message || "Something went wrong")
        return Promise.reject(error);
    });

    return axiosInstance;
}
