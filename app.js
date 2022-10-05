function atmWithDrawal2(amount) {
  let fiveThousands,
    oneThousands,
    fiveHundreds,
    remainderAmount,
    amountRemaining = amount;
  if (amount <= 5000) {
    fiveThousands = 0;
    remainderAmount = amount % 1000;
    amountRemaining -= remainderAmount;
    oneThousands = amountRemaining / 1000;
    amountRemaining = amountRemaining - oneThousands * 1000 + remainderAmount;
    fiveHundreds = amountRemaining ? amountRemaining / 500 : 1 / 0.5;
    amountRemaining === 0 && oneThousands--;
  } else if (amount > 5000) {
    let remainderAmount = amount % 5000;
    amountRemaining -= remainderAmount;
    if (amountRemaining === 5000) {
      fiveThousands = 1;
    } else {
      fiveThousands = amountRemaining / 5000 - 1;
    }
    amountRemaining = amountRemaining - fiveThousands * 5000 + remainderAmount;
    remainderAmount = amount % 1000;
    amountRemaining -= remainderAmount;
    oneThousands = amountRemaining / 1000;
    amountRemaining = amountRemaining - oneThousands * 1000 + remainderAmount;
    fiveHundreds = amountRemaining ? amountRemaining / 500 : 1 / 0.5;
    amountRemaining === 0 && oneThousands--;
  }
  return { fiveHundreds, fiveThousands, oneThousands };
}
console.log(atmWithDrawal2(18000));
