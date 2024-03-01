"use strict";
/* UTILITY TYPES */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAsg = (assign, propsToUpdate) => {
    // override object assign w props yg ada di propsToUpdate
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign = {
    studentId: '2540128530',
    title: 'Final project',
    grade: 90,
};
console.log(updateAsg(assign, { grade: 95 }));
// Required and readonly
const assignGraded = updateAsg(assign, { grade: 95 });
const recordAssignment = (assign) => {
    return assign;
};
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log(assignVerified);
/////
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Sara: "A",
    Kelly: "B"
};
const gradeData = {
    Sara: { assign1: 90, assign2: 95 },
    Kelly: { assign1: 80, assign2: 85 }
};
const score = {
    studentId: '1111111',
    grade: 100,
};
const preview = {
    studentId: '324234234',
    title: 'Final Project',
};
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 800);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(error => {
        if (error instanceof Error)
            console.log(error.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
