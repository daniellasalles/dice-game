var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageLink1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageLink2 = "images/dice" + randomNumber2 + ".png";
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var title = document.querySelector('h1');
var reloadButton = document.querySelector("#reload-btn")


reloadButton.addEventListener('click', function () {
  window.location.reload()
})


function rollDices() {
  dice1.setAttribute('src', imageLink1);
  dice2.setAttribute('src', imageLink2);
}

function setWinner() {
  if (randomNumber1 > randomNumber2) {
    title.textContent = "Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    title.textContent = "Player 2 wins!";
  } else {
    title.textContent = "Draw!";
  }
}


rollDices();
setWinner();

