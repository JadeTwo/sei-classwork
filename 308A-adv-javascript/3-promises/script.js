
// .then and .catch methods
// doSomething()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThirdThing(newResult))
//   .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
//   .catch(failureCallback);

// async/await 
async function foo() {
    try {
      const result = await doSomething(); 
      const newResult = await doSomethingElse(result);
      const finalResult = await doThirdThing(newResult);
      console.log(`Got the final result: ${finalResult}`);
    } catch (error) {
      failureCallback(error);
    }
}

// arrow function example
// const foo = async () => {}


// function resolveAfterSeconds(t) {
//     const myPromise = new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, t * 1000);
//     });

//     return myPromise;
// }

// async function testAwait() {
//     console.log('Testing...');
//     const result = await resolveAfterSeconds(2);
//     console.log(result);
//     console.log('test123')
// }

// testAwait();


// async function example() {
//     return "hello"
// }

// const result = example()
// console.log(typeof result);

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log("Cat"));

// Promise.resolve()
//   .then(() => console.log("Dog")) // -> new Promise()
//   .then(() => console.log("Cow")); // -> new Promise()

// console.log("Bird");



// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(10 * 3000)
//     .then(() => console.log('done waiting'))



// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));




// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p1 finished')
//     }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('p2 failed')
//     }, 3000)
// })


// Promise
//     .allSettled([p1,p2])
//     .then(x => console.log(x))
//     .catch(err => console.log('error: ', err))

// Promise
//     .resolve('testing')
//     .then(x => console.log(x))


// // Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//     let result = Math.floor(Math.random() * 2)
//     if (result === 1) {
//         setTimeout(() => {
//             resolve('Guess it worked')
//         }, 1000)
//     } else {
//         setTimeout(() => {
//             reject('It did not work')
//         }, 1000)
//     }
// })


// myPromise
//     .then((x) => x + ' Again')
//     .then((x) => x + ' Third time!')
//     .then((x) => console.log(x))
//     .catch((err) => console.log('error: ', err))
//     .then(() => console.log('got here in the end'))

// console.log(myPromise)
