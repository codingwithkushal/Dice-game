function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomImageSource1 = "./images/" + randomDiceImage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);
  
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImageSource2 = "./images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);
  
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩" + playerName1 + " wins" ;   
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = playerName2 + " wins🚩" ;   
    } else {
      document.querySelector("h1").innerHTML = "Draw" ;   
    }
  }
  
  function setPlayerNames() {
    playerName1 = prompt("Enter Player 1 name:") || "Player 1";
    playerName2 = prompt("Enter Player 2 name:") || "Player 2";
    
    // Update player names on the screen
    document.getElementById("player1").textContent = playerName1;
    document.getElementById("player2").textContent = playerName2;
    
    rollDice(); // Call rollDice after setting player names
  }
  
  
  var playerName1, playerName2; // Declare variables to store player names
  
  window.onload = setPlayerNames; // Call setPlayerNames function when the page loads
  
