let basePrice = 10000;
let cpuPrice = 5000;
let ramPrice = 3000;
let ssdPrice = 2000;

function calculateTotalPrice(cpu, ram, ssd) {
  let totalPrice = basePrice;
  if (cpu) totalPrice += cpuPrice;
  if (ram) totalPrice += ramPrice;
  if (ssd) totalPrice += ssdPrice;
  return totalPrice;
}

let totalPrice = calculateTotalPrice(true, true, false);
alert('Итоговая цена: ' + totalPrice);
