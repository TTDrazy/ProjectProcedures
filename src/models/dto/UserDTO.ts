import validator from 'validator';
import { message} from 'antd';

export default class UserDTO{
    private userName:string;
    private password:string;
    constructor(userName:string,password:string){
        this.userName = userName;
        this.password = password;
    }
    public checked():boolean{
        let isQualified:boolean = true;
        if(validator.isEmpty(this.userName)){
            message.warning('用户名不可以为空啦╭(╯^╰)╮');
            isQualified = false;
        }else if(validator.isEmpty(this.password)){
            message.warning('密码不可以为空啦╭(╯^╰)╮');
            isQualified = false;
        }
        return isQualified;
    }
} 