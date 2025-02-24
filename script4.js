function getPrice(hours, isUrgent) {
  let rate = 1500;
  if (isUrgent) {
    hours /= 2;
    rate *= 2.5;
  }
  if (hours > 150) {
    rate -= 250;
  }
  return hours * rate;
}

alert(getPrice(160, true));
