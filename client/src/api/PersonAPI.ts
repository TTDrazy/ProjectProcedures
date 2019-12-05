import Axios from "../utils/axios/Axios";

export default class PersonAPI{
    //get 所有person 
    async getPersonList(){
        return await Axios.get('personlist');
    }
}