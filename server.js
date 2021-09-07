const http = require('http');
const port = 10000;
const server = http.createServer(function (req, res) {
    res.end("hello")
});
server.listen(port,()=> {
    console.log(`server running at http://localhost:${port}/`);

});
