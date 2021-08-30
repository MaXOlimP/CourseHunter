const arr = [1, 2, 3, 4, 5, 7, 8, 9, 9, 6, 7 ,54, 65, 756 , 765];

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }
const str = prompt("get contact", "");
const product = str.split(", ");
console.log(product.join(';'));