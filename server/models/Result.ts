export default class Result<T>{
    errCode:string;
    message:string;
    data:T;
    constructor(errCode:string,message:string,data:T){
        this.errCode = errCode;
        this.message = message;
        this.data = data;
    }
}