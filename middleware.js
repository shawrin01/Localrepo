const  express = require('express');
const app =  express();

const reqFilter=(req,res,next)=>{
  if(!req.query.age){
    res.send('Please provide age')
  }
  else if(req.query.age<18){
    res.send('this is the age')
  }
  else{
   next();
  }
}
const route = express.Router();

route.use(reqFilter);
//app.use(reqFilter); --> eta dile shobgular upor kaj korbe

app.get('/',(req,res)=>{
    res.send('WELCOME TO HOMEPAGE DAMNIT!')
})
route.get('/contact',(req,res)=>{
  res.send('WELCOME TO CONTACT page DAMNIT!')
})
route.get('/user',(req,res)=>{
  res.send('users of walking dead!this is amazing i cant express')
})
app.use(route);
app.listen(4000);