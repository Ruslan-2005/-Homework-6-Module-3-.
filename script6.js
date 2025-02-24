function getSortedArray(array, key) {
  return array.sort((a, b) => a[key] - b[key]);
}

let data = [
  { name: 'Петя', age: 5 },
  { name: 'Лёля', age: 2 },
  { name: 'Сима', age: 3 },
];

console.log(getSortedArray(data, 'age'));
