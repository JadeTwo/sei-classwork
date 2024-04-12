const name = "Bob";

function sayHello(name) {
    console.log('Hello ' + name)
}

function randomNum(num) {
    return Math.floor(Math.random() * num)
}

function magic() {
    console.log('magic!')
}

async function sendRequest(url, method = 'GET', body = '') {
    try {

        const response = await fetch(url, {
            method: method,
            body: body
        })

        if (!response.ok) {
            throw 'Bad Request'
        }

        const data = await response.json()

        return data

    } catch(err) {
        console.log(err)
        return err;
    }
}

export default { name, sayHello, randomNum, magic, sendRequest }