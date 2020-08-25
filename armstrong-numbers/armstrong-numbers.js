export const isArmstrongNumber = number => {
  if (number === 0) return true;
  const numberOfDigits = Math.floor(Math.log10(number)) + 1;
  return [...Array(numberOfDigits).keys()]
  .map(i => (Math.floor(number / 10 ** i) % 10) ** numberOfDigits)
  .reduce((sum, cur) => sum + cur) === number;
};
