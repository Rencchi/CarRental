const LOGIN = "http://localhost:9069/api/utenti/login";


let bottone = document.querySelector("#loginButton");
let check = document.querySelector("#check");
let errorMsg = document.querySelector("#errorIns");


window.addEventListener("load",checkLogin());



// Invia la richiesta POST al server
function log2() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    const loginData = {
        userId: username,
        password: password
    };
    fetch(LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            var tipos = data.tipo;
            console.log(tipos);
            if (data.tipo === "A" || data.tipo === "B") {

                var tipo = data.tipo;

                console.log(tipo);



                if (check.checked) {

                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    localStorage.setItem("tipo", tipo);
                    localStorage.setItem('id', data.id); 

                } else {
                    sessionStorage.setItem("username", username);
                    sessionStorage.setItem("password", password);
                    sessionStorage.setItem("tipo", tipo);
                    sessionStorage.setItem('id', data.id);
                }



                window.location.assign("/");

                return true;
            } else {

                console.log("utente C")
                sessionStorage.setItem("tipo", tipo);
                errorMsg.textContent="Utente o password sbagliati, prego riprovare";

                return false;
            }


        });
}



function checkLogin(){

    if(sessionStorage.getItem("username") != null  || localStorage.getItem("username")!=null){
        window.location.replace("/");

    }
    
}


bottone.addEventListener("click", function () {
    log2();
})