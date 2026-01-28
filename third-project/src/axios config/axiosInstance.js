import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

export default axiosInstance;



// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before the request is sent
        return config;
    },
    function (error) {
        // Do something with the request error
        return Promise.reject(error);
    },
);



// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        // Any status code that lies within the range of 2xx causes this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that fall outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);