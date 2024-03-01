"use strict";
/* GENERICS
placeholder dalam bentuk variable untuk membuat functions, classes,
dan interfaces yang dapat menggunakan berbagai data types namun masih
memastikan adanya type safety*/
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj('fei'));
console.log(isObj(null));
console.log(isObj(40));
console.log(isObj({ name: 'Fei', umur: 21 }));
console.log(isObj(['Fei', 'Feii', 'Feiii']));
//////
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log('=======================');
console.log(isTrue(false));
console.log(isTrue(9));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue({}));
console.log(isTrue({ name: 'Fei' }));
console.log([]);
console.log([3, 4, 5]);
const checkBoolValue = (value) => {
    if (Array.isArray(value) && !value.length) {
        return { value, is: false };
    }
    if (isObj(value) && !Object.keys(value).length) {
        return { value, is: false };
    }
    return { value, is: !!value };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Fei' }));
// console.log(processUser({name: 'Fei'}))
const getUsersProperty = (users, key) => {
    return users.map(u => u[key]);
};
const usersArr = [
    {
        id: 1,
        name: 'fei',
        semester: 6
    },
    {
        id: 2,
        name: 'jessie',
        semester: 4
    }
];
console.log(getUsersProperty(usersArr, "name"));
//generics in class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('fei');
console.log(store.state);
store.state = 'feiii';
// store.state = 21
const myState = new StateObject([15, 16]);
myState.state = (['fei', 21, true]);
console.log(myState.state);
