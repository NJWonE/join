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
};

module.exports = userstorage;