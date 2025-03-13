//  a = 20;
//  b = 0;

//  setTimeout(() => {
//    b = 30;
//  }, 2000);

// console.log(a+b);

let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
      resolve("operation successful!")
    }else{
      reject("operation failed!")
    }
});
myPromise
.then((message)=>{
  console.log(message);
})
.then((message)=>{
  console.log("next",message);
})
.catch((message)=>{
  console.log(message);
})