var mySong;
var fft;
var opafundo;

function preload(){
  // put preload code here
  mySong = loadSound('./assets/watadori.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);

  // CORES
cor1 = color(10,100,100);
cor2 = color(20,100,100);
cor3 = color(30,100,100);
cor4 = color(40,100,100);

  // put setup code here
  analisaAMP0 = new p5.Amplitude(0.99);
  analisaAMP0.setInput = (mySong);

  analisaAMP1 = new p5.Amplitude(0.75);
  analisaAMP1.setInput = (mySong);

  analisaAMP2 = new p5.Amplitude(0.5);
  analisaAMP2.setInput = (mySong);

}
function mousePressed() {
  if ( mySong.isPlaying() ) { // .isPlaying() returns a boolean
    mySong.stop();
    redraw();
  } else {
    mySong.play();
  }
}
function draw() {

  //COR BACKGROUND
  background(0,0,opafundo);

  opafundo = analisaAMP0.getLevel()*60;
  fill(50);
  text(opafundo, 10, 10, 70, 80);
  console.log(opafundo);

  if ( opafundo > 30 ) { // .isPlaying() returns a boolean
    background(0,0,40)
  } else {
    background(0,0,opafundo)
  }

//CIRCULO BRANCO
  if ( mySong.isPlaying() ) { // .isPlaying() returns a boolean
    fill(0,0,0,0);
    ellipse(windowWidth/2, windowHeight/2, windowWidth/8);
  } else {
    fill(100,0,100,1);
    background(0);
    ellipse(windowWidth/2, windowHeight/2, windowWidth/8);
    fill(50);
    triangle(windowWidth/2-width/65, windowHeight/2-width/50, windowWidth/2-width/65, windowHeight/2+width/50, windowWidth/2+width/50, windowHeight/2);

  }

// ITEM VARIAVEL COM AMPLITUDE 1 (MAIS SMOOTH)
var vAMP = analisaAMP1.getLevel();
// fill(127);
stroke(0);
// ellipse(width/2, height/2, 10+vAMP*200, 10+vAMP*200);
// shapeMode(CENTER);
fill(1000*vAMP,100,100);
noStroke();
beginShape();
//cima direita
vertex(width/2+width/100*vAMP*100, height/2);
//baixo direita
vertex(width/2, height/2+width/100*vAMP*100);
//baixo esq
vertex(width/2-width/100*vAMP*100, height/2);
//cima esq
vertex(width/2, height/2-width/100*vAMP*100);
endShape(CLOSE);

// ITEM VARIAVEL COM AMPLITUDE 2 (MENOS SMOOTH)
var vAMP2 = analisaAMP2.getLevel();
// fill(127);
stroke(0);
// ellipse(width/2, height/2, 10+vAMP*200, 10+vAMP*200);
// shapeMode(CENTER);
fill(1000*vAMP2,100,100);
noStroke();
beginShape();
//cima direita
vertex(width/2+width/150*vAMP2*100, height/2);
//baixo direita
vertex(width/2, height/2+width/150*vAMP2*100);
//baixo esq
vertex(width/2-width/150*vAMP2*100, height/2);
//cima esq
vertex(width/2, height/2-width/150*vAMP2*100);
endShape(CLOSE);

}
function windowResized(){

resizeCanvas(windowWidth,windowHeight);

}
