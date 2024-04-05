function a() {
    console.log(2);
    c();
    console.log(6);
}

function b() {
    console.log(4);
}

function c() {
    console.log(3);
    b();
    console.log(5);
}

console.log(1);
a(); // undefined
console.log(7);