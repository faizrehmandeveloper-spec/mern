// 1. numeric array  //must know
let num_arr = [0,1,2,3,4,5,6,7,8];

// 2.string arrays  //must know
let str_arr = ["apple","mango","banana"];

// 3. boolean array 
let bool_arr = [true,false,true];

// 4. mixed array 
let mix_arr = [1,"faiz",{name:"fazlu",last_name:"rehman"},true,null];

// 5. object array  //must know
let obj_arr = [
    {
        name :"fazlu"
    },
    {
        name: "rehman"
    }
];
// 6. 2D Array //must know
 
let two_d_arr = [
    [1,2],
    [3,4]
]

// 7.multi deminsoinal array
let multi_dem_arr = [
    [[1,2],[3,4]],[[5,6],[7,8]]
];

// 8. spare array 
let arr = [];
arr[5] = "Hello";

// 9. empty array  //must know
let emp_arr  = [];

// 10. nested object array  //must know
let nes_obj_arr = [
    {
        name:"faiz",
        skills:["HTML","CSS","JS"]
    },
    {
        name:"rehman",
        skills:["PYTHON","JAVA"]
    }
];


// in built function for arrays 

// remove last element of array    c
const pop_arr =  [1,2,3,4,5,6,7,8,9]; 
pop_arr.pop();

// add element to last in array 
const push_arr = ['first','second'];
push_arr.push('third');

// remove first element of array 
const shift_arr = [1,2,3,4,5,6,7,8];
shift_arr.shift();

// add first element in array 
const unshift_arr = [2,3,4,5,6,7,8];
unshift_arr.unshift(1);


// splice function use for add insert delete or replace array values 

const arr5 = ["HTML","CSS","React"];

arr5.splice(2,0,"JavaScript");
// const arr5 = ['apple','bnana','mango'];
// Kahan se start karna hai? → startIndex
// Kitne elements delete karne hain? → deleteCount
// Kaun se naye elements insert karne hain? → newItems
// arr5.splice(1,2,'papaya'); // Insert


console.log(arr5);
// console.log(arr5);
// arr5.splice(1,1,100); // Replace


