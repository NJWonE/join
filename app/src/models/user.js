"use strict"

const userStorage = require("./userstorage");

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const body = this.body;
        const {id, pass} = userStorage.getUserInfo(body.id);
        
        if(id){
        if (id === body.id && pass === body.pass){
            return { success : true };
        }
        return { success : false, msg : "비밀번호틀림"};
        }
        return { success : false, msg : "아이디가없음"};
    }
};

module.exports = User;