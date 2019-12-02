import md5 from 'md5';
export default class Encryption{
    //利用了 工厂设计模式，私有构造器
    private constructor(){};
    //将 string 字符串 加密为 Md5 格式
    static stringToMd5(string:string){
        return md5(string);
    }
}