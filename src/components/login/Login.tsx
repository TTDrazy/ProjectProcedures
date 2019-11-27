import * as React from "react";
import { Input ,Button} from "antd";
import UserService from '../../services/UserService';

export interface ILoginState {
    userName :string;
    password:string;
    //为了使用 e.target.xx
    [index:string]:string;
}
export interface ILoginProps {}

export default class Login extends React.Component<ILoginProps,ILoginState> {
    state={
        userName :'',
        password:''
    }
    handleChange =(e:any)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick = ()=>{
        const {userName, password} = this.state;
        //调用 service 
        let userService = new UserService();
        userService.login(userName, password);
    }
    public render() {
        const {userName, password} = this.state;
        return (
            <div>
                用户名：<Input name='userName' value={userName} onChange={this.handleChange}></Input>
                密码：<Input type = 'password' name='password' value={password} onChange={this.handleChange}></Input>
                <Button onClick={this.handleClick}>登录</Button>
            </div>
        );
    }
}
