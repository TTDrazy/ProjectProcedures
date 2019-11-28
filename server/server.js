import Result from "./models/Result";
import Person from "./models/Person";
import express from 'express';
import bodyParser from "body-parser";

let app = express();
//设置允许跨域
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//login 请求
app.post("/login", function(req, res) {
    let { userName, password } = req.body;
    let result;
    if (userName == "mayige" && password == "drazy") {
        result = new Result("000", "登陆成功！", "");
    } else {
        result = new Result("001", "用户名或密码不正确！", "");
    }
    res.json(result);
    res.end();
});
//get personlist 请求
app.get("/personlist", (req, res) => {
    res.json(
        new Result("000", "", [
            new Person("xiaoming", 16),
            new Person("xiaotuzi", 26)
        ])
    );
});

app.listen(3100, () => console.log("listen on 3100 port!"));
