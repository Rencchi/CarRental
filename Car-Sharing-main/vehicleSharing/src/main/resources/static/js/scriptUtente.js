//pagina di script per il check di utente
window.addEventListener("load", checkConnection());
console.log("script caricato");


function checkConnection() {

    if (sessionStorage.getItem("username") == null && localStorage.getItem("username") == null) {
        console.log("caso1")
        window.location.assign("/login");


    } else if (sessionStorage.getItem("tipo") == "C" || localStorage.getItem("tipo") == "C") {
        console.log("caso2")
        window.location.assign("/");
        console.log("LOGGATI SCEMUNITO")

        //inserire pagina di errore


    } else if (sessionStorage.getItem("tipo") == "B" || localStorage.getItem("tipo") == "B") {
        console.log("caso3")
        console.log("UTENTE SBAGLIATO DI TIPO B");

    } else {
        console.log("caso4")


    }


}