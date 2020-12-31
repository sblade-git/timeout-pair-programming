/***********************************************************************
Write a function `postpone` that accepts a callback and a delay in
milliseconds as arguments. `postpone` should return a new function. When
the returned function is called, it should invoke the callback after the
given delay.

Hint: use closures and setTimeout to your advantage
***********************************************************************/

const postpone = function(cb, delay){

return function(){
  let timeOut = setTimeout(cb, delay)
  console.log(timeOut)
}

}

const sayHello = () => console.log('hi');
const slowHello = postpone(sayHello, 1000);
console.log(slowHello); // [Function]
slowHello(); // prints 'hi' after 1000 ms

const sayGoodbye = () => console.log('bye');
const slowerGoodbye = postpone(sayGoodbye, 1750);
console.log(slowerGoodbye); // [Function]
slowerGoodbye(); // prints 'bye' after 1750 ms

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = postpone;
} catch {
  module.exports = null;
}
