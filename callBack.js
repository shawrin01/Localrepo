function second(){
  setTimeout(() => {
    console.log('second')
  }, 2000);
}

function first(){
  console.log('first');
}
second();
first();

