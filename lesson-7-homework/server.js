const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {
    if (request.url === '/') {
      const html = fs.readFileSync('cache.html', 'utf8');
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(html);
    }
    if (request.url === '/image1.jpeg') {
      const img = fs.readFileSync('image1.jpeg');
      response.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'max-age=10'
      });
      response.end(img);
    }
    if (request.url === '/image2.jpeg') {
      const img = fs.readFileSync('image2.jpeg');
      response.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'no-store'//get a new image every time
      });
      response.end(img);
    }
    if (request.url === '/image3.jpeg') {
      const img = fs.readFileSync('image3.jpeg');
      response.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Cache-Control':'no-cache',
      });
      response.end(img);
    }
  });
  server.listen(3000);
  console.log('server started')