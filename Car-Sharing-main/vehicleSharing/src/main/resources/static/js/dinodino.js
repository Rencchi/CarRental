var img = new Image();
var img2 = new Image();


img.src = "/img/Monopattino2.png";

var ySpeed = 0;

// definiamo la forza di gravità
var gravity = 0.1;



// otteniamo il riferimento al canvas
var canvas = document.getElementById("gameCanvas");
// otteniamo il contesto del canvas, che ci permette di disegnare su di esso
var ctx = canvas.getContext("2d");

// definiamo le coordinate del nostro personaggio
var x = 50;
var y = 50;

// definiamo la velocità del nostro personaggio
var speed = 5;

// definiamo le dimensioni del nostro personaggio
var width = 70;
var height = 70;

// questa funzione viene chiamata ad ogni frame del gioco
function update() {
  // controlliamo se il personaggio ha raggiunto i bordi del canvas
  if (x + width > canvas.width || x < 0) {
    // se sì, invertiamo la direzione del personaggio
    speed *= -1;
}
console.log(x);

if(x == 0){
    img.src = "/vehicleSharing/src/main/resources/static/img/Monopattino2.png";
    ctx.drawImage(img, x, y, width, height);
    
  }

if(x == canvas.width - 70){
    img.src = "/img/Monopattino.png";
    ctx.drawImage(img, x, y, width, height);
    
  }

  // aggiorniamo la posizione del personaggio sommando la velocità
  x += speed;

  // chiamiamo la funzione di disegno
  draw();

  // richiediamo il prossimo frame del gioco
  requestAnimationFrame(update);

  
}

// questa funzione disegna il nostro personaggio sul canvas
function draw() {
  // puliamo il canvas prima di disegnare di nuovo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, width, height);
//   ctx.fillStyle = "red";
//   ctx.fillRect(x, y, width, height);
}

// iniziamo il gioco chiamando la funzione update
update();

