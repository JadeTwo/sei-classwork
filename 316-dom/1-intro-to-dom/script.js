console.log(document.anchors)

const anchors = document.anchors;

// for (let anchor of anchors) {
//     console.log(anchor);
// }

for (let i = 0; i < anchors.length; i++) {
    console.log(anchors[i]);
}

const body = document.body;

console.log('parentNode: ', body.parentNode)
console.log('childNodes: ', body.childNodes)
console.log('lastChild: ', body.lastChild)
console.log('firstChild: ', body.firstChild)
console.log('previousSibling: ', body.previousSibling)
console.log('nextSibling: ', body.nextSibling)

const p = document.querySelector("li > p");

console.log("parent of P: ", p.parentNode);

const ulTag = document.querySelector("ul");

while (ulTag.firstChild) {
    const removedEl = ulTag.removeChild(ulTag.firstChild);
    console.log(removedEl);
}
 
// body.innerHTML = '<h1>Hello World!</h1>';

// make an achor tag
// set its href attribute

let anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.setAttribute("class", "abc");
anchor.textContent = "Click Here!";

anchor.classList.add("efg", "hij", "klm");
anchor.classList.remove("klm");
anchor.classList.toggle("klm");
anchor.classList.toggle("klm");
console.log(anchor.classList.contains("klm"));
anchor.classList.replace("abc", "klm");

 // return a collection of class names
 console.log(anchor.classList)

document.body.appendChild(anchor);


// make a div element
const div = document.createElement("div");

// appendChild, insertBefore, prepend 

// removeChild, remove, replace

ulTag.style.backgroundColor = "orange";

document.body.innerText = "<h1>Hello DOM!</h1>"