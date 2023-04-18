// api url
const VEICOLIMAPPING = "http://localhost:9069/api/veicoli";

const GETVEICOLOTIPO = "http://localhost:9069/api/veicoli/tipo/"

const GETVEICOLIDISPONIBILITA = "http://localhost:9069/api/veicoli/status/"
const GETVEICOLOALIMENTAZIONE = "http://localhost:9069/api/veicoli/alimentazione/" //inserire la stringa di alimentazione

var contenitore = document.querySelector('#contenitoreDisponibile');
var contenitoreNoDisp = document.querySelector('#contenitoreNoDisponibili');


// var btn = document.querySelector('#btn');

//start ad inizio pagina
window.addEventListener("load", charmenderStarter);






function mostraVeicoli(listaVeicoli) {

    // creaMappa(listaVeicoli);
    if (listaVeicoli.length === 0) {
        nessunVeicolo()

    } else {


        listaVeicoli.forEach(mezzo => {
            var veicolo = mezzo.veicolo;
            var alimentazione = mezzo.alimentazione;
            var disponibilita = mezzo.disponibilita;
            var id = mezzo.id;
            var immagine = mezzo.immagine;
            let modello = mezzo.modello;
            // console.log(immagine);
            // console.log(typeof immagine);
            // var id = veicolo.id;
            var modelloVeicolo = document.createElement("div");
            modelloVeicolo.setAttribute("class", "modello");
            modelloVeicolo.classList.add("ps-2");
            modelloVeicolo.textContent = modello;

            var tipoVeicolo = document.createElement('div');
            tipoVeicolo.setAttribute('class', 'tipo');
            tipoVeicolo.classList.add('ps-2');
            tipoVeicolo.textContent = veicolo;


            var mezzoVeicolo = document.createElement('div');
            mezzoVeicolo.setAttribute('class', 'tipo bi bi-lightning-charge');
            mezzoVeicolo.classList.add("ps-2");
            mezzoVeicolo.textContent = alimentazione;

            var coloreVeicolo = document.createElement('div');
            coloreVeicolo.setAttribute('class', 'desc');
            coloreVeicolo.classList.add("ps-2");

            if (disponibilita == true) {
                var descrizioneDisponibile = document.createElement('div');
                descrizioneDisponibile.setAttribute('class', 'descrizioneDisponibile');
                var disponibilitaSI = document.createElement('div');
                disponibilitaSI.setAttribute('class', 'disponibilitaSI ps-2');
                disponibilitaSI.textContent = "Disponibile";
                descrizioneDisponibile.appendChild(modelloVeicolo);
                descrizioneDisponibile.appendChild(tipoVeicolo);
                descrizioneDisponibile.appendChild(mezzoVeicolo);
                descrizioneDisponibile.appendChild(coloreVeicolo);
                descrizioneDisponibile.appendChild(disponibilitaSI);

                var immagineDisponibile = document.createElement('div');
                immagineDisponibile.setAttribute('class', 'immagineDisponibile');
                immagineDisponibile.setAttribute('style', 'image-orientation:flip;');

                var immagineSrc = document.createElement('img');
                immagineSrc.setAttribute('src', immagine);
                immagineSrc.setAttribute('alt', 'null');
                // immagineSrc.setAttribute('width', '120px');
                // immagineSrc.setAttribute('height', '90px');
                // immagineSrc.setAttribute('width', '200px');
                // immagineSrc.setAttribute('height', 'auto');
                immagineSrc.setAttribute('class', 'image');

                immagineDisponibile.appendChild(immagineSrc);

                var link = "/paginaVeicolo?id=" + id;

                var a = document.createElement('a');
                a.setAttribute('href', link);

                a.appendChild(immagineDisponibile);
                a.appendChild(descrizioneDisponibile);

                var cartaDisponibile = document.createElement('div');
                cartaDisponibile.setAttribute('class', 'cartaDisponibile col-lg-6 d-flex flex-column');

                cartaDisponibile.appendChild(a);

                contenitore.appendChild(cartaDisponibile);
            }
        });
    };
};



function mostraVeicoliNoDisponibile(listaVeicoli) {

    if (listaVeicoli.length === 0) {
        nessunVeicoloNoDisp()

    } else {

        listaVeicoli.forEach(mezzo => {
            var veicolo = mezzo.veicolo;
            var alimentazione = mezzo.alimentazione;
            var disponibilita = mezzo.disponibilita;

            let modello = mezzo.modello;
            // var id = veicolo.id;
            var modelloVeicolo = document.createElement("div");
            modelloVeicolo.setAttribute("class", "modello");
            modelloVeicolo.classList.add("ps-2");
            modelloVeicolo.textContent = modello;

            var tipoVeicolo = document.createElement('div');
            tipoVeicolo.setAttribute('class', 'tipo');
            tipoVeicolo.classList.add('ps-2');
            tipoVeicolo.textContent = veicolo;


            var mezzoVeicolo = document.createElement('div');
            mezzoVeicolo.setAttribute('class', 'tipo bi bi-lightning-charge');
            mezzoVeicolo.classList.add("ps-2");
            mezzoVeicolo.textContent = alimentazione;

            var coloreVeicolo = document.createElement('div');
            coloreVeicolo.setAttribute('class', 'desc');
            coloreVeicolo.classList.add("ps-2");

            if (disponibilita == false) {

                var descrizione = document.createElement('div');
                descrizione.setAttribute('class', 'descrizione');
                var disponibilitaSI = document.createElement('div');
                disponibilitaSI.setAttribute('class', 'disponibilitaNO ps-2');
                disponibilitaSI.textContent = "Non Disponibile";
                descrizione.appendChild(modelloVeicolo);
                descrizione.appendChild(tipoVeicolo);
                descrizione.appendChild(mezzoVeicolo);
                descrizione.appendChild(coloreVeicolo);
                descrizione.appendChild(disponibilitaSI);

                var immagineNoDisp = document.createElement('div');
                immagineNoDisp.setAttribute('class', 'immagine');
                immagineNoDisp.setAttribute('style', 'image-orientation:flip;');

                var immagineSrc = document.createElement('img');
                immagineSrc.setAttribute('src', mezzo.immagine);
                immagineSrc.setAttribute('alt', 'null');
                // immagineSrc.setAttribute('height', '90px');
                // immagineSrc.setAttribute('width', '120px');
                immagineSrc.setAttribute('class', 'image');

                immagineNoDisp.appendChild(immagineSrc);
                // console.log(mezzo.immagine);

                var link = "";

                var a = document.createElement('a');
                a.setAttribute('href', link);

                a.appendChild(immagineNoDisp);
                a.appendChild(descrizione);

                var cartaNoDisponibile = document.createElement('div');
                cartaNoDisponibile.setAttribute('class', 'cartaNoDisponibile col-lg-6 d-flex flex-column');

                cartaNoDisponibile.appendChild(a);

                contenitoreNoDisp.appendChild(cartaNoDisponibile);

            }
        });
    }
}








//check caricamento pagina
//se va inizamo a controllare il tipo, 
//se no facciamo partire la base

function charmenderStarter() {

    const PIPPO = new URLSearchParams(window.location.search)
    let tipologia = PIPPO.get("tipo");
    let alimentazione = PIPPO.get("alimentazione");


    if (tipologia != null || alimentazione != null) {

        if (alimentazione == null) {
            stampaTipo(tipologia);
        } else {
            stampAlimentazione(alimentazione);
        };

    } else {
        inizioPagina();
    }

}




function stampaTipo(tipologia) {
    switch (tipologia) {
        case "BICICLETTE":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOTIPO + "BICICLETTA")
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    mostraVeicoli(response);
                    mostraVeicoliNoDisponibile(response);
                });
            break;
        case "MONOPATTINI":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOTIPO + "MONOPATTINO")
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    mostraVeicoli(response);
                    mostraVeicoliNoDisponibile(response);
                });
            break;

    }

};

function stampAlimentazione(alimentazione) {
    switch (alimentazione) {
        case "ibride":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOALIMENTAZIONE + "ibrida")
                .then(data => {
                    return data.json()
                })
                .then(response => {


                    let variabiliAuto = response.filter(veicolo => veicolo.veicolo === "AUTO");

                    mostraVeicoli(variabiliAuto)
                    mostraVeicoliNoDisponibile(variabiliAuto)

                });
            break;
        case "elettrica":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOALIMENTAZIONE + "elettrica")
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    let variabiliAuto = response.filter(veicolo => veicolo.veicolo === "AUTO");


                    mostraVeicoli(variabiliAuto)
                    mostraVeicoliNoDisponibile(variabiliAuto)


                });
            break;
    }
};



function caricaDati() {


    var form = document.querySelector('#selectTipo').value;


    switch (form) {
        case "TUTTO":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(VEICOLIMAPPING)
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    mostraVeicoli(response)
                    mostraVeicoliNoDisponibile(response)
                });
            break;
        case "AUTO":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOTIPO + "AUTO")
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    mostraVeicoli(response)
                    mostraVeicoliNoDisponibile(response)
                });
            break;
        case "IBRIDE":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOALIMENTAZIONE + "ibrida")
                .then(data => {
                    return data.json()
                })
                .then(response => {


                    let variabiliAuto = response.filter(veicolo => veicolo.veicolo === "AUTO");

                    mostraVeicoli(variabiliAuto)
                    mostraVeicoliNoDisponibile(variabiliAuto)

                });
            break;
        case "ELETTRICHE":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOALIMENTAZIONE + "elettrica")
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    let variabiliAuto = response.filter(veicolo => veicolo.veicolo === "AUTO");


                    mostraVeicoli(variabiliAuto)
                    mostraVeicoliNoDisponibile(variabiliAuto)


                });
            break;
        case "MONOPATTINI":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOTIPO + "MONOPATTINO")
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    mostraVeicoli(response)
                    mostraVeicoliNoDisponibile(response)
                });
            break;
        case "BICICLETTE":
            contenitore.textContent = "";
            contenitoreNoDisp.textContent = "";
            fetch(GETVEICOLOTIPO + "BICICLETTA")
                .then(data => {
                    return data.json()
                })
                .then(response => {

                    mostraVeicoli(response)
                    mostraVeicoliNoDisponibile(response)
                });
            break;

        default:
            break;
    }

}


var selectorTipo = document.querySelector('#selectTipo');
selectorTipo.addEventListener("change", caricaDati);
// btn.addEventListener('click', caricaDati);



// '<div class="veicoloCard col-12 col-md-5 col-lg-3 m-1"><div class="mezzo">' + mezzo + '</div><div class="colore">' + colore +'</div></div>'

function inizioPagina() {
    startMostraDisponibili();
    startMostraNonDisponibili();

}


function startMostraDisponibili() {
    fetch(GETVEICOLIDISPONIBILITA + "true")
        .then(data => {
            return data.json()
        })
        .then(response => {



            mostraVeicoli(response)


            //console.log(response)
        });
}

function startMostraNonDisponibili() {
    fetch(GETVEICOLIDISPONIBILITA + "false")
        .then(data => {
            return data.json()
        })
        .then(response => {
            //console.log(response)
            mostraVeicoliNoDisponibile(response)
        });
}



function nessunVeicolo() {

    let htmlCode = ` <div class="noData">
                      <div class="text-center greyText fs-1">
                          <i class="bi bi-car-front-fill">
                          </i>Nessun veicolo disponibile.
                      </div>
                  </div>`
    contenitore.innerHTML = htmlCode;

}

function nessunVeicoloNoDisp() {

    let htmlCode = ` <div class="noData">
                    <div class="text-center greyText fs-1">
                        <i class="bi bi-car-front-fill">
                        </i>Tutti i veicoli sono disponibili.
                    </div>
                </div>`
    contenitoreNoDisp.innerHTML = htmlCode;

}