var randomNumber1 = getRandomInt(6);
var randomNumber2 = getRandomInt(6);
function getRandomInt(max)
{
  return Math.floor(Math.random() * Math.round(max)) + 1;
}

//console.log("ranNum1 is "+randomNumber1+" ranNum2 is "+randomNumber2)

document.querySelector("img.img1").src = "images/dice"+randomNumber1+".png";
document.querySelector("img.img2").src = "images/dice"+randomNumber2+".png";

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerText = "Player 1 Wins!";

}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerText = "Draw!";
}
