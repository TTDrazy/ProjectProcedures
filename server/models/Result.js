export default class Result{
    errCode;
    message;
    data;
    constructor(errCode,message,data){
        this.errCode = errCode;
        this.message = message;
        this.data = data;
    }
}