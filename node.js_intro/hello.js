var https = require('http');

https.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('Back-end Development with NodeJS');
}).listen(100);

console.log('My server is running on port 100');

