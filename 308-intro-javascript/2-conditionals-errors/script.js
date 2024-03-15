// console.log(test3); 

console.log('test');

// alert('test')

// var test3;



// {
//     let test = 123;
//     const test2 = 123;
//     // var test3 = 123;
// }



// console.log(test)

var x = 10;
var y = 5;

{
    let y = 6;
	let z = x + y;
    console.log(z);
}

var x123 = 100;

console.log(x);
console.log(y);


let number = -2;

// CONDITIONALS (if statements)

if ("") {
    // -> execute code here (if true)
    console.log('x is 10');
    console.log('x is 10');
    console.log('x is 10');
} else {
    // else block
    console.log('else')
}
console.log('next thing')


var x = 5;

if (x > 0) {
	console.log('Positive!');
    console.log('Positive!');
    let test;
} else {
	console.log('Negative.');
}

let money = 10; // -> undefined
let food; // -> undefined

if (money) {
    console.log(':)')
    if (food) {
        console.log(':) !')
    } else {
        console.log(':( !')
    }
} else {
    console.log(':(')
}

if (money > 10) {
    console.log(':)')
} else if (money > 5) {
    console.log(':|')
} else if (money > 1) {
    console.log(':(')
} else {
    console.log(':C')
}

let grade = "G"

// SWITCH STATEMENT

switch (grade) {
    case "A": 
        console.log('Learner got 90 or higher')
        break;
    case "B":
        console.log('Learner got 80 or higher')
        break;
    case "C":
        console.log('Learner got 70 or higher')
        break;
    case "D":
        console.log('Learner got 55 or higher')
        break;
    case "F":
       console.log('Learner got 55 or less')
       break;
    default: 
        console.log('Not an actual grade')
        break;
}
//


var x = 5;
var y = 4;

let operand = "*";

switch (operand) {
   case "+":
       console.log(x + y);
       break;
   case "-":
       console.log(x - y);
       break;
   case "*":
       console.log(x * y);
       break
   case "/":
       console.log(x / y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}

// TERNARY OPERATOR


let c = 10;
let isTen = c == 10 ? true : false;

c == 10 ?    //   1
true :   //  2
false    //  3

// ERRORS

try {
	if (x < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
        console.log('testing');
	}
} catch (error) {
    console.log(error)
}

console.log("Does this log?")


var x = 10;

try {
	if (x > 0) {
		let isEven = (x % 2 == 0) ? true : false;
	} else if (x <= 0) {
		throw "Error - Value of 0 or below.";
	}
	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(x);
}



var x = 5;

// if (x > 0) {
// 	console.log('Positive!');
// 	x++;
// else
// 	console.log('Negative.');
// 	x--;