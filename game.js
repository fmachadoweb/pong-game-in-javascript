//variáveis da bolinha 
let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro/2;

// velocidade da bolinha
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//variáveis da raquete
let xRaquete = 0;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//variáveis da raquete oponente
let xRaqueteOponente = 588;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

// Placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBola ();
  movimentarBola ();
  verificarBorda ();
  raquete (xRaquete, yRaquete);
  movimentarRaquete ();
  verificaColisaoRaquete(xRaquete, yRaquete);
  raquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar ();
  marcaPonto ();
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

function raquete(x,y) {
    rect(x, y, wRaquete, hRaquete);
}



function movimentarRaquete () {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBola, yBola, raio);
    if (colidiu) {
        velocidadeXBola *= -1;
    }
}



function movimentaRaqueteOponente(){
  velocidadeYOponente = yBola - yRaqueteOponente - wRaquete/2 -30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar () {
  fill (255)
  text(meusPontos, 200, 26);
  text(pontosOponente, 400, 26);
}

function marcaPonto () {
  if (xBola > 590){
    meusPontos += 1;
  }
  if (xBola < 10){
    pontosOponente +=1;
  }
}
