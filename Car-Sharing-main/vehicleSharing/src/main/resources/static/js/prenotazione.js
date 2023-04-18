const URL = "http://localhost:9069/api/prenotazione";

let prenotazione = document.querySelector("#prenotazione");


window.addEventListener('load', fetchprenotazione);

const toastLiveExample = document.querySelector('.toast');



function getPrenotazione(prenotazioni) {

    let htmlCode = '';
    prenotazioni.forEach(singlePrenotaObjects => {

        htmlCode +=
            `
        <div id="cardina" class="col-md-6 py-3 d-flex flex-column">
            <div class="d-flex flex-column flex-md-row justify-content-center align-items-center p-3 set-bg card border-0">
                <div class="d-flex align-items-center col-md-6">
                    <img src="${singlePrenotaObjects.veicoli.immagine}" alt="" class="img-fluid">
                </div>
                <div class="d-flex flex-column justify-content-center col-md-6">
                    <h3 class="fw-bold">Dettagli prenotazione: </h3>
                    <div>Modello: ${singlePrenotaObjects.veicoli.modello}</div>
                    <div>Alimentazione: ${singlePrenotaObjects.veicoli.alimentazione}</div>
                    <div>Cilindrata: ${singlePrenotaObjects.veicoli.cilindrata}</div>
                    <div>Colore: ${singlePrenotaObjects.veicoli.colore}</div>
                    <div>Data prenotazione: ${singlePrenotaObjects.oraPrenotazione.substring(0,10)}</div>
                    <div>Ora prenotazione: ${singlePrenotaObjects.oraPrenotazione.substring(11,16)}</div>
                    <button class="mt-3 btn primaryBtn" data-bs-toggle="modal" data-bs-target="#eliminaModal" id="${singlePrenotaObjects.id}" class="btn redBtn btn-close">Elimina</button>
                </div>
            </div>         
        </div>
            `;
    });

    // <div>Id Utente:${singlePrenotaObjects.archivioUtenti.userId}</div>
    // <div>Id Veicolo:${singlePrenotaObjects.veicoli.id}</div>
    prenotazione.innerHTML = htmlCode;

    let eliminaModale = document.querySelector("#eliminaModal");
    let btn = document.querySelectorAll("button");

    // Add new event listeners to buttons
    btn.forEach(button => {
        button.addEventListener("click", function() {
            sessionStorage.setItem('idPrenotazione', this.id);
            eliminaModale.style.display = 'block';
        });
    });


    var closeButtons = document.querySelectorAll('.btn-close');

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function() {
            eliminaModale.style.display = "none";
        });
    };



};




let deleting = document.querySelector("#eliminaBottone");

deleting.removeEventListener("click", () => {});

deleting.addEventListener("click", function() {

    let idBottoneElimina = sessionStorage.getItem("idPrenotazione")
    console.log(idBottoneElimina);

    fetchdelete(idBottoneElimina);

    const bernardo = new bootstrap.Toast(toastLiveExample);
    bernardo.show();
    // location.reload();
});



function fetchprenotazione() {

    var id;

    if (localStorage.getItem('id') == null) {

        id = sessionStorage.getItem('id');

    } else {

        id = localStorage.getItem('id');

    }


    fetch(URL)
        .then(data => {
            return data.json()
        })
        .then(response => {

            // console.log(response);
            const prenotazioniFiltrate = response.filter(prenotazione => prenotazione.archivioUtenti.id === Number(id));

            

            if(prenotazioniFiltrate == ""){

                nessunVeicolo();

            } else {
                prenotazione.innerHTML = "";
                getPrenotazione(prenotazioniFiltrate);
            }

            



            /* -------------------------------------------------------------------------- */
            /*              FUNZIONE PER METTERE L'ULTIMO ELEMENTO COME PRIMO             */
            /* -------------------------------------------------------------------------- */
            let nodeList = document.querySelectorAll("#cardina");
            if (nodeList.length !== 0) {
                let array = Array.prototype.slice.call(nodeList);
                let last = array.pop();
                last.classList.add("class", "colPrimaPrenotazione");
                array.unshift(last);

                let parent = nodeList[0].parentNode;
                array.forEach(element => {
                    parent.appendChild(element);
                });
            }
        })
};

function nessunVeicolo(){

    let htmlCode = ` <div class="noData">
                        <div class="text-center greyText fs-1">
                            <i class="bi bi-car-front-fill">
                            </i>Nessun veicolo prenotato.
                        </div>
                    </div>`
    prenotazione.innerHTML = htmlCode;

}


function fetchdelete(id) {
    console.log("ho cancellato" + id);

    fetch(URL + '/' + id, {
            method: 'DELETE',

        })
        .then(response => {
            console.log(response)

            fetchprenotazione();

        });
};





/*area personale utente

col-6 dati utente -dati abbonamento
col 12 prenotazioni 
alternate con bg light
1 evidenziata, in corso
le altre meno evideziata, usate

*/


