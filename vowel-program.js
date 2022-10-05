var text = "Please read this application and give me gratuity";
var array = text.split(" ");
console.log(array);
var pairOfVowels = [];
var setOfVowels = [];
function checkVowel(param) {
  switch (param) {
    case "a":
      return true;
    // break;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}

for (var i = 0; i < array.length; i++) {
  var word = array[i].split("");
  for (var j = 0; j < word.length - 1; j++) {
    var pair = word[j] + word[j + 1];
    pairOfVowels.push(pair);
  }
}
console.log(pairOfVowels);

for (var i = 0; i < pairOfVowels.length; i++) {
  var splittedPair = pairOfVowels[i].split("");
  var firstLetter = splittedPair[0];
  var secondLetter = splittedPair[1];
  if (checkVowel(firstLetter) && checkVowel(secondLetter)) {
    setOfVowels.push(pairOfVowels[i]);
  }
}
console.log(setOfVowels);
