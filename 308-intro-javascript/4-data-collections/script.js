const names = ["John", "Abagail", "Jerome", "Cynthia"];
const greetings = [];

for (let i = 0; i < names.length; i++) {
  greetings[i] = "Hello, " + names[i] + "!";
  //   console.log(greetings[i]);
}

// index:   0  1  3
let nums = [2, 4, 18];
//                0           1            2                3          4
let movies = ["Space Jam", "Fury", "Shawshank Redemption", "Dune", "Mad Max"];

let firstMovie = movies[0];
// console.log(firstMovie);

// console.log(movies.length); // 5

movies[1] = "Batman";
movies[movies.length] = "Pursuit of the Mind";
// console.log(movies);

movies[10] = "The Wolf of Wall Street";
// console.log(movies);

movies.length = 50;
// console.log(movies);

movies.length = 4;
// console.log(movies);

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

let yourMovies = ["Caddyshack", "Interstellar", "Scarface"];
let myMovies = ["Batman", "The Count of Monte Cristo", "Shrek"];

// "Batman, The Count of Monte Cristo, and Shrek"

let last = myMovies.pop();
let sentence = myMovies.join(", ") + " and " + last;
console.log("sentence: ", sentence);

// let ourMovies = myMovies;

// let ourMovies = myMovies.concat();

// console.log("movies: ", ourMovies);

let movieString = myMovies.join(", ");
console.log("movieString: ", movieString);

myMovies.push("Caddyshack", "Interstellar");
console.log("myMovies: ", myMovies);

myMovies.unshift("Scarface");
console.log("myMovies: ", myMovies);

let lastMovie = myMovies.pop();
console.log("lastMovie: ", lastMovie);

// console.log()
// myMovies.length

// splice
console.log(myMovies);
let removedMovies = myMovies.splice(3, 1, "Spaceballs", "Alien");
console.log(myMovies);
console.log(removedMovies);

// slice
let middleMovies = myMovies.slice(1, 3);
console.log(middleMovies);

// at
let myMovie = myMovies.at(-1);
console.log(myMovie);

// reverse
myMovies.reverse();
console.log(myMovies);

let numArray = [
  // 0  1  2
  [1, 2, 3], // 0 <---
  [4, 5, 6], // 1
  [7, 8, 9], // 2
];

console.log(numArray[0]);
console.log(numArray[0][0]);
console.log(numArray[2][0]);

console.log(numArray[1][1]);

console.log(numArray[0][2]);

let numArrayTwo = [
  [1, 2, 3], //   0
  [4, 5, 6], //   1
  [
    //   2
    [7, 8, 9], //     0
    [10, 11, 12], //    1
    [13, 14, 15], //    2
  ],
];

// flat
console.log(numArrayTwo[2][1][1]);

console.log(numArrayTwo[2][2][2]);

console.log(numArrayTwo.flat(2));

// sort

// [1, true, 'test', [], undefined]

console.log(myMovies);
console.log(myMovies.indexOf("Scarface"));

// forEach

myMovies.forEach((movie, i) => {
  console.log(i + ") " + movie);
});

for (let movie of myMovies) {
  console.log(movie);
}
