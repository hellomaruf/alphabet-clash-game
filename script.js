// function play() {
//   let homeSection = document.getElementById("home-section");
//   homeSection.classList.add("hidden");
//   let playGroundSection = document.getElementById("play-ground-section");
//   playGroundSection.classList.remove("hidden");
// }
function play() {
  removeElementById("home-section");
  removeElementById("showScore");
  showElementById("play-ground-section");
  // Set score and life****************************
  setElementValueById("current-life", 5);
  setElementValueById("Current-score", 0);
  continueGame();
}
 
function continueGame() {
  let alphabet = getARandomAlphabet();
  let alphabets = alphabet.toLowerCase();
  let currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabets;
  setBackgroundById(alphabets);
}

function handleKeyboardButtonPress(event) {
  let playerPressed = event.key;
  let currentAlphabetDiv = document.getElementById("current-alphabet");
  let currentAlphabet = currentAlphabetDiv.innerText;
  if (playerPressed === currentAlphabet) {
    console.log("You get a point");
    // functional way to solve***************************
    let score = document.getElementById("Current-score");
    let scoreValue = setTextElementValueById("Current-score");
    let newScoreValue = scoreValue + 1;
    score.innerText = newScoreValue;

    // Bangla way to solve********************************
    // let score = document.getElementById("score");
    // let scoreText = score.innerText;
    // let scoreInt = parseInt(scoreText);
    // let newScore = scoreInt + 1;
    // console.log(newScore);
    // score.innerText = newScore;
    removeBackgroundById(currentAlphabet);
    continueGame();
  } else {
    // Functional way to solve****************************
    let life = document.getElementById("current-life");
    let lifeValue = setTextElementValueById("current-life");
    let newLifeValue = lifeValue - 1;
    life.innerText = newLifeValue;

    if (newLifeValue === 0) {
      removeElementById("play-ground-section");
      showElementById("showScore");
    }

    // Bangla way to solve***************************
    // let currentlife = document.getElementById("current-life");
    // let currentLifeText = currentlife.innerText;
    // let currentLifeInt = parseInt(currentLifeText);
    // let newLife = currentLifeInt - 1;
    // currentlife.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);
