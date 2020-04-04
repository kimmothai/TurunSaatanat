// Used for getting a random word from the words array
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function insertAt(baseString, newString) {
  // Adds a new string to the second-to-last index of the headline.
  var inserted = baseString.substring(0, baseString.length- 1) + " " + newString + baseString.slice(-1);
  return inserted;
}

function addSatan() {
  var x = document.getElementsByTagName("h1");
  var words = ["vittu", "perkele", "saatana", "helvetti", "jumalauta"];
  for (var i = 0; i < x.length; i++) {
  var isSymbol = x[i].innerText.slice(-1);
  // Check if the word has to be inserted before the symbol.
  if (isSymbol == '?' || isSymbol == '"' || isSymbol == '”' || isSymbol == '!') {
    x[i].innerText = insertAt(x[i].innerText, words[getRandomInt(words.length)]);
    } else {
      x[i].innerText = x[i].innerText + " " + words[getRandomInt(words.length)];
    }
  }
}

addSatan();