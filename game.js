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

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload (){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.3);
  trilha.loop();
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
      raquetada.play();
    }
}



function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar () {
  stroke (255);
  textAlign (CENTER);
  textSize (16);
  fill (255,140,0);
  rect (150, 10, 40, 20);
  fill (255);
  text(meusPontos, 170, 26);
  fill (255,140,0);
  rect (450, 10, 40, 20);
  fill (255);
  text(pontosOponente, 470, 26);
}

function marcaPonto () {
  if (xBola > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBola < 10){
    pontosOponente +=1;
    ponto.play();
  }
}
