 const express = require('express');
  const app = express();
   

  app.get("",(req,res)=>{
      console.log("data from browser =", req.query.name)
        res.send('WELCOME '+req.query.name);
  })
  app.get('/about',(req,res)=>{
    res.send(`
      <button>click me</button>
      `);
})
app.get('/help',(req,res)=>{
      res.send([
            {
            name:' shawrin',
            gender: 'female'
      },
      {
            name: 'tnm',
            gender:'male'
      }
]);
  })
app.listen(3000);