import {observable} from 'mobx';
import UserInfo from '../models/vo/UserInfo';

export default class UserStore{
    //防止实例化
    private constructor(){}
    @observable static userInfo:UserInfo = new UserInfo();
}