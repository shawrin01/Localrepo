// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname,'Public');

// //app.use(express.static(publicPath));

// app.set('view engine','ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.get('',(req,res)=>{
//    res.sendFile(`${publicPath}/Home.html`);
// })
// app.get('/profile',(req,res)=>{
//   const user = {
//     name: 'shawrin fouzia',
//     city:'chittagong',
//     school:'BGHS'
//   }
//   res.render('profile',{user})
// })
// app.get('*',(req,res)=>{
//   res.sendFile(`${publicPath}/error.html`);
// })

// app.listen(3000);