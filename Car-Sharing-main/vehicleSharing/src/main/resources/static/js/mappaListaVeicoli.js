const URL_VEICOLI_MAP = "http://localhost:9069/api/veicoli";


stampaMappa();

function stampaMappa() {
    fetch(URL_VEICOLI_MAP)
        .then(data => {
            return data.json()
        }).then(response => {
            creaMappa(response);
            // console.log(response);
        });
}

function creaMappa(veicoli) {
    var map = L.map('map').setView([45.07020969624025, 7.626442497677781], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">SharE</a> contributors'
    }).addTo(map);

    veicoli.forEach(element => {
        // console.log(element.posizione);
        let posizione = element.posizione;
        let numPos = posizione.split(",");

        let num1 = parseFloat(numPos[0]);
        let num2 = parseFloat(numPos[1]);

        L.marker([num1, num2]).addTo(map)
            .bindPopup(element.modello)
            .openPopup()
            .on('dblclick', function() {
                let vId = element.id;
                window.location.assign("http://localhost:9069/paginaVeicolo?id=" + vId);
            });

    });

}