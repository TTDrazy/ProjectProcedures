import axios, { AxiosRequestConfig } from "axios";
import UserStore from "../../store/UserStore";

const Axios = axios.create({
    //公共提出来的部分
    baseURL: "http://localhost:3100/",
    timeout: 5000
});
//拦截器
Axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        //将 token 加入到请求头中
        config.headers["token"] = UserStore.userInfo.Token;
        return config;
    },
    (error: any) => {
        if (error) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    }
);
export default Axios;
