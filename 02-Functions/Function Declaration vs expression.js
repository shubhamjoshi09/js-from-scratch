/*
=========================================================
05 - FUNCTION DECLARATION vs EXPRESSION
+ EXECUTION CONTEXT + CALL STACK
=========================================================

This file covers:

1) Function Declaration vs Function Expression
2) Global Execution Context
3) Call Stack
4) How JavaScript Executes Code
5) Step-by-step execution flow
6) Interview Questions
=========================================================
*/


/* =========================================================
1️⃣ FUNCTION DECLARATION
=========================================================

✔ Also called Function Statement
✔ Fully hoisted
✔ Can be called BEFORE declaration
*/

sayHello(); // Works

function sayHello() {
  console.log("Hello from Declaration");
}


/* =========================================================
2️⃣ FUNCTION EXPRESSION
=========================================================

✔ Function stored inside a variable
✔ NOT fully hoisted
✔ Cannot be used before initialization
*/

sayHi(); //  Error

var sayHi = function () {
  console.log("Hello from Expression");
};


/*
Behind the scenes:

var sayHi;
sayHi(); // undefined → error

sayHi = function() { ... }
*/


/* =========================================================
KEY DIFFERENCE
=========================================================

Function Declaration:
Hoisted completely
Can call before definition

Function Expression:
 Not hoisted fully
 Cannot call before definition
*/


/* =========================================================
3️⃣ GLOBAL EXECUTION CONTEXT (GEC)
=========================================================

When JavaScript runs a file, it creates:

 Global Execution Context

It has TWO phases:

1) Memory Phase (Creation Phase)
2) Code Execution Phase
*/


/* -------------------------
Memory Phase
--------------------------

- Variables → undefined
- Functions → full function stored
*/


/* -------------------------
Code Execution Phase
--------------------------

- Code runs line by line
- Values assigned
- Functions executed
*/


/* =========================================================
EXAMPLE TO UNDERSTAND GEC
========================================================= */

console.log(a); // undefined

var a = 10;

greet(); // works

function greet() {
  console.log("Hello");
}


/*
Memory Phase:

a → undefined
greet → full function


Execution Phase:

console.log(a) → undefined
a = 10
greet() → "Hello"
*/


/* =========================================================
4️⃣ CALL STACK
=========================================================

Call Stack = JavaScript ka execution manager

Rule:
Last In, First Out (LIFO)
*/


function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
  three();
}

function three() {
  console.log("Three");
}

one();


/*
Call Stack Flow:

1) one() added
2) two() added
3) three() added

Execution:

three() → removed
two() → removed
one() → removed
*/


/* =========================================================
REAL FLOW COMBINED (IMPORTANT)
========================================================= */

console.log(x);

var x = 5;

function test() {
  console.log("Inside Test");
}

test();


/*
Step-by-step:

MEMORY PHASE:
x → undefined
test → full function

EXECUTION PHASE:
console.log(x) → undefined
x = 5
test() → runs → prints "Inside Test"
*/


/* =========================================================
FUNCTION DECLARATION vs EXPRESSION + CALL STACK
========================================================= */

function add(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a * b;
};

console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6


/*
add() → already in memory
multiply() → available only after assignment
*/


/* =========================================================
SUMMARY
=========================================================

Function Declaration:
 Fully hoisted
 Stored in memory phase

Function Expression:
Only variable hoisted
Function assigned later

Execution Context:
Created when JS runs
Has memory + execution phase

Call Stack:
 Manages function calls
 Works LIFO
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS + ANSWERS
=========================================================

Q1: Difference between function declaration
    and function expression?

Answer:
Declaration is fully hoisted,
Expression is not.


--------------------------------------------


Q2: What is Execution Context?

Answer:
An environment where JS code runs.


--------------------------------------------


Q3: What are the two phases of execution?

Answer:
1) Memory Phase
2) Execution Phase


--------------------------------------------


Q4: What is Call Stack?

Answer:
A structure that manages function calls (LIFO).


--------------------------------------------


Q5: What will be output?

sayHello();

function sayHello() {
  console.log("Hi");
}

Answer:
Hi


--------------------------------------------


Q6: What will be output?

sayHi();

var sayHi = function () {
  console.log("Hi");
};

Answer:
Error (not a function)


=========================================================
END OF FILE
=========================================================
*/
