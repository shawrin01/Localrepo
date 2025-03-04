 
import { Color } from './node_modules/colors/index.d';
 const app = require('./app')
 const fs = require('fs');


const arr = [1,2,3,4,5,4,23,1]
//console.warn(arr)
//console.log(app.z()) ;

let result = arr.filter((item)=>{
  return item == 3;
 
})
//console.log(result);

//fs.writeFileSync('hello.txt','first file created')

//fs.writeFileSync('hello2.css',"css file")
