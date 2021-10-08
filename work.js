// const arr = [1, 2, 3, 4, 5, 7, 8, 9, 9, 6, 7 ,54, 65, 756 , 765];

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }
// const str = prompt("get contact", "");
// const product = str.split(", ");
// console.log(product.join(';'));

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj ={
//     a: 5,
//     b: 1
// };

// const copy2 = obj;
// copy.a = 10;

// console.log(copy2);
// console.log(obj);

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const  numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d=20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[0] = 'sad';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2,5,7];
// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q ={
//     one: 3.52,
//     two: 2
// };  

// const solider ={
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log("Hello");
//     }
// };


// const jonh ={
//     health: 100
// };

// Object.setPrototypeOf(jonh,solider);

// jonh.sayHello();

const box = document.getElementById('box');
console.log(box);

const button = document.getElementsByTagName('button');
console.log(button[1]);

const div = document.createElement('div');
// const text = document.createTextNode('this is text');
div.classList.add('black');
document.body.append(div);