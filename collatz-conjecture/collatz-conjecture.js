export const steps = (n, count = 0) => {
  if (n <= 0) throw new Error("Only positive numbers are allowed");
  return n === 1 ? count : steps(n % 2 === 0 ? n / 2 : 3 * n + 1, count + 1);
};