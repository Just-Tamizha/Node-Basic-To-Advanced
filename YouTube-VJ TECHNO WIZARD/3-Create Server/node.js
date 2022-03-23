// Step-1 : Import 'http' libiry using 'require' libiry
var http=require('http');

// Step-2 : create server
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write("Hi! I am Tamizha Here ! ");
    res.end("Thank You! for visitiing!");
}).listen(8080);

// Step-3 : Run terminal using cmd "node node"
