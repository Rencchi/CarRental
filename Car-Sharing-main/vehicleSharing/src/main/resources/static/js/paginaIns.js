// var selectBtn = document.querySelector('#selectBtn');
var formVeicolo = document.querySelector('#formVeicolo');

var alimentazioneForm = document.querySelector('#alimentazioneForm');
var modelloForm = document.querySelector('#modelloForm');
var coloreForm = document.querySelector('#coloreForm');
// var fotoForm = document.querySelector('#fotoForm');
var cilindrataForm = document.querySelector('#cilindrataForm');

var contenutoModal = document.querySelector('#contenutoModal');
var titoloModal = document.querySelector('#titoloModal');
var img = document.querySelector('#imgForm');





/* -------------------------------------------------------------------------- */
/*                              Aggiungi veicolo                              */
/* -------------------------------------------------------------------------- */

var aggiungiBtn = document.querySelector('#aggiungi');
var selezionaTipo = document.querySelector('#tipologia');



function verificaSelect() {

    var selectTipo = document.querySelector('#tipologia').value;


    var tipologia = null;

    if (selectTipo == 0) {

        formVeicolo.setAttribute('hidden','');
        img.classList.remove('d-none');

    } else if (selectTipo == "AUTO") {

        /* -------------------------------------------------------------------------- */
        /*                                  Form AUTO                                 */
        /* -------------------------------------------------------------------------- */
        tipologia = "AUTO";
        formVeicolo.removeAttribute("hidden");
        alimentazioneForm.removeAttribute('hidden');
        modelloForm.removeAttribute('hidden');
        coloreForm.removeAttribute('hidden');
        // fotoForm.removeAttribute('hidden');
        cilindrataForm.removeAttribute('hidden');
        img.classList.add('d-none');





    } else if (selectTipo == "MONOPATTINO") {

        /* -------------------------------------------------------------------------- */
        /*                              Form MONOPATTINO                              */
        /* -------------------------------------------------------------------------- */
        tipologia = "MONOPATTINO";
        formVeicolo.removeAttribute('hidden');
        alimentazioneForm.setAttribute('hidden', '');
        modelloForm.setAttribute('hidden', '');
        coloreForm.setAttribute('hidden', '');
        // fotoForm.setAttribute('hidden','');
        cilindrataForm.setAttribute('hidden','');
        img.classList.add('d-none');


    } else if (selectTipo == "BICICLETTA") {

        /* -------------------------------------------------------------------------- */
        /*                               form bicicletta                              */
        /* -------------------------------------------------------------------------- */
        tipologia = "BICICLETTA";
        formVeicolo.removeAttribute('hidden');
        alimentazioneForm.setAttribute('hidden', '');
        modelloForm.setAttribute('hidden', '');
        coloreForm.setAttribute('hidden', '');
        // fotoForm.setAttribute('hidden','');
        cilindrataForm.setAttribute('hidden','');
        img.classList.add('d-none');

    }

    console.log(tipologia);

}

function aggiungiVeicolo() {

    var veicolo = document.querySelector('#tipologia').value;

    function Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato, immagine) {
        this.veicolo = veicolo;
        this.modello = modello;
        this.colore = colore;
        this.cilindrata = cilindrata;
        this.alimentazione = alimentazione;
        this.disponibilita = disponibilita;
        this.posizione = posizione;
        this.prolungato = prolungato;
        this.immagine = immagine;

    };

    switch (veicolo) {
        case "AUTO":


            var alimentazione = document.querySelector('#alimentazione').value;
            var modello = document.querySelector('#modello').value;
            var colore = document.querySelector('#colore').value;
            var disponibilitaCheck = document.querySelector('#disponibile');
            var prolungatoCheck = document.querySelector('#prolungato');
            var posizione = document.querySelector('#posizione').value;
            var cilindrata = document.querySelector('#cilindrata').value;
            var immagine;
            // Immagine



            switch (modello) {
                case "BMW I3-2007":
                    immagine = "/img/imgVeicoli/bmwElettrica.png";
                    break;
                case "Golf GTE-2019":
                    immagine = "/img/imgVeicoli/golfElettrica.png";
                    break;
                case "Smart FortTwo EQ 2016":
                    immagine = "/img/imgVeicoli/smartElettrica.png";
                    break;
                case "Mercedes-Benz GLC Class 2018":
                    immagine = "/img/imgVeicoli/mercedesHybrida.png";
                    break;
                case "Toyota C-HR 2021":
                    immagine = "/img/imgVeicoli/toyotaHybrida.png";
                    break;

                default:
                    break;
            }


            if (prolungatoCheck.checked) {
                prolungato = true;
            } else {
                prolungato = false;
            }

            if (disponibilitaCheck.checked) {
                disponibilita = true;
            } else {
                disponibilita = false;
            }

            var auto = new Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato, immagine);


            if (colore != "") {
                if (cilindrata != "") {
                    if (posizione != "") {

                        titoloModal.textContent = "Fatto"

                        contenutoModal.textContent = "Veicolo inserito con successo!"
                        console.log(modello + colore + cilindrata);

                        fetchVeicolo(auto);

                    } else {
                        titoloModal.textContent = "Errore"

                        contenutoModal.textContent = "Posizione auto mancante"
                    }
                } else {
                    titoloModal.textContent = "Errore"

                    contenutoModal.textContent = "Cilindrata auto mancante"
                }
            } else {
                titoloModal.textContent = "Errore"

                contenutoModal.textContent = "Colore auto mancante"
            }


            break;
        case "MONOPATTINO":


            var alimentazione = "elettrica";
            var modello = "Segway Ninebot";
            var colore = "Bianco";
            var disponibilitaCheck = document.querySelector('#disponibile');
            var prolungatoCheck = document.querySelector('#prolungato');
            var posizione = document.querySelector('#posizione').value;
            var cilindrata = "500W";
            var immagine = "/img/imgVeicoli/scooter.png";
            // Immagine


            if (prolungatoCheck.checked) {
                prolungato = true;
            } else {
                prolungato = false;
            }

            if (disponibilitaCheck.checked) {
                disponibilita = true;
            } else {
                disponibilita = false;
            }

            var monopattino = new Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato, immagine);



            if (posizione != "") {

                titoloModal.textContent = "Fatto"

                contenutoModal.textContent = "Veicolo inserito con successo!"
                fetchVeicolo(monopattino);

            } else {
                titoloModal.textContent = "Errore"

                contenutoModal.textContent = "Posizione monopattino mancante"
            }





            break;
        case "BICICLETTA":


            var alimentazione = "elettrica";
            var modello = "Flyer Uproc X";
            var colore = "Bianca";
            var disponibilitaCheck = document.querySelector('#disponibile');
            var prolungatoCheck = document.querySelector('#prolungato');
            var posizione = document.querySelector('#posizione').value;
            var cilindrata = "600 Watt";
            var immagine = "/img/imgVeicoli/bici.png";
            // Immagine

            if (prolungatoCheck.checked) {
                prolungato = true;
            } else {
                prolungato = false;
            }

            if (disponibilitaCheck.checked) {
                disponibilita = true;
            } else {
                disponibilita = false;
            }

            var bici = new Auto(veicolo, modello, colore, cilindrata, alimentazione, disponibilita, posizione, prolungato, immagine);

            if (posizione != "") {

                titoloModal.textContent = "Fatto"

                contenutoModal.textContent = "Veicolo inserito con successo!"
                fetchVeicolo(bici);

            } else {
                titoloModal.textContent = "Errore"

                contenutoModal.textContent = "Posizione monopattino mancante"
            }



            break;

        default:
            break;
    }

}

function fetchVeicolo(veicolo) {

    const URL = "http://localhost:9069/api/veicoli";

    fetch(URL, {
            method: 'POST', // Imposta il metodo su POST
            headers: {
                // Imposta l'intestazione Content-Type su application/json
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(veicolo) // Converti i dati in formato JSON e impostali come corpo della richiesta
        })
        .then(data => data.json) // Esegui qualcosa con i dati estratti
        .then(response => {
            console.log(response);
        }) // Estrai il JSON dalla risposta
        // .catch(error => console.error(error)); // Gestisci eventuali errori

}





selezionaTipo.addEventListener('change',function(){
    verificaSelect();
    mostraModelli();

});
aggiungiBtn.addEventListener('click', aggiungiVeicolo);



var selectAli = document.querySelector('#alimentazione');

var selectMod = document.querySelector('#modello');


selectAli.addEventListener('change',mostraModelli);




function mostraModelli(){

    const selectedValue = selectAli.value;
    // Set the value of the second select element to the selected value of the first select element
    // imposta o il valore a vuoto, resettandolo
    selectMod.value = ""; 
    // Cicla attraverso tutte le opzioni del secondo select
    Array.from(selectMod.options).forEach(option => {

        // Se il valore dell'opzione corrente corrisponde al valore selezionato del primo select, rimuovi la classe hidden
        if (option.getAttribute('data-alimentazione') === selectedValue) {

            option.classList.remove('hidden');

        } else {
            // Altrimenti, aggiungi la classe hidden
            
            option.classList.add('hidden');
        }
    });

}

