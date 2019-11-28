export default class Result{
    errCode:string;
    message:string;
    data:string;
    constructor(errCode:string,message:string,data:string){
        this.errCode = errCode;
        this.message = message;
        this.data = data;
    }
}