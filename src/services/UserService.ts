import UserDTO from '../models/dto/UserDTO';
export default class UserService{
    public login = (userName:string,password:string)=>{
        let userDto = new UserDTO(userName,password);
        let isQualified = userDto.checked();
        if(isQualified){
            console.log('可以 ajax 请求啦~');
        }
        //调用userApi 的 ajax 请求
    }
}