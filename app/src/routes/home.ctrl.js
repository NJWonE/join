"ues strict";


const userStorage = require("../models/userstorage");

const output = {

    login : (req, res) => {
    res.render("login");
},

    join : (req , res) => {
    res.render("join");
}};
const process = {
    login : (req, res)=>{
        const id = req.body.id,
        pass = req.body.pass;

       const users = userStorage.getUsers("id", "pass");

        const response = {};
         if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pass[idx]===pass){
                response.success = true;
                response.msg = "로그인에 성공";
                return res.json(response);
        }
    } 
    response.success = true;
    response.msg = "로그인에 실패";
    return res.json(response);
    }, 
};

module.exports = {
    output,
    process,
};
