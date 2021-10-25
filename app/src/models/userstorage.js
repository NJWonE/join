"use strict"

const fs = require("fs").promises;

class userstorage{
    static #getUserInfo(data, id){
        const users = JSON.parse(data)
                const idx = users.id.indexOf(id);
                const userInfo = Object.keys(users).reduce((newUser, info)=>{
                    newUser[info] = users[info][idx];
                    return newUser;
                }, {});
                return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;

    }

    static getUsers(isAll, ...fields){
        return fs.readFile("./src/databases/list/users.json")
            .then((data)=>{
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error); 
        };
    
    

    static getUserInfo(id){
    return fs.readFile("./src/databases/list/users.json")
            .then((data)=>{
                return this.#getUserInfo(data, id);
            })
            .catch(console.error); 
        };
    
    static async save(userInfo){
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "아이디가 이미 존재";
        }
        users.id.push(userInfo.id);
        users.pass.push(userInfo.pass);
        users.name.push(userInfo.name);
        fs.writeFile("./src/databases/list/users.json", JSON.stringify(users));
        return { success : true };
    }
};

module.exports = userstorage;