export const rollDice = function (
  numDice,
  dieSides = 20,
  drop = 0,
  disadvantage = false
) {
  const sum = [];
  for (let i = 0; i < numDice; i++) {
    sum.push(Math.floor(Math.random() * dieSides) + 1);
  }
  console.log(sum);
  return (
    sum +
    sum
      .sort((a, b) => (disadvantage ? -1 : 1) * (a - b))
      .slice(drop)
      .reduce((a, b) => a + b)
  );
};

export const rollAdvantage = () => rollDice(2, 20, 1);
export const rollDisadvantage = () => rollDice(2, 20, 1, true);
