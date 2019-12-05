import PersonAPI from "../api/PersonAPI";
import Result from "../models/vo/Result";
import { message as Message } from "antd";

export default class PersonService {
    //获取所有person
    async getPersonList() {
        let personApi = new PersonAPI();
        //调用userApi 的 ajax 请求
        let response = await personApi.getPersonList();
        let { errCode, message, data } = response.data;
        let result = new Result(errCode, message, data);
        if (result.errCode === "000") {
            return data;
        } else {
            Message.warning(result.message);
        }
    }
}
