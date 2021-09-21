// let str = "23";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));
console.dir([1,2,3]);

const solider ={
    health: 400,
    armor: 100,
    sayHello: function(){
            console.log("Hello");
    }
};

const jonh ={
    health: 100
};

jonh.__proto__ = solider;

// console.log(jonh.armor);
jonh.sayHello();