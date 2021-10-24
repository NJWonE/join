"ues strict";
const users = {
    id : ["응", "아니야", "돌아가"],
    pass : ["ㅇㅇ", "ㅇㄴㅇ", "ㄷㅇㄱ"],
};
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
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pass[idx]===pass){
                return res.json({
                    success : true,
                }
            )
        }
    }
    return res.json({
        success : false,
        msg : "로그인에 실패",
    });
    },
};

module.exports = {
    output,
    process,
};
