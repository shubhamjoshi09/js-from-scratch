/*
=========================================================
07 - CALLBACKS, PARAMETERS, ARGUMENTS & SCOPE
=========================================================

This file covers:

1) Parameters vs Arguments
2) What are Callbacks?
3) Callbacks in Parameters
4) Global Scope vs Local Scope
5) How everything connects
6) Interview Questions
=========================================================
*/


/* =========================================================
1️⃣ PARAMETERS vs ARGUMENTS
=========================================================

PARAMETERS:
- Variables defined in function definition

ARGUMENTS:
- Actual values passed when function is called
*/


/* -------------------------
Example
-------------------------- */

function greet(name) {   // name → parameter
  console.log("Hello " + name);
}

greet("Shubham");       // "Shubham" → argument



/* =========================================================
2️⃣ WHAT IS A CALLBACK FUNCTION?
=========================================================

A callback is a function passed as an argument
to another function.

Function inside function
Used for flexibility and control
*/


/* -------------------------
Basic Callback Example
-------------------------- */

function sayHello() {
  console.log("Hello");
}

function processUser(callback) {
  callback();  // calling the function
}

processUser(sayHello);



/* =========================================================
3️⃣ CALLBACKS IN PARAMETERS
=========================================================

We pass function as argument and call it inside.
*/


function calculate(a, b, operation) {
  return operation(a, b);
}

// Callback functions
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, add));      // 5
console.log(calculate(2, 3, multiply)); // 6



/* -------------------------
Inline Callback (Common)
-------------------------- */

calculate(5, 5, function (x, y) {
  console.log(x - y);
});



/* -------------------------
Arrow Callback
-------------------------- */

calculate(10, 2, (x, y) => x / y);



/* =========================================================
REAL LIFE USE (VERY IMPORTANT)
========================================================= */

const numbers = [1, 2, 3, 4];

numbers.forEach(function (num) {
  console.log(num);
});

/*
forEach takes a callback function
*/


/* =========================================================
4️⃣ GLOBAL vs LOCAL SCOPE
========================================================= */


/* -------------------------
GLOBAL SCOPE
-------------------------- */

let globalVar = "I am global";

function testGlobal() {
  console.log(globalVar); // Accessible
}

testGlobal();



/* -------------------------
LOCAL (FUNCTION) SCOPE
-------------------------- */

function testLocal() {
  let localVar = "I am local";
  console.log(localVar);
}

testLocal();

// console.log(localVar); Error



/* -------------------------
BLOCK SCOPE
-------------------------- */

if (true) {
  let blockVar = "Block scope";
}

// console.log(blockVar); Error



/* =========================================================
5️⃣ SCOPE + CALLBACK CONNECTION
=========================================================

Callback functions can access outer variables
due to lexical scope.
*/

let message = "Hello from outside";

function outer(callback) {
  callback();
}

outer(function () {
  console.log(message); // Accessing outer scope
});


/*
This works because of lexical scope.
*/


/* =========================================================
6️⃣ HOW IT ALL CONNECTS
=========================================================

- Functions take PARAMETERS
- We pass ARGUMENTS
- Arguments can be functions (callbacks)
- Callbacks can access outer scope
- This is how JS becomes powerful
*/


/* =========================================================
SUMMARY
=========================================================

Parameters:
✔ Variables in function

Arguments:
✔ Values passed to function

Callbacks:
✔ Function passed as argument

Scope:
✔ Global → accessible everywhere
✔ Local → inside function only
✔ Block → inside block only

=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS + ANSWERS
=========================================================


Q1: What is the difference between parameters and arguments?

Answer:
Parameters are placeholders in function definition,
Arguments are actual values passed.


--------------------------------------------


Q2: What is a callback function?

Answer:
A function passed as argument to another function.


--------------------------------------------


Q3: What will be the output?

function test(callback) {
  callback();
}

test(function () {
  console.log("Hello");
});

Answer:
Hello


--------------------------------------------


Q4: What is global scope?

Answer:
Variables accessible everywhere.


--------------------------------------------


Q5: What is local scope?

Answer:
Variables accessible only inside function.


--------------------------------------------


Q6: Why do callbacks work with outer variables?

Answer:
Because of lexical scope.


--------------------------------------------


Q7: What will be the output?

let x = 10;

function test() {
  console.log(x);
}

test();

Answer:
10


=========================================================
END OF FILE
=========================================================
*/
