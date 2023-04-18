const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";


let table = document.querySelector("#tabella");
let tableBody = document.querySelector("#tabella tbody");
let error = document.querySelector("#error");


/* -------------------------------------------------------------------------- */
/*                              Selettori valori                              */
/* -------------------------------------------------------------------------- */

let id = document.querySelector("#id");
let tipologia = document.querySelector("#tipo");
let alimentazione = document.querySelector("#alimentazione");
let modello = document.querySelector("#modello");
let colore = document.querySelector("#colore");
let cilindrata = document.querySelector("#cilindrata");
let disponibilita = document.querySelector("#disponibile");
let prolungato = document.querySelector("#prolungato");
let posizione = document.querySelector("#posizione");
let immagine = document.querySelector("#immagine");
// let foto = document.querySelector("#foto");


/* -------------------------------------------------------------------------- */
/*                             form                                        */
/* -------------------------------------------------------------------------- */

let tipform = document.querySelector("#tipoForm");
let aliform = document.querySelector("#alimentazioneForm");
let modForm = document.querySelector("#modelloForm");
let coloreForm = document.querySelector("#coloreForm");
let cilForm = document.querySelector("#cilindrataForm");
let posForm = document.querySelector("#posizioneForm");




window.addEventListener("load", fetchVeicoli);

/* -------------------------------------------------------------------------- */
/*                              Creazione tabella                             */
/* -------------------------------------------------------------------------- */
function creaTabella(listaVeicoli) {
    listaVeicoli.forEach(veicolo => {

        let vid = veicolo.id;



        let tr = document.createElement("tr");

        let tdId = document.createElement("td");
        let tdModello = document.createElement("td");
        let tdTipologia = document.createElement("td");
        let tdAlimentazione = document.createElement("td");
        let tdCilindrata = document.createElement("td");
        let tdColore = document.createElement("td");
        let tdDataInserimento = document.createElement("td");
        let tdNoleggio = document.createElement("td");
        let tdNoleggioP = document.createElement("td");
        let tdPosizione = document.createElement("td");


        let tdModifica = document.createElement('td');
        let tdElimina = document.createElement('td');
        let btnModifica = document.createElement('button');
        let btnElimina = document.createElement('button');



        tdId.textContent = veicolo.id;
        tdModello.textContent = veicolo.modello;
        tdTipologia.textContent = veicolo.veicolo;
        tdAlimentazione.textContent = veicolo.alimentazione;
        tdCilindrata.textContent = veicolo.cilindrata;
        tdColore.textContent = veicolo.colore;




        tdDataInserimento.textContent = veicolo.dataInserimento.substring(0, 10) + " " + veicolo.dataInserimento.substring(11, 19);

        if (veicolo.disponibilita) {
            fino = "Si"
        } else {
            fino = "No"
        };


        tdNoleggio.textContent = fino;

        if (veicolo.prolungato) {
            banana = "Si"
        } else banana = "No"

        tdNoleggioP.textContent = banana;

        tdPosizione.textContent = veicolo.posizione;


        btnModifica.setAttribute('id', "bottoneMOD");
        btnModifica.setAttribute('class', 'btn primaryBtn');
        btnModifica.setAttribute("data-bs-toggle", "modal");
        btnModifica.setAttribute("data-bs-target", "#modificaModal");
        btnModifica.textContent = "Modifica";


        btnElimina.setAttribute('id', "bottoneELI");
        btnElimina.setAttribute('class', 'btn primaryBtn');
        btnElimina.setAttribute("data-bs-toggle", "modal");
        btnElimina.setAttribute("data-bs-target", "#eliminaModal");
        // btnElimina.setAttribute('id', veicolo.id);
        btnElimina.setAttribute('class', 'btn redBtn');
        btnElimina.textContent = "Elimina";


        tdModifica.appendChild(btnModifica);
        tdElimina.appendChild(btnElimina);

        tr.appendChild(tdId);
        tr.appendChild(tdModello);
        tr.appendChild(tdTipologia);
        tr.appendChild(tdAlimentazione);
        tr.appendChild(tdCilindrata);
        tr.appendChild(tdColore);
        tr.appendChild(tdDataInserimento);
        tr.appendChild(tdNoleggio);
        tr.appendChild(tdNoleggioP);
        tr.appendChild(tdPosizione);
        tr.appendChild(tdModifica);
        tr.appendChild(tdElimina);



        tableBody.appendChild(tr);

        let modaleModifica = document.querySelector("#modificaModal");

        //Aggiungi un'id univoca ad ogni bottone di modifica. Ad esempio, puoi utilizzare l'id del veicolo come id del bottone:
        btnModifica.setAttribute('id', `${veicolo.id}`);

        btnElimina.setAttribute('id', `${veicolo.id}`);



        btnModifica.addEventListener("click", function() {

            sessionStorage.setItem('idBottoneModifica', this.id);

            modaleModifica.style.display = 'block';
            scriviCampi(veicolo);
        });



        let modaleDelete = document.querySelector("#eliminaModal");

        btnElimina.addEventListener("click", function() {
            error.innerHTML = "";
            modaleDelete.style.display = 'block';
            sessionStorage.setItem('idBottoneElimina', this.id);
        });

        var closeButtons = document.querySelectorAll('.btn-close');

        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function() {
                modaleModifica.style.display = 'none';
                modaleDelete.style.display = "none;"
            });
        }

    });

    /* -------------------------------------------------------------------------- */
    /*                             costruzione tabella                            */
    /* -------------------------------------------------------------------------- */

    let datatable = new DataTable(table, {

        "language": {
            "sSearch": 'Cerca:',
            "lengthMenu": "Mostra _MENU_ Record per pagina",
            "zeroRecords": "Veicolo non trovato - Si prega di controllare la ricerca",
            "info": "Questa è la pagina _PAGE_ di _PAGES_ del catalogo",
            "infoEmpty": "Non ci sono veicoli in database",
            "infoFiltered": "(Filtrato da _MAX_ record totali)",
            'oPaginate': {
                'sNext': 'Prossimo',
                'sPrevious': 'Precedente'
            }

        }
    });
    /* -------------------------------------------------------------------------- */
    /*                              costruzione reset                             */
    /* -------------------------------------------------------------------------- */

    let reset = document.querySelector("#reset")
    reset.addEventListener("click", function() {
        let idBottoneModifica = sessionStorage.getItem('idBottoneModifica');
        let veicolos = listaVeicoli.find(v => v.id == idBottoneModifica);
        scriviCampi(veicolos);
    });
    /* -------------------------------------------------------------------------- */
    /*                              costruzione salva                             */
    /* -------------------------------------------------------------------------- */

    let salva = document.querySelector("#salvaMod");
    salva.addEventListener("click", function() {
        
        let idBottoneModifica = sessionStorage.getItem('idBottoneModifica');


        putVeicoli(idBottoneModifica);
    });


    /* -------------------------------------------------------------------------- */
    /*                                Eliminazione                                */
    /* -------------------------------------------------------------------------- */
    let deleting = document.querySelector("#eliminaMod");

    deleting.addEventListener("click", function() {

        let idBottoneElimina = sessionStorage.getItem("idBottoneElimina");

        fetchVeicoloSingolo(idBottoneElimina)

        // eliminaveicoli(idBottoneElimina);
    });


};


/* -------------------------------------------------------------------------- */
/*                         Funzione di scrittura dati                         */
/* -------------------------------------------------------------------------- */

function scriviCampi(data) {


    // let fotoForm = document.querySelector("#fotoForm");

    id.value = data.id;
    tipologia.value = data.veicolo;
    alimentazione.value = data.alimentazione;
    modello.value = data.modello;
    colore.value = data.colore;
    cilindrata.value = data.cilindrata;
    disponibilita.checked = data.disponibilita;
    prolungato.checked = data.prolungato;
    posizione.value = data.posizione;
    immagine.value = data.immagine;

    mostraModelli();
    impostaDati();



};

/* -------------------------------------------------------------------------- */
/*                              costruttore auto                              */
/* -------------------------------------------------------------------------- */


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


/* -------------------------------------------------------------------------- */
/*                                    Fetch                                   */
/* -------------------------------------------------------------------------- */

function fetchVeicoli() {
    fetch(VEICOLIMAPPING)
        .then(response => response.json())
        .then(data => {




            creaTabella(data);

        })

};


function fetchVeicoloSingolo(id) {
    var url = VEICOLIMAPPING + "/" + id;
    fetch(url)
        .then(response => response.json())
        .then(data => {

            eliminaveicoli(data);

        })
        .catch(error => console.error(error))
}






function putVeicoli(id) {


    var url = VEICOLIMAPPING + "/" + id;


    let shazam = new Auto(tipologia.value, modello.value, colore.value, cilindrata.value, alimentazione.value, disponibilita.checked, posizione.value, prolungato.checked, immagine.value);


    fetch(url, {
            method: 'PUT', // Imposta il metodo su put
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shazam)
        })
        //.then(data => data.json())
        .then(response => {
            console.log(response);
            console.log("Veicolo modificato");

            // fetchVeicoli();
            location.reload();

        });

};


function eliminaveicoli(data) {


    var url = VEICOLIMAPPING + "/" + data.id;

    console.log(data.disponibilita);

    //eseguire il delete solo se il veicolo è prenotabile

    if (data.disponibilita) {

        fetch(url, {
                method: 'DELETE', // Imposta il metodo su put

            })

            .then(response => {
                console.log(response);
                console.log("Veicolo Eliminato");


                // fetchVeicoli();
                location.reload();

            }).catch(error => {
                console.error(error)
            });

    } else {
        error.innerHTML = "Non puoi cancellare un veicolo quando è prenotato"
    }

};



/* -------------------------------------------------------------------------- */
/*      funzioni cambiamento dei dati in tempo reale e la loro scrittura      */
/* -------------------------------------------------------------------------- */


alimentazione.addEventListener('change', mostraModelli);




function mostraModelli() {

    const selectedValue = alimentazione.value;
    // Set the value of the second select element to the selected value of the first select element
    // selectMod.value = selectedValue;
    modello.value = "";
    // Cicla attraverso tutte le opzioni del secondo select
    Array.from(modello.options).forEach(option => {
        // Se il valore dell'opzione corrente corrisponde al valore selezionato del primo select, rimuovi la classe hidden
        if (option.getAttribute('data-alimentazione') === selectedValue) {
            option.classList.remove('hidden');
        } else {
            // Altrimenti, aggiungi la classe hidden
            option.classList.add('hidden');
        }
    });

}



tipologia.addEventListener("change", impostaDati);


function impostaDati() {

    if (tipologia.value == "AUTO") {
        // tipform.removeAttribute("hidden", "hidden");
        aliform.removeAttribute("hidden", "hidden");
        modForm.removeAttribute("hidden", "hidden");
        coloreForm.removeAttribute("hidden", "hidden");
        cilForm.removeAttribute("hidden", "hidden");
        switch (modello.value) {
            case "BMW I3-2007":
                immagine.value = "/img/imgVeicoli/bmwElettrica.png";
                immagine.setAttribute("value","/img/imgVeicoli/bmwElettrica.png");
                break;
            case "Golf GTE-2019":
                immagine.value = "/img/imgVeicoli/golfElettrica.png";
                immagine.setAttribute("value","/img/imgVeicoli/golfElettrica.png");
                break;
            case "Smart FortTwo EQ 2016":
                immagine.value = "/img/imgVeicoli/smartElettrica.png";
                immagine.setAttribute("value","/img/imgVeicoli/smartElettrica.png");
                break;
            case "Mercedes-Benz GLC Class 2018":
                immagine.value = "/img/imgVeicoli/mercedesHybrida.png";
                immagine.setAttribute("value","/img/imgVeicoli/mercedesHybrida.png");
                break;
            case "Toyota C-HR 2021":
                immagine.value = "/img/imgVeicoli/toyotaHybrida.png";
                immagine.setAttribute("value","/img/imgVeicoli/toyotaHybrida.png");
                break;
            default:
                break;
        }
        // fotoForm.removeAttribute("hidden", "hidden");
    } else if (tipologia.value == "MONOPATTINO" || tipologia.value == "BICICLETTA") {

        // tipform.setAttribute("hidden", "hidden");
        // fotoForm.setAttribute("hidden", "hidden");
        aliform.setAttribute("hidden", "hidden");
        modForm.setAttribute("hidden", "hidden");
        coloreForm.setAttribute("hidden", "hidden");
        cilForm.setAttribute("hidden", "hidden");

        if (tipologia.value == "MONOPATTINO") {

            immagine.value = "/img/imgVeicoli/scooter.png";
            immagine.setAttribute("value","/img/imgVeicoli/scooter.png");

            cilindrata.value = "500 Watt";
            cilindrata.setAttribute('value', '500 Watt');

            alimentazione.value = "elettrica";
            alimentazione.setAttribute('value', 'elettrica');

            modello.value = "Segway Ninebot";
            modello.setAttribute('value', 'Segway Ninebot');

            colore.value = "Bianca";
            colore.setAttribute('value', 'Bianca');

        } else {

            immagine.value = "/img/imgVeicoli/bici.png";
            immagine.setAttribute("value","/img/imgVeicoli/bici.png");

            cilindrata.value = "600W";
            cilindrata.setAttribute('value', '600 Watt');

            alimentazione.value = "elettrica";
            alimentazione.setAttribute('value', 'elettrica');

            modello.value = "Flyer Uproc X";
            modello.setAttribute('value', 'Flyer Uproc X');
            

            colore.value = "Bianco";
            colore.setAttribute('value', 'Bianca');

        }
    }
}