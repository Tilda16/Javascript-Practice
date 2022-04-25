let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let changedImage1 = "images/dice" + randomNumber1 + ".png";
let changedImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src",changedImage1);
document.querySelector(".dice .img2").setAttribute("src",changedImage2);
