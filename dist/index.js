"use strict";
let id = 5;
let company = "Company";
let isPublished = true;
let x = "any";
let ids = [1, 2, 3, 4];
console.log('ID: ', id);
// ids.push("g"); wont work
let arr = [1, 2, "hello", "world"]; // can have any type
//Tuple
let person = [1, "brad", true];
//Tuple Array
let employee;
employee = [
    [1, "me"],
    [2, "you"],
    // ["them", 3] // won't work because in wrong order
];
//unions
let pID;
pID = 22;
pID = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Left);
