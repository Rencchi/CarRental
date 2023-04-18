
function prendiposizione(){
    const PIPPO = new URLSearchParams(window.location.search)
    PIPPO.get("id")
    fetch(GETVEICOLIBYID + PIPPO.get("id"))
        .then(data => {
            return data.json()
        })
        .then(response => {
            console.log(response)

            creaMappa(response);
            
        })

}


function creaMappa(veicolo){
var pos=veicolo.posizione

let numPos=pos.split(",");

let num1=parseFloat(numPos[0]);
let num2=parseFloat(numPos[1]);

var map = L.map('map').setView([num1,num2], 16);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
}).addTo(map);

L.marker([num1, num2]).addTo(map)
    .bindPopup('Posto Attuale del Veicolo')
    .openPopup();

}





