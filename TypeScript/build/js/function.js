"use strict";
/* ----------FUNCTION----------*/
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hi");
logMsg(add(3, 4));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(3, 4));
// optional parameters (harus ada di paling belakang dr list)
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 3, b, c = 5) => a + b + c;
console.log(sumAll(10, 4, 10));
console.log(sumAll(undefined, 5));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((acc, curr) => (acc += curr));
};
console.log("rest parameter: " + total(3, 4, 5, 6, 7));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    else if (isNumber(value)) {
        return "number";
    }
    createError("This should never happen");
};
console.log(numberOrString(4));
console.log(numberOrString(true));
