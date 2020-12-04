const http = require('http');

const host = "127.0.0.1";
const port = 8000;
const exampleLink = `Should be like - http://${host}:${port}/div/1/2`;
const favico = `<link rel="icon" href="#">`;

const server = http.createServer(function (request, response) {
    [_, op, a, b] = request.url.split("/");
    calc = {
        "add": (a, b) => (a + b),
        "sub": (a, b) => (a - b),
        "mul": (a, b) => (a * b),
        "div": (a, b) => (a / b)
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    let result;
    if (calc[op] && (!isNaN(a) && !isNaN(b))) {
        a = parseInt(a);
        b = parseInt(b);
        result = calc[op](a, b);
        response.end(
            `${favico}<h2> ${a} ${op} ${b} = ${result} </h2>`
        );
    }
    else if (isNaN(a) || isNaN(b)) {
        response.end(
            `${favico}<h2> Check numbers </h2><h3>${exampleLink}</h3>`
        );
    } else {
        response.end(
            `${favico}<h2> Check operation </h2><h3>${exampleLink}</h3>`
        );

    }

    console.log(request.url);
    console.log(op, a, b, result);
})

server.listen(port, host);

console.log(`Server running at http://${host}:${port}`);