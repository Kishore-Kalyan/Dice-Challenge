// changing image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1)
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

// changing image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2)
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

var title = document.querySelector("h1")

if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 won 🚩";
else if (randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = "Player 2 won 🚩";
else
    document.querySelector("h1").innerHTML = "It's a draw 🤝";