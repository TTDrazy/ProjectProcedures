import UserDTO from "../models/dto/UserDTO";
import UserAPI from "../api/UserAPI";
import Result from "../models/vo/Result";
import { message as Message } from "antd";
import UserStore from '../store/UserStore';

export default class UserService {
    //提出来写，防止多次 new ，浪费空间
    userApi = new UserAPI();
    //登录方法
    public async login(userName: string, password: string) {
        let isLogin = false;
        let userDto = new UserDTO(userName, password);
        let isQualified = userDto.checked();
        if (isQualified) {
            console.log("可以 ajax 请求啦~");
            //调用userApi 的 ajax 请求
            let response = await this.userApi.login(userDto);
            let { errCode, message, data } = response.data;
            let result = new Result(errCode, message, data);
            if (result.errCode === "000") {
                isLogin = true;
                //将后台返回的 token 存入全局 store 中
                UserStore.userInfo.Token = data.token;
            } else if (result.errCode === "001") {
                Message.warning(result.message);
            }
        }
        return isLogin;
    }
}
