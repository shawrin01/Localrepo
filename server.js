const http = require('http');
const data = require('./data');
// http.createServer((req,res)=>{
//   res.write("this is the first server");
//   res.end();
// }).listen(4100);

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'application\json'});
  res.write(JSON.stringify(data))
  res.end();
}).listen(3900);