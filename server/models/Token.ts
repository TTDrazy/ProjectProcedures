import * as md5 from 'md5';
export default class Token{
    currentTimeStramp:number;
    timeOut:number;
    value:string;
    constructor(timeStramp:number = new Date().getTime(),timeOut:number = 60){
        this.currentTimeStramp = timeStramp;
        this.timeOut = timeOut;
        // Md5 仅接收 string 
        this.value = md5(timeStramp.toString());
    }
}