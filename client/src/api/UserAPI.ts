import Axios from "../utils/axios/Axios";
import UserDTO from "../models/dto/UserDTO";

export default class UserAPI {
    async login(userDto: UserDTO) {
        return await Axios.post("login", userDto);
    }
}
