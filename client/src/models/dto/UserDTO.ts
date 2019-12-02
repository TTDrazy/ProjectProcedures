import validator from 'validator';
import { message} from 'antd';
import Encryption from '../../utils/encryption/Encryption';

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
        }else{
            //进行 Md5 加密,为了不在发送 post 请求时暴露密码信息
            this.password = Encryption.stringToMd5(this.password);
        }
        return isQualified;
    }
} 