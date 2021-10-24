"ues stritc"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pass = document.querySelector("#pass"),
    confirmPass = document.querySelector("#confirm-pass"),
    registerBtn = document.querySelector("#button");

    registerBtn.addEventListener("click", register);

    function register(){
        const req = {
            id: id.value,
            name: name.value,
            pass: pass.value,
            confirmPass : confirmPass.value,
        };
        console.log(req);
         fetch("/", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(req),
        })
        .then((res) => res.json())
        .then((res) =>{
            if(res.success){
                location.href = "/";
                alert(res.msg);
            } else {
                alert(res.msg);
            }
        }).catch((err)=>{
            console.error("회원가입 중 에러");
        }); 
    }