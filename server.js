const http = require('http');

const myName = 'Kumar Abhishek';

const server = http.createServer((req, res) => {
  res.end(myName);
});

const PORT = 4000;
server.listen(PORT, () => console.log(myName));