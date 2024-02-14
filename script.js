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
  let currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBackgroundById(alphabet);
}
