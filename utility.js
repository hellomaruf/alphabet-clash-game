// Function for remove element by id
function removeElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// Function for show element by id
function showElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// Get Random Alphabet
function getARandomAlphabet() {
  // get alphabet from a string
  let alphabetString = "qwertyuiopasdfghjklzxcvbnm";
  let alphabets = alphabetString.split("");

  //   console.log(alphabets);

  // generate random number
  let randomNumber = Math.random() * 25;
  let index = Math.round(randomNumber);
  let alphabet = alphabets[index];
  let alphabetUpper = alphabet.toUpperCase();
  return alphabetUpper;
}

function setBackgroundById(elementId) {
    let element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}

function removeBackgroundById(elementId) {
  let element = document.getElementById(elementId)
  element.classList.remove('bg-orange-400')
}