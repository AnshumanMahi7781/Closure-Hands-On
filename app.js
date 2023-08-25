//!Question -1 Print The Output 
function counter() {
  var counter = 0;

  function IncreaseCounter() {
    return counter += 1;
  };
  return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//? Ouput will be : 1 2 3 4

//* In the above code closure feature of javascript is also comes in an action, which  is a feature of JavaScript that allows inner functions(IncreaseCounter function )to access the outer(counter function) scope of a function.

//* Reason:  In the above code, we have two function counter, which is outer function and IncreaseCounter which is inner function. In counter function we declear a variable with the name of counter and value 0. We also declear the a function with the name of IncreaseCounter, in IncreaseCounter function we increase the counter variable +1. counter function returns the IncreaseCounter function.

//* later we call the counter() function, and as we know it returns value,so for future use we have to store the value in other variable, so we take counter variable and store the value which is returned by counter() function. Here counter function reuturn a function, so the counter variable becomes a funtion. After storing the returned function in counter variable, we simpley call the counter function three times inside the alert, which later alert the counter  as 1 2 3 4.



//!Question-2 Print The Output 
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//?Output : 1, 0 
//* At the beginning, we declared a variable named count and initialized it to 0.
//* The code then enters an immediately-invoked function expression (IIFE), which creates a new block scope.
//* Inside the IIFE, an if statement checks whether the outer count is equal to 0. Since it is, a new block-scoped variable count is declared and initialized to 1 within the block scope of the if statement.
//* Inside the if block, console.log(count) is called. This logs the value of the inner count, which is 1. So, the output will be: 1.
//* After the if block, the code continues to the second console.log(count). This logs the value of the outer count, which is still 0. So, the output will be: 0.

//* Global scope
//*    count = 0
//*        IIFE (new block scope)
//*           if (count === 0) {
//*               count = 1
//*                 console.log(count) // 1
// *        }
// *        console.log(count) // 0


//!Question-3 Print The Output 
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
//! Output will be : 3 3 3

//* The for loop initializes a variable i to 0.
//* The loop checks if i is less than 3. If it is, the loop executes the code inside it.
//* The code inside the loop calls the setTimeout() function, which schedules a callback function to be executed after 1 second. The callback function logs the current value of i.
//* The loop increments i by 1.
//* The loop repeats the previous steps until i is equal to 3.
//* When the setTimeout() functions are executed, they all log the value 3, because i has a global scope and its value is 3 by the time the functions are executed.


//! Question-4 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

(function lengthFun(length){
    (function calArea(breadth){
      let Area = length * breadth;
      console.log(`The Area of Rectangle which has the Length : ${length} and the Breadth : ${breadth} is : ${Area}`)
    })(40);
})(20);
//*  Output: =>  The Area of Rectangle which has the Length : 20 and the Breadth : 40 is : 800

//!Question-5 Print The Output 
function outerFunction() {
  let counter = 0;
  function innerFunction() {
    counter++;
  }
  return innerFunction;
}
let incrementCounter = outerFunction();
incrementCounter();
incrementCounter();
incrementCounter();
console.log("Counter is", counter);

//! Error : ReferenceError: counter is not defined

//* This code will through an error because we try to access the counter variable which is not present in the global scope. The counter variable can only accessible inside the outerFunction and innerFunction ( because of Closures).


//!Question-6 Print The Output 
var a = 12;
(function () {
  alert(a);
})();

//* Output : 12
//* First we defined the variable 'a' with var keyword and with value 12. The varialbe 'a' defined in global scope so we can use it anywhere in the program.
//*  The code then enters an immediately-invoked function expression (IIFE), where we alert the variable 'a'. As we know 'a' is defined in global scope so we can access it. It will alert the value 12.

//!Question-7 Print The Output 
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//* Output : undefined

//* This code will print 'undefined'. Because inside the IIFE, we tries to log the values of a, before it's initializtion.ue to variable hoisting, the declaration of var a within the IIFE is moved to the top, which means that it exists within the IIFE's scope even before its actual line of declaration. Since the var a inside the IIFE is hoisted to the top, when the console.log(a) line is executed, the value of a within the IIFE's scope is undefined.


//!Question-8 Print The Output
var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    })(456); 
})(123);

//!Ouptut:
//* => outerArg  = 123
//* => innerArg  = 456
//* => outerVar  = a
//* => innerVar  = b
//* => globalVar  = xyz
//* The above code defines two functions, outerFunc() and innerFunc(). outerFunc() takes one argument, outerArg, and calls innerFunc(), which takes one argument, innerArg.
//! scopes of variable defines that where it will be Accessible and where it will not Accessible
//* globalVar is a global variable, which is accessible from any scope.
//* outerVar is a local variable to outerFunc().
//* innerVar is a local variable to innerFunc().
//* The code is executed as follows:
//* The outer function outerFunc() is called with the argument 123.
//* outerFunc() defines a local variable outerVar and assigns it the value a.
//* outerFunc() calls innerFunc() with the argument 456.
//* innerFunc() defines a local variable innerVar and assigns it the value b.
//* innerFunc() logs the values of all five variables.
//* innerFunc() returns.
//* outerFunc() returns.
//*  this code demonstrates the concept of function scopes and how variables from outer scopes are accessible within inner scopes due to closures. Each nested function has access to its own parameters and variables as well as those of the enclosing functions and the global scope.