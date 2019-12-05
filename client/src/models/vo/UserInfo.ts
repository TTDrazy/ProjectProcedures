import Person from './Person';
export default class UserInfo{
    user:Person = new Person();
    private token:string='';
    get Token(){
        //如果 token 为空，则去取 localStorage 里面的
        if(!this.token){
            let token = localStorage.getItem('token');
            //如果 localStorage 里面的存在，则赋值
            if(!!token){
                this.token = token;
            }
        }
       return this.token; 
    }
    set Token(token:string){
        this.token = token;
        localStorage.setItem('token',this.token);
    }
}