var map = L.map('map').setView([45.06288739513925, 7.674272664923481], 13);

const url = "http://localhost:9069/api/veicoli";

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
}).addTo(map);



    fetch(url)
    .then(data => {
      return data.json()
    })
    .then(response => {
      //console.log(response)
      creaMappa(response)
    });


    function creaMappa(veicoli){
        
        veicoli.forEach(veicolo => {
            var pos = veicolo.posizione;
            let numPos=pos.split(",");
        
            let num1=parseFloat(numPos[0]);
            let num2=parseFloat(numPos[1]);

            L.marker([num1, num2]).addTo(map)
            .bindPopup(veicolo.modello)

        });
        
        }