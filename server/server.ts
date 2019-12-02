import Result from "./models/Result";
import Person from "./models/Person";
//在 Typescript 中，导入时必须手动更改至 * as xx
import * as express from "express";
import * as bodyParser from "body-parser";
import Token from "./models/Token";
import * as uuid from "uuid";

let app = express();
//设置允许跨域
app.all("*", function(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "*");
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//存放 Token
let tokenList: Map<string, Token> = new Map<string, Token>();

//login 请求
app.post("/login", function(req: any, res: any) {
    let { userName, password } = req.body;
    let result: any;
    if (
        userName == "mayige" &&
        password == "2663f75da7e9277d0830a9dd94ea2726"
    ) {
        //创建Token
        let tokenValue = new Token();
        let tokenKey = uuid.v1();
        tokenList.set(tokenKey, tokenValue);
        //数据返回仅返回 tokenKey ( uuid.v1 加密过的时间),后台会在数据库中通过 tokenKey 取存入的 Token 信息
        result = new Result("000", "登陆成功！", { token: tokenKey });
    } else {
        result = new Result("001", "用户名或密码不正确！", "");
    }
    res.json(result);
    res.end();
});
//get personlist 请求
app.get("/personlist", (req: any, res: any) => {
    res.json(
        new Result("000", "", [
            new Person("xiaoming", 16),
            new Person("xiaotuzi", 26)
        ])
    );
});

app.listen(3100, () => console.log("listen on 3100 port!"));
