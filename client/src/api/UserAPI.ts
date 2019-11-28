import Axios from "axios";
import UserDTO from "../models/dto/UserDTO";

export default class UserAPI {
    async login(userDto: UserDTO) {
        return await Axios.post("http://localhost:3100/login", userDto);
    }
}
