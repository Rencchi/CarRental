const GETVEICOLIBYID = "http://localhost:9069/api/veicoli/";

const POSTPRENOTAZIONE = "http://localhost:9069/api/prenotazione/utente/" //{idUtente}/veicolo/{idVeicolo}"

let btnPren = document.querySelector("#prenota");


window.addEventListener("load", initPagina);

btnPren.addEventListener("click", function() {
    // console.log(checkLogin());

    if (checkLogin() === true) {

        prenota();
        window.location.replace("/areaUtente#prenotazionee");
    } else {
        console.log("nope");
        
        const toastLiveExample = document.querySelector('#tosti');
        const bernardo = new bootstrap.Toast(toastLiveExample)
        bernardo.show();
        
       
      
        event.preventDefault();
    }
});




function initPagina() {
    const PIPPO = new URLSearchParams(window.location.search);
    PIPPO.get("id")
    fetch(GETVEICOLIBYID + PIPPO.get("id"))
        .then(data => {
            return data.json()
        })
        .then(response => {
            // console.log(response)
            stampaVeicolo(response);
            //inserire funzione per mostrare i veicoli
        })
};




function prenota() {
    const VEICOLO = new URLSearchParams(window.location.search);
    let vId = VEICOLO.get("id")
    if (localStorage.getItem("id")) {
        let id = localStorage.getItem("id");

        postpren(id, vId);
    } else {
        let id = sessionStorage.getItem("id");
        postpren(id, vId);
    }



}

function checkLogin() {
    let ss = sessionStorage.getItem("username");
    let ls = localStorage.getItem("username");
    // console.log(ls);
    // console.log(ss);

    if (ss != null || ls != null) {
        console.log("entrato");
        return true;

    } else
        console.log("noentrato");
    return false;

}



function stampaVeicolo(veicolo) {
    var nomeVeicolo = document.querySelector('#nomeVeicolo');
    var iconaElettrica = document.querySelector('#iconaElettrica');
    var colore = document.querySelector('#coloreAuto');
    var potenza = document.querySelector('#potenzaAuto');
    var disponibile = document.querySelector('#disponibile');

    var img = document.querySelector('#imgVeicolo');

    nomeVeicolo.textContent = veicolo.modello;
    iconaElettrica.textContent = veicolo.alimentazione;
    colore.textContent = veicolo.colore;
    potenza.textContent = veicolo.cilindrata;

    if (veicolo.disponibilita) {
        disponibile.textContent = "Disponibile"
        disponibile.setAttribute('class', 'disponibile');
    } else {
        disponibile.textContent = "Non Disponibile";
        disponibile.setAttribute('class', 'noDisponibile');
    }

    img.setAttribute('src', veicolo.immagine);

    creaMappa(veicolo.posizione);
}


function postpren(id, vId) {
    

    fetch(POSTPRENOTAZIONE + id + "/veicolo/" + vId, {
            method: "POST",
            headers: {
                // Imposta l'intestazione Content-Type su application/json
                'Content-Type': 'application/json'
            },
        }).then(data => data.json()) // Estrai il JSON dalla risposta
        .then(response => {
            response.log(data)
        }) // Esegui qualcosa con i dati estratti

}



function creaMappa(posizione) {
    var pos = posizione

    let numPos = pos.split(",");

    let num1 = parseFloat(numPos[0]);
    let num2 = parseFloat(numPos[1]);

    var map = L.map('map').setView([num1, num2], 16);


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
    }).addTo(map);

    L.marker([num1, num2]).addTo(map)
        .bindPopup('Posizione attuale del veicolo')
        .openPopup();

}