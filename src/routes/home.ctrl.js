"ues strict";

const login = (req, res) => {
    res.render("login");
};

const join = (req , res) => {
    res.render("join");
;}

module.exports = {
    login,
    join,
};
