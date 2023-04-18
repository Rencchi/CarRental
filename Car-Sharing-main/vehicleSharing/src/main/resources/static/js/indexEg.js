var eg = document.querySelector('#eg');

var i = 0;

function controllo(){
    i++;

    console.log(i);

    if (i == 4) {
        window.location.replace("/SharEAndTheMysticEScooter");
    }

}

eg.addEventListener('click',controllo);