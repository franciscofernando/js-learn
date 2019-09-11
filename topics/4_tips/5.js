// Validacion de declaraciones y spreads

const arr = ['apple', 'pear', 'banana'];
const _arr = arr;
const __arr = [...arr];

console.log(arr === _arr, arr === __arr);

arr.pop();

console.log(arr.length === _arr.length, arr.length === __arr.length);