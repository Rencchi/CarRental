let audio = document.querySelector('#audio');

audio.volume = 0.05;

audio.play();

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

var divPulsante = document.querySelector('#pulsante');

var record = document.querySelector('#record');

if(localStorage.getItem('puntiGioco') == null){
    record.textContent ="Record: " + 0 + " s";
} else {
    record.textContent ="Record: " + localStorage.getItem('puntiGioco') + " s";
}


var punteggio = document.querySelector('#punti');

var perso = false;

var i = 0;

var punti = 0;

var punteggioFinale = 0;

var demo = document.querySelector('#demo');
function jump() {
    if (dispatchEvent.classList != "jump") {
        //first it checks if the dino is mid-jump. If not, it makes it jump.
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
            //removes the jump class from the dino once it has jumped so that it can jump again
        }, 300);
    }
}
let checkAlive = setInterval(function () {
 
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );
    

    if(!perso){
        punti++;
    }
    
    punteggio.textContent = (punti/100);
    
    //check for collision
    if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        demo.textContent = "Hai perso!"
        punteggioFinale = (punti/100);
        perso = true;
        
    }


    if(perso && i < 1){
        var btn = document.createElement('button')
        btn.setAttribute('type','button');
        btn.setAttribute('value','Rigioca!');
        btn.setAttribute('onclick','location.reload();')
        btn.setAttribute('class','btn primaryBtn');
        btn.textContent = "Rigioca!";
        divPulsante.appendChild(btn);     
        punteggio.textContent = punteggioFinale;
        if(localStorage.getItem('puntiGioco') < punteggioFinale){
            localStorage.setItem('puntiGioco', punteggioFinale);
        }
        
        btn.addEventListener('onclick', ricarica);
        i++;

    }

}, 10);
document.addEventListener("keydown", function (event) {
    jump();
});

function ricarica(){
   i = 0;

}




