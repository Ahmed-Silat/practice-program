// ATM Machine Program
var amount = Number(prompt("Enter the amount you want to withdraw"));
var notesOf5000 = parseInt(amount / 5000) - 1;
var notesOf1000 = parseInt((((amount % 5000) + 1) * 5000) / 1000);
var notesOf500 = parseInt((notesOf1000 % 1000) / 500);
var fiveThousand = 0;
var oneThousand = 0;
var fiveHundred = 0;
if (amount % 500 === 0 && amount >= 0 && amount <= 20000) {
  if (amount % 5000 === 0) {
    fiveThousand = notesOf5000;
    oneThousand = notesOf1000;
    fiveHundred = 1000 / 500;
  } else if (amount % 5000 !== 0 && amount % 1000 === 0) {
    fiveThousand = notesOf5000;
    oneThousand = notesOf1000;
    fiveHundred = notesOf500;
  } else {
    fiveThousand = notesOf5000;
    oneThousand = notesOf1000;
    fiveHundred = notesOf500;
  }
  document.write(
    "<h3>" +
      "You will have " +
      fiveThousand +
      " fiveThousand notes " +
      oneThousand +
      " oneThousand notes " +
      fiveHundred +
      " fiveHundred notes " +
      "</h3>"
  );
} else {
  document.write("<h2>Invalid Amount</h2>");
}
