let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let changedImage1 = "images/dice" + randomNumber1 + ".png";
let changedImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src",changedImage1);
document.querySelector(".dice .img2").setAttribute("src",changedImage2);

function winner() {
  if(randomNumber1 > randomNumber2){
    document.selectElementByClassName(".title").setAttribute("h1", "Player 1 Wins! Hooray!");
  }
  else if (randomNumber1 === randomNumber2){
    document.selectElementByClassName(".title").setAttribute("h1", "It's a draw!");
  }
else {
  document.selectElementByClassName(".title").setAttribute("h1", "Player 2 Wins! Hooray!");
}
}

winner();
