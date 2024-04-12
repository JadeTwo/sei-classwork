// default export first, comma, followed by named xports
import util from './util.js' 

// object destructuring
// const sendRequest = util.sendRequest
const { sendRequest } = util;

// import * as util from './test.js'

// whatever()


util
    .sendRequest('https://poetrydb.org/title/Ozymandias/lines.json')
    .then(data => console.log(data))

// console.log(util)

// console.log(name)
// console.log(sayHello)

// sayHello(name);