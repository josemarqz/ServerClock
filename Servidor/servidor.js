const http = require('http');
const server = http.createServer((req, res) =>{

  if (req.url === "/"){
    var time = new Date();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(time));
  }
});
console.log("Server is up");
server.listen(8080);