

const http = require("http");

http
  .createServer((req, res) => {
    switch(req.url) {
        case '/test':
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(`Hello World!`);
            res.end();
            break;
        case '/': 
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(`Home Page!`);
            res.end();
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.write(`Not found...`);
            res.end();
            break;
    }
    
  }).listen(3000, () => {
    console.log(`Server running.`);
  });

