const http = require("http");
const fs = require("fs");
const host = 'localhost';
const port = 8000;

module.exports =  function run (dataStore) {
    const requestListener = function (req, res) {
        res.writeHead(200);
        // res.end(dataStore);
        // res.sendFile('./cliente/index.html');
        var html = fs.readFileSync('../cliente/index.html', 'utf8')
        res.end(html);
    };
    
    const server = http.createServer(requestListener);

    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
}