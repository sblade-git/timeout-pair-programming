/***********************************************************************
Write a function `intervalCount` that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage
***********************************************************************/



const intervalCount = function (cb, delay, amount){

  const interval = setInterval(function(){
   cb()
   amount --
   if (amount === 0){
    clearInterval(interval)
   }
 }, delay)

}



intervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
