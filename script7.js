function getData(keys, values) {
  let result = [];
  for (let i = 0; i < values.length; i++) {
    let obj = {};
    for (let j = 0; j < keys.length; j++) {
      if (values[i][j] !== undefined) {
        obj[keys[j]] = values[i][j];
      }
    }
    result.push(obj);
  }
  return result;
}

let keys = ['имя', 'любимый цвет', 'любимое блюдо'];
let values = [
  ['Василий', 'красный', 'борщ'],
  ['Мария'],
  ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское'],
];

console.log(getData(keys, values));
