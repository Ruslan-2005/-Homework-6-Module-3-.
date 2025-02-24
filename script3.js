let calculateSalary = function (grossSalary) {
  let taxRate = grossSalary >= 100000 ? 0.45 : 0.35;
  let netSalary = grossSalary * (1 - taxRate);
  return Math.round(netSalary);
};

console.log(calculateSalary(80000));
console.log(calculateSalary(120000));
