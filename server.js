const http = require('http');

http.createServer((req,res)=>{
  res.write("this is the first server");
  res.end();
}).listen(4100);