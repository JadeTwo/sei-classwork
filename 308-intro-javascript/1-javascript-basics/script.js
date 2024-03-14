console.log("Hello World!")

var myVariable = "Some value";
let mySecond = true;

// constant
const PI = 3.14;
// PI = 3.1415; // error
console.log('test')
// declaration
let its_pie_day_today;

let SSN = "7898897"
SSN = "391401"
SSN = true
SSN = null
SSN = 123

const something = "123";
console.log(something)
const something2 = "456";
console.log(something2)


// declaration + assign / initialization
// let its_pie_day_today = "awesome!";

// assign / initialization 
its_pie_day_today = "awesome!";

// reassign 
its_pie_day_today = "cool!";


let myVar = true;
let myNum = 1;
let myStr = "test";

console.log(typeof myVar)
console.log(typeof myNum)
console.log(typeof myStr)

// code...

/*
    this
    is 
    a
    multiple
    line
    example
*/

let counter = 1;

{
    let counter = 2;
    // console.log(counter)
}


// console.log(counter);

let number = (3 + 3) * 8 / (10 - 3); // 6

console.log(number)

let newNum = 9;
let newNum2 = 9;
// newNum = newNum + 1;
// newNum += 1;
// newNum++

// newNum = "test";

// newNum -= 3; // error

// console.log(newNum)

// post-increment
console.log(newNum++) // 9
console.log(newNum) // 10

// pre-increment
console.log(++newNum2) // 10
console.log(newNum2) // 10

console.log(3 > 4) // false
console.log(5 < 10) // false
console.log(78 >= 90) // false
console.log(56 <= 44) // false

// loose equality
console.log(10 == 10); // true

// strict equality 
console.log(10 === "10"); // false

console.log(10 != 30) // true

// assignment operator
// =      ex:  let num = 10;

// loose equality operator
// ==     ex:  10 == "10"  -> true

// strict equality operator
// ===     ex:   10 === "10" -> false

// Logical AND where both need to be true
let thisLogic = 3 > 2 && 6 == 6  // true

// Logical OR where one needs to be true
//                false    true
let thisLogic2 = 3 > 3 || 6 == 6  // true

console.log(thisLogic)

// let lightSwitch = true

// console.log(!lightSwitch)