let xPlayer2 = 500;
let yPlayer2 = 550;
let dimensionPlayer2X = 25;
let dimensionPlayer2Y = 14;

let colisaoPlayers = false

let pontosPlayer2 = 0;

let numberPlayers;

numberPlayers = window.prompt("1 ou 2?");

function addNewPlayer() {
  if (numberPlayers == 2) {
    image(
      imagemPlayer2,
      xPlayer2,
      yPlayer2,
      dimensionPlayer2X,
      dimensionPlayer2Y
    );
    mostraPontosPlayer2();
  }
}

function controlePlayer2() {
  if (keyIsDown(87)) {
    yPlayer2 -= 2;
  }
  if (keyIsDown(83)) {
    if (podeSeMoverPlayer2()) {
      yPlayer2 += 2;
    }
  }
  if (keyIsDown(65)) {
    if (bloqueaAsLateraisPlayer2()) {
      xPlayer2 -= 2;
    }
  }
  if (keyIsDown(68)) {
    if (bloqueaAsLateraisPlayer2()) {
      xPlayer2 += 2;
    }
  }
}

function verificaColisaoPlayer2() {
  for (let i = 0; i < imagemCarros.length; i++) {
    recebeValorDaColisao = collideRectCircle(
      PosicaoEmXDosCarros[i],
      PosicaoEmYDosCarros[i],
      dimensaoCarroX,
      dimensaoCarroY,
      xPlayer2,
      yPlayer2,
      2
    );
    if (recebeValorDaColisao) {
      voltaPlayer2NaPosicaoInIcial();
      somPontos.play();
      if (descontaPontosPlayer2()) {
        pontosPlayer2 -= 1;
      }
    }
  }
}

function descontaPontosPlayer2() {
  return pontosPlayer2 > 0;
}

function voltaPlayer2NaPosicaoInIcial() {
  yPlayer2 = 550;
}

function mostraPontosPlayer2() {
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(pontosPlayer2, 1000, 25);
}

function calculaPontosPlayer2() {
  if (yPlayer2 < 15) {
    pontosPlayer2 += 1;
    voltaPlayer2NaPosicaoInIcial();
    somPontos.play();
  }
}

function podeSeMoverPlayer2() {
  return yPlayer2 < 550;
}

function bloqueaAsLateraisPlayer2() {
  return yPlayer2 <= 550;
}

function colisaoEntreOsPlayers(){
  colisaoPlayers = collideCircleCircle(xPlayer2,yPlayer2,15,xPersonagem,yPersonagem,15)
  
  if(colisaoPlayers){
    console.log("bateu")
    xPlayer2 -= 25
    yPlayer2 -= 25
    xPersonagem += 25
    yPersonagem += 25
  }
}
