/***********************************************************************
Write a function `batchTimeouts` that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.


The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments
have the same length.
***********************************************************************/

let batchTimeouts = function(tasks, delays){
  let newArr = [];
  for (let i = 0; i < tasks.length; i++){
    newArr.push(setTimeout(tasks[i], delays[i]));
  }
  return newArr;
}

const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays);
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = batchTimeouts;
} catch {
  module.exports = null;
}
