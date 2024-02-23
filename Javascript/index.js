console.log('Henlo World');

// var escapeChar = "\"I'm gonna be a doctor\", she said";
// var singleQuote = '"I\'m gonna be a doctor", she said';
// var backTick = `"I'm gonna be a doctor", she said`;

// var strNumber = " first";
// var strOne = "This is my" + strNumber + " string";
// console.log(strOne);
// strOne += " but you can have it too";
// console.log(strOne);

// console.log("Length of string one: " + strOne.length);

// array
// var myArray = [["Fei", 20]];

// console.log(myArray);

// myArray.push(["Watermelon", 3.5]);
// console.log(myArray);
// console.log(myArray[1][0]);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(["Apple", 10]);
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

var num1 = 5;

function first() {
    if(typeof num1 != undefined) {
        var num1 = 10;
        return num1 + 5;
    }
}

console.log("First function: " + first());
console.log("Global variable: " + num1);

// next in line function
function nextInLine(arr, item) {
    arr.push(item);

    // return first item and remove it from the array
    return arr.shift();
}

var test = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(test));
console.log(nextInLine(test, 6));
console.log("After: " + JSON.stringify(test));

// If statement can be used with any datatype and usually used with
// equality and inequality operator (== or != or === or !==)
// === will also check both data type
// logical operator (>, >=, <, <=, &&, ||)

// Golf code
var names = ["Home-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if(strokes == 1) {
        return names[0]
    }
    else if(strokes <= par - 2) {
        return names[1];
    }
    else if(strokes == par-1) {
        return names[2];
    }
    else if(strokes == par) {
        return names[3];
    }
    else if(strokes == par + 1) {
        return names[4];
    }
    else if(strokes == par + 2) {
        return names[5];
    }
    else {
        return names[6];
    }
}

console.log(golfScore(4, 2))


// sequential
// var n = 5;
// console.log("Value n = " + n);
// n -= 3;
// console.log("Value n = " + n);
// n += 10;
// console.log("Value n = " + n);

// switch statement
// function switchStatement(opt) {
//     switch(opt) {
//         case 1:
//             console.log("You have been directed to page a");
//             break;
//         case 2:
//             console.log("You have been directed to page b");
//             break;
//         case 3:
//         case 4:
//             console.log("You have been directed to page c");
//             break;
//         case "Admin":
//             console.log("You have been directed to admin page");
//             break;
//         default:
//             console.log("You have been kicked");
//             break;
//     }
// }

// switchStatement(3);
// switchStatement(5);
// switchStatement("Admin");


// object
// var myCat = {
//     "name": "Jessie",
//     "age": 3,
//     "tail": 1,
//     "friend": ["Momo", "Brownie"]
// }

// console.log(myCat.friend[0]);
// console.log(myCat["age"]);
// var search = "tail";
// console.log(myCat[search]);

// myCat.name = "Charlie";
// console.log(myCat.name);

// myCat["sound"] = "Meow";
// console.log(myCat.sound);

// delete myCat.sound;
// console.log(myCat);

// to check whether it has a certain property
// function checkProp(prop) {
//     if(myCat.hasOwnProperty(prop)) {
//         return myCat[prop];
//     }

//     return "There's no such property";
// }

// console.log(checkProp("name"));
// console.log(checkProp("sound"));


// array of objects
var myDogs = [
    {
        "name": "Alpha",
        "age": 4
    },
    {
        "name": "Beta",
        "age": 2
    }
]

console.log(myDogs[0]["name"]);
console.log(myDogs[1].name);


// nested objects
// var myDogss = {
//     "first dog": {
//         "name": "Alpha",
//         "age": 4
//     },
//     "second dog": {
//         "name": "Beta",
//         "age": 2
//     }
// }

// console.log(myDogss["first dog"].name);
// console.log(myDogss["second dog"]["age"]);

// var search = "first dog";
// myDogss[search]["tail"] = 2;
// console.log(myDogss);

// myDogss["second dog"]["age"] = 5;
// console.log(myDogss);

// delete myDogss["first dog"]["tail"];
// console.log(myDogss);


// nested for loop - 2 dimensions
var arr = [
    [1, 2],
    [3, 4], 
    [5, 6]
];

for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

// iterating through an array
// increment
var names = ["Jessie", "Momo", "Brownie"];
var total = 0;

for(var i = 0; i < names.length; i++) {
    total++;
}

console.log(total);

//decrement
// for loop
// var food = 60;
// var fed = 0;

// for(var i = food; i >= 10; i -= 10) {
//     fed++;
// }

// console.log("Animals fed (for loop): " + fed);

// while loop
// var food = 50;
// var fed = 0;

// while(food >= 10) {
//     fed++;
//     food -= 10;
// }

// console.log("Animals fed (while): " + fed);

// do-while loop
// var food = 50;
// var fed = 0;

// do {
//     fed++;
//     food -= 10;
// } while(food >= 10);

// console.log("Animals fed (do-while): " + fed);

// if - else
// var duck = 15;
// if(duck % 3 == 0) {
//     console.log("Enough quack");
// }
// else {
//     console.log("Buy more duck");
// }

// // else if
// var duck = 10;
// if(duck < 3) {
//     console.log("Less than 3")
// }
// else if(duck < 6) {
//     console.log("More than 3 but less than 6");
// }
// else if(duck == 9) {
//     console.log("Perfect amount")
// }
// else {
//     console.log("Too many");
// }

// math.random and math.floor
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

console.log(randomNumber(10));


// parseInt and string parse
function parseToBinary(str) {
    // to convert into a binary
    return parseInt(str, 2);
}

function parseToInt(str) {
    return parseInt(str);
}

console.log(parseToBinary("1111"));
console.log(parseToInt("2222"));


// additional -> ternary condition
// condition ? if-true : if-false
// function isRemainingZero(arg1) {
//     return arg1 % 2 == 0 ? true : false;
// }

// console.log(isRemainingZero(8));
// console.log(isRemainingZero(9));

// arrow function with filter and map function
// const realNum = [2, 3.4, 5, -2.4, -5, 3.9, 1];
// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
//     return squaredIntegers;
// };

// console.log(squareList(realNum));

// arrow function
// const concat1 = function(str1, str2) {
//     return str1.concat(str2);
// };

// console.log(concat1([1, 22], [333, 4444, 55555]));

// const concat2 = (str1, str2) => str1.concat(str2);
// console.log(concat2([5, 44], [333, 2222, 11111]));


// higher order function
// function firstFunction() {
//     return function(number) {
//         console.log(`Number ${number}`);
//     }
// }

// var secondFunction = firstFunction();
// secondFunction(5);

// default parameter, higher order arrow function
// const decrement = (function() {
//     return function decrement(num, val = 1) {
//         return num - val;
//     }
// })();

// console.log(decrement(4));
// console.log(decrement(4,2));


// rest operator -> allows us to take variable num of arguments
var higherOperator = (function() {
    // arg variable can contains many variables
    return function higherOperator(...arg) {
        /* for all the first and second value sin arg, it will be
        added with the initial value is 0 */
        return arg.reduce((a,b) => a + b, 0);
    };
})();

var higherOperator2 = (...arg) => arg.reduce((a, b) => a + b, 0);

console.log(higherOperator(1, 2, 3));
console.log("Second: " + higherOperator2(1, 2, 3));


// spread operator
const arr1 = ["fei", "jessie"];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = "momo";
})();
// kalau mau assign value ke variable  bs pake function kek gini yg di luar

let arr3 = [...arr1];

console.log(arr3);
console.log(arr2);


// destructuring of array and object
// var grades = {"momo": 87, "jessie": 99, "brownie": 95};
// const {"momo" : a, "jessie" : b, "brownie" : c} = grades;
// console.log(b);

// const [d, e, , f] = [2, 3, 4, 5, 6, 7];
// console.log(d, e, f);

// var g = 1, h = 2;
// (() => {
//     [g, h] = [h, g];
// })();

// console.log(g, h);



// destructuring of an object and use it as an argument
const pet = {
    "name": "jessie",
    "age": 3,
    "vaccine": true
};

const half = ({name, age}) => "Its name is " + name + " and it is " + age + " years old.";
console.log(half(pet));


// template literals
// const greeting = `Hello, my name is ${pet.name}!
// I am ${pet.age} years old`;
// console.log(greeting);


// how to create an object old and new
// old
var spaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new spaceShuttle('Jupiter');
console.log(zeus.targetPlanet);
// new
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);


// function makeClass() {
//     // input: celcius, output: fahrenheit
//     class Thermostat {
//         constructor(temp) {
//             /* '_' means that this variable is a private var 
//             that can only be accessed within this class */
//             this._temp = 9/5 * (temp + 32);
//         }

//         // return the last temperature stored in private var
//         get temperature() {
//             return this._temp;
//         }
    
//         // function to update the temperature
//         set temperature(updated) {
//             this._temp = 9/5 * (temp + 32);
//         }

//     }

//     return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(32);
// let temp = thermos.temperature;
// console.log("Before update = " + temp);
// thermos.temperature = 34;
// temp = thermos.temperature;
// console.log("After updated = " + temp);


// import and export
import { capitalizeString } from './strfunction.js';
const str = "hEllo EveRyoNe";

console.log(`Before: ${str}`);
console.log(`After: ${capitalizeString(str)}`);