"use strict";
// convert pada type yang lebih atau kurang spesifik
let e = 'hello';
let f = e; //convert to less specific types
let g = e; //convert to more specific type
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// as string reassures ts bahwa kita tahu returnnya adalah string
let typeAssertion = addOrConcat(2, 2, 'concat');
// DOM
const img = document.querySelector('img');
// ! as non null assertion
const myImg = document.getElementById('#img');
img.src;
myImg.src;
