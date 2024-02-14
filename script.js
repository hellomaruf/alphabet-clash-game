// function play() {
//   let homeSection = document.getElementById("home-section");
//   homeSection.classList.add("hidden");
//   let playGroundSection = document.getElementById("play-ground-section");
//   playGroundSection.classList.remove("hidden");
// }
function play() {
  removeElementById("home-section");
  showElementById("play-ground-section");
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
    removeBackgroundById(currentAlphabet);
    continueGame();
  } else {
    console.log("you lost your 1 life");
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);
