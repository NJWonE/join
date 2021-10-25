"ues strict";

const User = require("../models/user");

const output = {
    login : (req, res) => {
        res.render("login");
},
    join : (req , res) => {
        res.render("join");
},  
    register : (req, res)=>{
        res.render("register")
    },
};
const process = {
    login : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    }, 
    register : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};
