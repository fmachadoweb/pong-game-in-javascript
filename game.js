let xBola = 300;
let yBola = 200;
let diametro = 15;
let raio = diametro/2;

let velocidadeXBola = 6;
let velocidadeYBola = 6;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBola, yBola, diametro);
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
  
  if (xBola + raio > width ||
      xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  
    if (yBola + raio > height ||
      yBola - raio < 0){
    velocidadeYBola *= -1;
  }
  
}
