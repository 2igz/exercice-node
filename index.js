var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-Type':'text/plain'});
    res.end('tip top ça démarre!');

   
})


.listen(3000);

