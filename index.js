// Random Numbers

var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Applying random numbers to dice 

var player1 = document.querySelector(".img1").setAttribute("src", "images/" + "dice" + randomNumber1 + ".png");

var player2 = document.querySelector(".img2").setAttribute("src", "images/" + "dice" + randomNumber2 + ".png");

//Choosing winners

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
    
