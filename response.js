const http = require('http');
const url = require('url');
const server = http.createServer((req , res) => {
    const pathname = url.parse(req.url).pathname;
    
    if (pathname === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome home\n');
      } else if (pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to About Us page\n');
      } else if (pathname === '/node') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my Node Js project\n');
      } 
    
  });
  server.listen(3000);
  
  