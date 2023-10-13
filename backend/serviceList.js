const http = require("node: http")

const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end();
})

server.listen("", () => {
 console.log()
})