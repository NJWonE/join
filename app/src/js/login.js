"ues stritc"

const id = document.querySelector("#id"),
    psss = document.querySelector("#pass"),
    loginBtn = document.querySelector("button");

    loginBtn.addEventListener("click", login);

    function login(){
        const req = {
            id: id.value,
            pass: pass.value
        }
        console.log(req);
        console.log(JSON.stringify(req));
        fetch("/login", {
            method : "POST",
            headers : {
                "Content-Type": "apllication/sjon",
            },
            body : JSON.stringify(req)
        });
    
    }