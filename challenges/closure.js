// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

console.log("===============Closure Section=============")
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
console.log("");
// Explanation: 
console.log("The answer to task 1 is --> " + `"nestedFunction()", which is a part of "myFunction()" has the ability to access the variable "internal" because they share the same lexical scope.  Any function can reach, both within itself, and outside of itself (onto the global scope) but variables can NOT reach into functions.`);
console.log("");
/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

sumation = (number) =>{
  let counter = 0;
  for(let i =0; i <= number; i++){
    counter += i;
  }
  return counter;
}
console.log("The answer to task 2 is --> " + sumation(4));