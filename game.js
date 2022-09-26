//variáveis da bolinha 
let xBola = 300;
let yBola = 200;
let diametro = 15;
let raio = diametro/2;

// velocidade da bolinha
let velocidadeXBola = 6;
let velocidadeYBola = 6;


//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBola ();
  movimentarBola ();
  verificarBorda ();
  raquete ();
  movimentarRaquete ();
  
}


function mostrarBola () {
    circle(xBola, yBola, diametro);
}


function movimentarBola () {
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function verificarBorda () {
    if (xBola + raio > width ||
      xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  
    if (yBola + raio > height ||
      yBola - raio < 0){
    velocidadeYBola *= -1;
  }
}

function raquete() {
    rect(xRaquete, yRaquete, wRaquete, hRaquete);
}


function movimentarRaquete () {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
