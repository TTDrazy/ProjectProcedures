import * as React from "react";
import { Input, Button } from "antd";
import UserService from "../../services/UserService";
import { withRouter, RouteComponentProps } from "react-router-dom";

export interface ILoginState {
    userName: string;
    password: string;
    //为了使用 e.target.xx
    [index: string]: string;
}
export interface ILoginProps extends RouteComponentProps {}

class Login extends React.Component<ILoginProps, ILoginState> {
    state = {
        userName: "",
        password: ""
    };
    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleClick = () => {
        const { userName, password } = this.state;
        //调用 service
        let userService = new UserService();
        userService.login(userName, password).then(isLogin => {
            if (isLogin) {
                //跳转至登陆成功页面
                this.props.history.push('login/success');
            }
        });
    };
    public render() {
        const { userName, password } = this.state;
        return (
            <div>
                用户名：
                <Input
                    name="userName"
                    value={userName}
                    onChange={this.handleChange}
                ></Input>
                密码：
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                ></Input>
                <Button onClick={this.handleClick}>登录</Button>
            </div>
        );
    }
}
export default withRouter(Login);
