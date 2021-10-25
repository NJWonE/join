"use strict"

const userStorage = require("./userstorage");

class User{
    constructor(body){ 
        this.body = body;
    }
    async login(){
        const client = this.body;
        const {id, pass} = await userStorage.getUserInfo(client.id); 
        if(id){
        if (id === client.id && pass === client.pass){
            return { success : true, msg : "로그인성공" };
        }
        return { success : false, msg : "비밀번호틀림"};
        }
        return { success : false, msg : "아이디가없음"};
    }
    register(){
        const client = this.body;
        const response = userStorage.save(client);
        return response;
    }
};

module.exports = User;