"use strict";

var x = 10;

// data types 8
let number = 42; // number
let string = "Hello, World!"; // string
let boolean = true; // boolean
let nullValue = null; // null
let undefinedValue; // undefined
let symbolValue = Symbol("unique"); // symbol
let bigIntValue = 9007199254740991n; // BigInt
let objectValue = { name: "Alice", age: 30 }; // object

function getCurrentDate() {
  return new Date().toDateString();
}

function getCurrentTime(text, date = getCurrentDate()) {
  // console.log(text + " " + date);
}
getCurrentTime("Current Date is:", "17-06-2026");
getCurrentTime("Current Date is:");

let createArray = new Array();
let arrayValue = [1, 2, 3, 4, 5]; // array

// let arr = ['Apple',{name:'jhon'},true, function(){alert('hello');}];
// arr[3]();
let fruits = ["Apple", "Orange", "Plum"];
//console.log( fruits[fruits.length-1] ); // Plum

// let fruits1 = ["Apple", "Orange", "Plum"];
//console.log(fruits1.pop()); // remove last element (Plum) and alert it
//console.log(fruits1.shift()); // remove first element (Apple) and alert it

// console.log(fruits1.unshift("Grape")); // add element to the beginning and alert the new length
// console.log(fruits1); // remaining elements: Grape, Orange (at index 0)

// for ( let fruit of fruits) {
//     console.log(fruit);
// }

// for( let key in fruits) {
//     console.log(key);
// }

const obj = new Object();
obj.name = "John";
obj.age = 30;
obj.isStudent = true;
console.log(obj); // John

const obj1 = {
  name: "John",
  age: 30,
  isStudent: true,
};
console.log(obj1); // { name: "John", age: 30, isStudent: true }

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};
console.log(bag.appleComputers); // 5

// DOM
document.getElementById("title");
document.getElementById("title").id;
document.getElementById("title").className;
document.getElementById("title").getAttribute("class");
document.getElementById("title").getAttribute("id");
document.getElementById("title").setAttribute("class", "fazlu rehman");
document.getElementById("title").id;
const title = document.getElementById("title");
title.style.backgroundColor = "green";
title.style.color = "white";
title.style.padding = "15px";
title.style.borderRadius = "10px";
title.textContent;
title.innerText;
title.innerHTML;
document.getElementsByClassName('heading')
document.querySelector('#title')
document.querySelector('h2')
document.querySelector(".heading");
document.querySelector('input[type="password"]');
document.querySelectorAll('li');
templist.forEach(function (l){
   l.style.backgroundColor = 'red' ;
    l.style.color = "white";
    
});
const listItems = document.getElementsByClassName('list-item');
const myconvertedArr Array.from(listItems);
myconvertedArr.forEach( function (ll) {
    ll.style.backgroundColor= "yellow";
});
// NODElist 