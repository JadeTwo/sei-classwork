document.querySelector(".outer").addEventListener(
    "click",  // 1st arg  -> event name
    (event) => { // 2nd arg  -> callback 
        console.log('outer');
        console.log(event)
        event.stopPropagation();
    },
    { capture: true }
)

document.querySelector(".between").addEventListener("click", (event) => {
    console.log('between')
}, { capture: true })

document.querySelector(".inner").addEventListener("click", (event) => {
    console.log('inner')
}, { capture: true })
