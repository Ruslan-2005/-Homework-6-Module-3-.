// 3.2.1
let numbers = [1, 2, 1, 4, 1];
let number = 1;
let lastIndex = -1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === number) {
    lastIndex = i;
  }
}

alert(lastIndex);

// 3.2.2
let numbers2 = [5, 2, 9, 1, 5, 6];
let inputNumber = 5;

for (let i = 0; i < numbers2.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < numbers2.length; j++) {
    if (numbers2[j] < numbers2[minIndex]) {
      minIndex = j;
    }
  }
  let temp = numbers2[i];
  numbers2[i] = numbers2[minIndex];
  numbers2[minIndex] = temp;
}

let foundIndex = numbers2.indexOf(inputNumber);
if (foundIndex !== -1) {
  alert(foundIndex);
} else {
  alert('элемент не найден');
}
