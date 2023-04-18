var utente = document.querySelector('#utente');

let link = null;

if(localStorage.getItem('username') == null){
    utente.textContent = sessionStorage.getItem('username');
    link = "http://localhost:9069/api/utenti/" + sessionStorage.getItem('id');
    caricaUtente();
} else {
    utente.textContent = localStorage.getItem('username');
    link = "http://localhost:9069/api/utenti/" + localStorage.getItem('id');
    caricaUtente();
}


function caricaUtente(){
    fetch(link)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response)
        stampaUtente(response);
    })
}   


function stampaUtente(utente){
    let nome = document.querySelector('#nome');
    let cognome = document.querySelector('#cognome');
    let nascita = document.querySelector('#nascita');
    let email = document.querySelector('#email');
    let dataIscrizione = document.querySelector('#dataIscrizione');
    let tipo = document.querySelector('#tipo');
    let firma = document.querySelector('#firma');

    nome.textContent = utente.nome;
    cognome.textContent = utente.cognome;
    nascita.textContent = utente.nascita;
    email.textContent = utente.email;
    let data = utente.dataIscrizione.substring(0,10);
    let anno = data.substring(0,4);
    let mese = data.substring(5,7);
    let giorno = data.substring(8,10);

    dataIscrizione.textContent = giorno + "/" + mese + "/" + anno;

    if(utente.tipo == "A"){
        tipo.textContent = "Admin";

    } else if (utente.tipo == "B"){
        tipo.textContent = "Utente"
    }

    firma.textContent = utente.firma;
}