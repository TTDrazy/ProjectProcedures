import Axios from "axios";

export default class PersonAPI{
    //get 所有person 
    async getPersonList(){
        return await Axios.get('http://localhost:3100/personlist');
    }
}