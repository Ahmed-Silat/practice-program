// ATM Machine Program
/*
var amount = Number(prompt("Enter the amount you want to withdraw", "0"));
var notesOf5000;
var notesOf1000;
var notesOf500 = parseInt((notesOf1000 % 1000) / 500);
// var fiveThousand = 0;
// var oneThousand = 0;
// var fiveHundred = 0;
if (amount % 500 === 0 && amount > 0 && amount <= 20000) {
  if (amount % 5000 === 0) {
    notesOf5000 = parseInt(amount / 5000) - 1;
    notesOf1000 = parseInt((((amount % 5000) + 1) * 5000) / 1000) - 1;
    notesOf500 = (amount - notesOf5000 * 5000 - notesOf1000 * 1000) / 500;
  } else if (amount % 5000 !== 0 && amount % 1000 === 0) {
    if (amount < 5000) {
      notesOf5000 = parseInt(amount / 5000);
      notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000) - 1;
      notesOf500 = (amount - notesOf5000 * 5000 - notesOf1000 * 1000) / 500;
    } else {
      notesOf5000 = parseInt(amount / 5000) - 1;
      notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000) - 1;
      notesOf500 = (amount - notesOf5000 * 5000 - notesOf1000 * 1000) / 500;
    }
  } else {
    if (amount % 5000 !== 0 && amount % 1000 !== 0 && amount % 500 === 0) {
      notesOf5000 = parseInt(amount / 5000);
      notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000);
      notesOf500 = (amount - notesOf1000 * 1000 - notesOf5000 * 5000) / 500;
    } else {
      notesOf5000 = parseInt(amount / 5000) - 1;
      notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000) - 1;
      notesOf500 = ((notesOf1000 % 1000) + 1000) / 500;
    }
  }
  document.write(
    "<h3>" +
      "You will have " +
      notesOf5000 +
      " five Thousand notes " +
      notesOf1000 +
      " one Thousand notes " +
      notesOf500 +
      " five Hundred notes " +
      "</h3>"
  );
} else {
  document.write("<h2>Invalid Amount</h2>");
}
*/

// Custom indexOf method
/*
var text = "Hello world";
function customIndexOf(param) {
  for (var i = 0; i < text.length; i++) {
    if (param === text[i]) {
      return i;
    }
  }
  return i - text.length - 1;
}
console.log(customIndexOf("r"));
*/

// Vowel Program
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
