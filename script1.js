let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';

for (let i = 0; i < groceries.length; i++) {
  shoppingList += groceries[i];
  if (i < groceries.length - 1) {
    shoppingList += ', ';
  }
}

console.log(shoppingList);
