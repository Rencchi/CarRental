const PIPPO = new URLSearchParams(window.location.search);

let tipo = document.querySelector('#tipo');


if(PIPPO.get('id') == "1"){

    tipo.textContent = "Abbonamento Giornaliero (5,90€/g)";

} else if (PIPPO.get('id') == "2"){

    tipo.textContent = "Abbonamento Settimanale (9,90€/s)";

} else if(PIPPO.get('id') == "3"){

    tipo.textContent = "Abbonamento Mensile (29,90€/m)";

}