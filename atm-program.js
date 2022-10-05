var amount = Number(prompt("Enter the amount you want to withdraw", "0"));
var notesOf5000;
var notesOf1000;
var notesOf500;

function generatingMoney() {
  notesOf5000 = parseInt(amount / 5000) - 1;
  notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000) - 1;
  notesOf500 = (amount - notesOf5000 * 5000 - notesOf1000 * 1000) / 500;
}
if (amount % 500 === 0 && amount > 0 && amount <= 20000) {
  if (amount % 5000 === 0) {
    generatingMoney();
  } else if (amount % 5000 !== 0 && amount % 1000 === 0) {
    if (amount < 5000) {
      notesOf5000 = parseInt(amount / 5000);
      notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000) - 1;
      notesOf500 = (amount - notesOf5000 * 5000 - notesOf1000 * 1000) / 500;
    } else {
      generatingMoney();
    }
  } else {
    if (amount < 5000) {
      notesOf5000 = parseInt(amount / 5000);
      notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000);
      notesOf500 = (amount - notesOf5000 * 5000 - notesOf1000 * 1000) / 500;
    } else {
      notesOf5000 = parseInt(amount / 5000) - 1;
      notesOf1000 = parseInt((amount - notesOf5000 * 5000) / 1000);
      notesOf500 = (amount - notesOf5000 * 5000 - notesOf1000 * 1000) / 500;
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
