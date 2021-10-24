"use strict"

class userstorage{
    static #users = {
        id : ["응", "아니야", "돌아가"],
        pass : ["ㅇㅇ", "ㅇㄴㅇ", "ㄷㅇㄱ"],
        name : ["하으응", "헤으응", "후우욱"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        this.#users.id.push(userInfo.id);
        this.#users.pass.push(userInfo.pass);
        this.#users.name.push(userInfo.name);
        return { success : true, msg : "회원가입 성공"};
    }
};

module.exports = userstorage;