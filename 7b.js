const http = require('http');
const fs = require('fs');
const path = require('path');

const host = "127.0.0.1";
const port = 8000;
const favico = `<link rel="icon" href="#">`;

const server = http.createServer(function (request, response) {
    let dir = request.url.substring(1);
    console.log(dir);

    fs.watch(dir, (eventType, filename) => {
        console.log(eventType);
        console.log(filename);

        let filePath = path.join(dir, filename);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
    })
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(
        `${favico}<h2>Watching ${dir}</h2>`
    );
})

server.listen(port, host);

console.log(`Server running at http://${host}:${port}`);