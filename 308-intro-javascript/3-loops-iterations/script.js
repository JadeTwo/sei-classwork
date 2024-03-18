// for (let i = 0; true; i++) {
// 	console.log(i);
//     // break;
// }

// console.log('test')

// Exercises

// #1 - Count down from 10 to 1.

for (let i = 10; i >= 1; i--) {
    // console.log(i);
}

// #2 - Output odd numbers from 1 to 10.

for (let i = 1; i < 11; i += 2) {
    // console.log(i);
}

// #3 - Output even number from 1 to 10.

for (let i = 2; i <= 10; i += 2) {
    // console.log(i);
}

// #4 - Output multiples of 3, starting at 6 and ending at 60.

for (let i = 6; i <= 60; i += 3) {
    // console.log(i);
}

// #5 - Output an increasing number of # symbols, from 1 to 7, as shown below.

for (let i = "#"; i < "########"; i += "#") {
    // console.log(i);
}

let sum = "";
for (let i = 1; i <= 7; i++) {
  sum += "#";
//   console.log(sum);
}

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	// console.log(str[i]);
// };

// for...in loop:

// const str = "Hello World";

// for (const i in str) {
// 	// console.log(str[i]);
// }

// for...of loop:

// const str = "Hello World";

// for (const c of str) {
// 	console.log(c);
// }


// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// while loops:

// initialization
// let x = 30;

// condition
// while (x > 0) {

//     // afterthought
//     x /= 2;
// 	x--; 

//     if (x % 1 != 0) {
//         break;
//     }

//     console.log(x);
// }


// let x = 30;

// for (x = x/2 - 1; x >= 0; x = x/2 - 1) {
// 	if (x % 1 != 0) {
// 		break;
// 	}

// 	console.log(x);
// }

// Exercise #1 - Count down to 0 from a given number.

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// Exercise #2 - Log integers in multiples of 3 as long as they are less than 35.

// let i = 3;

// while (i <= 35) {
//     // console.log(i);
//     // i += 3;
//     i++;
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }

// Exercise #3 - Print integers in multiples of 5 as long as they are less than 100.

// let i = 5;

// while (i <= 100) {
//     console.log(i);
//     i += 5;
// }

// Exercise #4 
// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

// let i = 1;

console.log('test');

// while (i < 20) {
//     i++;
//     if (i % 2 === 0) {
//         console.log(i, i * 3);
//         i *= 3;
//     }
// }

// let i = 0;

// while (i <= 20) {
//     i++;
//     if (i % 2 === 0) {
//         console.log(i * 3);
//     }
// }

// Exercise #6 - Vending Machine 

let cost = 4;
let bill = 10;
let quarters = 0;
let change = bill - cost; // 6 

while (change > 0) {
    change -= 0.25;
    quarters++;
}

// console.log('quarters: ', quarters);
// console.log('dollars: ', quarters / 4)
// console.log('change: ', change)

// console.log(change, quarters / 4);



// Write a while loop for the given output:
//  10, 30, 50, 70, 90
//  20, 40, 60, 80, 100

// - This could be acheived a few ways, be creative.

// Write a while loop that prints all numbers from 500 - 800 
// only if they are divisible by 4.

// Nested Loops

// for (let i = 0; i < 5; i++) {
//     console.log('outer: ', i);
//     for (let j = 0; j < 5; j++) {
//         console.log('inner: ', j)
//     }
// }

// Prime Number (a number only divisible by itself and 1)
// ex: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

outer: for (let i = 2; i < 30; i++) {

    // let isPrime = true;
    
    for (let j = 2; j < i; j++) {
        
        if (i % j === 0) {
            // not prime
            // isPrime = false;
            continue outer;
        }
    }

    // if (isPrime) {
        console.log(i, ' is prime')
    // }
}


// do...while loop

// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while (x > 50);

// 

let x = 1;
let y = 1;

myLoop: while (true) {
	console.log(`Outer loop ${x}.`);
	x++;

	while (true) {
		console.log(`Inner loop ${y}.`);
		y++;

		if (x == 5 && y % 5 == 0) {
			break myLoop;
		} else if (y % 5 == 0) {
			continue myLoop;
		}
	}
}

while (true) {
    // break
}

// for (let i = 0; i < 5; i++) {
//     continue;
//     //
//     //
//     //
// }
// 
// 
// 