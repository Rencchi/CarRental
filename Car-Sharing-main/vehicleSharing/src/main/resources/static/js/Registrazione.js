const UTENTIMAPPING = "http://localhost:9069/api/utenti";
const UTENTE = "Utente dei servizi"
const TIPO = "B"


const REGUSER = /^[a-zA-Z\d]{1,12}$/;
const REGPASS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// password di prova:h$WMP%O58Eic


/* -------------------------------------------------------------------------- */
/*                                  Variabili                                 */
/* -------------------------------------------------------------------------- */


let username = document.querySelector("#username");
let pass1 = document.querySelector("#password");
let pass2 = document.querySelector("#password2");
let nome = document.querySelector("#nome");
let cognome = document.querySelector("#cognome");
let email = document.querySelector("#email");
let dataNascita = document.querySelector("#dataNascita");


let btnReg = document.querySelector("#registrati");

let error = document.querySelector("#error");

// let errorPass = document.querySelector("#errorPass");

/* -------------------------------------------------------------------------- */
/*                         AVVIO PAGINA/EVENT LISTENER                        */
/* -------------------------------------------------------------------------- */

window.addEventListener("load", checkLogin);
btnReg.addEventListener("click", registrazione);





/* -------------------------------------------------------------------------- */
/*                                  Funzioni                                  */
/* -------------------------------------------------------------------------- */

function checkPassword() {

    if (pass1.value == pass2.value) {

        return true;
    } else {

        error.textContent = "Le due password non coincidono"
        return false;
    }


}

function creaUtente(userId, password, firma, tipo, nome, cognome, nascita, email) {
    this.userId = userId;
    this.password = password;
    this.firma = firma;
    this.tipo = tipo;
    this.nome = nome;
    this.cognome = cognome;
    this.nascita = nascita;
    this.email = email;

}


function registrazione() {
    if (checherReg()) {
        console.log("entrato in registrazione");
        let utente = new creaUtente(username.value, pass1.value, UTENTE, TIPO, nome.value, cognome.value, dataNascita.value, email.value)

        fetch(UTENTIMAPPING, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(utente)


            })
            .then(data => {
                data.json();
            })
        console.log("Utente aggiunto")
        window.location.replace("/login");


    } else {
        console.log("Registrazione no");
    }



}

function checkLogin() {
    if (sessionStorage.getItem("username") != null || localStorage.getItem("username") != null) {
        window.location.assign('/');
    }
}


/* -------------------------------------------------------------------------- */
/*                                 CHECKREGEX                                 */
/* -------------------------------------------------------------------------- */

function checherReg() {

    ripristinoCampi();
    // console.log("campi ripristinati")

    if (checkPassword()) {
        // console.log("le password sono giuste?")
        if (controllaUser() && controllaPassword()) {
            // console.log("user e pass accettate");
            return true;
        } else {
            // console.log("user e pass non accettate");
            return false
        }

    } else
        // console.log("le password sono diverse");
    return false;

}




function controllaUser() {

    let us = username.value;

    // console.log(us);
    if (!us.match(REGUSER)) {

        error.textContent = "Per favore controlla il tuo Username: ";

        for (let i = 0; i < 2; i++) {

            switch (i) {
                case 0:
                    var span = document.createElement("span")
                    span.textContent = " massimo 16 caratteri, ";
                    error.appendChild(span);

                    break;
                case 1:
                    var span = document.createElement("span")
                    span.textContent = " non sono accettati spazi o caratteri speciali.";
                    error.appendChild(span);
                    break;

                default:
                    break;
            }

        }
        //console.log("flaso user")
        event.preventDefault();
        return false;
    } else {
        //console.log("user true")
        return true;
    }

}

function controllaPassword() {
    let password = pass1.value;
    // console.log(password);
    if (!password.match(REGPASS)) {
        //almeno una maiuscola
        //almeno una minuscola
        //almeno un carattere speciale @$!%*?&
        //lunghezza minima 8 caratteri
        error.textContent = "Per favore controlla la tua Password ed inserire: ";
        for (let i = 0; i < 6; i++) {

            switch (i) {
                case 0:
                    var span = document.createElement("span")
                    span.textContent = " almeno una maiuscola, ";
                    error.appendChild(span);

                    break;
                case 1:
                    var span = document.createElement("span")
                    span.textContent = " almeno una minuscola,";
                    error.appendChild(span);
                    break;
                case 2:
                    var span = document.createElement("span")
                    span.textContent = " almeno un carattere speciale (@$!%*?&), ";
                    error.appendChild(span);

                    break;
                case 3:
                    var span = document.createElement("span")
                    span.textContent = " almeno un numero, ";
                    error.appendChild(span);

                    break;
                case 4:
                    var span = document.createElement("span")
                    span.textContent = " almeno 8 caratteri, ";
                    error.appendChild(span);

                    break;
                case 5:
                    var span = document.createElement("span")
                    span.textContent = " almeno un numero. ";
                    error.appendChild(span);

                    break;

                default:
                    break;
            }

        }
        //console.log("password non accetata");
        event.preventDefault();
        return false;
    } else {
        //console.log("password ok");
        return true;
    }

}

function ripristinoCampi() {
    var li = document.querySelectorAll("#error span");
    error.textContent = "";
    li.forEach(element => {

        element.remove();

    });
    // lu.forEach(luele => {
    //     luele.remove();
    // });
}