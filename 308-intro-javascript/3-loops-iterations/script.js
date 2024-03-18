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

// const str = "Hello World";

// for (const i in str) {
// 	// console.log(str[i]);
// }

const str = "Hello World";

for (const c of str) {
	console.log(c);
}

