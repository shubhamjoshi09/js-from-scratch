/*
=========================================================
08 - HIGHER ORDER FUNCTIONS & IIFE
=========================================================

This file covers:

1) What are Higher-Order Functions?
2) Functions as values
3) Returning functions
4) Real-world examples (map, filter)
5) What is IIFE?
6) Why IIFE is used
7) Interview Questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT IS A HIGHER-ORDER FUNCTION?
=========================================================

A Higher-Order Function is a function that:

✔ Takes another function as an argument
OR
✔ Returns another function

Functions are treated as values in JavaScript
*/


/* =========================================================
2️⃣ FUNCTION AS ARGUMENT
========================================================= */

function greet(name) {
  return "Hello " + name;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser("Shubham", greet));


/*
processUser is a Higher-Order Function
because it takes another function as input
*/


/* =========================================================
3️⃣ FUNCTION RETURNING FUNCTION
========================================================= */

function outer() {
  return function inner() {
    console.log("I am inner function");
  };
}

const result = outer();
result(); // calling inner function


/*
outer is a Higher-Order Function
because it returns another function
*/


/* =========================================================
4️⃣ REAL LIFE EXAMPLES (IMPORTANT)
========================================================= */

const numbers = [1, 2, 3, 4];

/* -------------------------
map()
-------------------------- */

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);


/* -------------------------
filter()
-------------------------- */

const even = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(even);


/*
map & filter are Higher-Order Functions
because they take callback functions
*/


/* =========================================================
5️⃣ ARROW FUNCTION VERSION
========================================================= */

const squared = numbers.map(num => num * num);

console.log(squared);



/* =========================================================
6️⃣ WHAT IS IIFE?
=========================================================

IIFE = Immediately Invoked Function Expression

Function that runs immediately after creation
No need to call it separately
*/


/* -------------------------
IIFE Syntax
-------------------------- */

(function () {
  console.log("I run immediately");
})();



/* =========================================================
7️⃣ WHY USE IIFE?
=========================================================

✔ Avoid global pollution
✔ Create private scope
✔ Run code immediately
*/


/* -------------------------
Example: Private Scope
-------------------------- */

(function () {
  let secret = "Hidden";

  console.log("Inside IIFE:", secret);
})();

// console.log(secret); Error (not accessible)



/* =========================================================
8️⃣ IIFE WITH PARAMETERS
========================================================= */

(function (name) {
  console.log("Hello " + name);
})("Shubham");



/* =========================================================
9️⃣ NAMED IIFE
========================================================= */

(function greet() {
  console.log("Named IIFE");
})();



/* =========================================================
🔟 COMBINATION: HOF + IIFE
========================================================= */

(function () {
  function multiply(a, b) {
    return a * b;
  }

  console.log(multiply(2, 3));
})();



/* =========================================================
SUMMARY
=========================================================

Higher-Order Function:
✔ Takes function as argument
✔ Returns function

Examples:
✔ map()
✔ filter()
✔ forEach()

IIFE:
✔ Runs immediately
✔ No need to call
✔ Creates private scope
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS + ANSWERS
=========================================================

Q1: What is a Higher-Order Function?

Answer:
A function that takes or returns another function.


--------------------------------------------


Q2: Give examples of Higher-Order Functions.

Answer:
map, filter, forEach


--------------------------------------------


Q3: What is IIFE?

Answer:
A function that runs immediately after creation.


--------------------------------------------


Q4: Why use IIFE?

Answer:
To avoid global scope pollution
and create private variables.


--------------------------------------------


Q5: What will be the output?

(function () {
  console.log("Hello");
})();

Answer:
Hello


--------------------------------------------


Q6: What is the difference between
normal function and IIFE?

Answer:
Normal function needs to be called,
IIFE runs immediately.


=========================================================
END OF FILE
=========================================================
*/
