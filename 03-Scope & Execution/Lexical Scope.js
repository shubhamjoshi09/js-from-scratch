/*
=========================================================
13 - LEXICAL SCOPE & EXECUTION CONTEXT
=========================================================

This file covers:

1) What is Lexical Scope
2) Scope Chain
3) Execution Context
4) Global Execution Context
5) Function Execution Context
6) Call Stack
7) How JavaScript runs code internally
8) Interview Questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT IS LEXICAL SCOPE?
=========================================================

Lexical means:
Where the function is written in the code.

Lexical Scope decides:
Which variables a function can access
based on where it is defined.

Inner functions can access outer variables.
Outer functions cannot access inner variables.
*/


/* Example 1 */

function outer() {
  let name = "Shubham";

  function inner() {
    console.log(name); // accessible
  }

  inner();
}

outer();


/*
Explanation:

inner() can access name
because it is defined inside outer()

This is Lexical Scope.
*/


/* =========================================================
2️⃣ SCOPE CHAIN
=========================================================

JavaScript searches variables like this:

Current Scope → Parent Scope → Global Scope
*/


function level1() {
  let a = 10;

  function level2() {
    let b = 20;

    function level3() {
      let c = 30;

      console.log(a, b, c);
    }

    level3();
  }

  level2();
}

level1();

/*
Scope Chain works like climbing a ladder.
*/


/* =========================================================
3️⃣ EXECUTION CONTEXT
=========================================================

Execution Context means:

Environment where JavaScript code runs.

Every time a function runs,
a new execution context is created.
*/


/* =========================================================
4️⃣ GLOBAL EXECUTION CONTEXT
=========================================================

Created when JavaScript starts running.

It has two phases:

1) Memory Creation Phase
2) Execution Phase
*/


/*
Example:
*/

console.log(x);

var x = 10;


/*
Memory Phase:
x = undefined

Execution Phase:
x = 10
*/


/* =========================================================
5️⃣ FUNCTION EXECUTION CONTEXT
========================================================= */

function greet() {
  let message = "Hello";

  console.log(message);
}

greet();

/*
When greet() runs:

New execution context is created.
*/


/* =========================================================
6️⃣ CALL STACK
=========================================================

Call Stack tracks function execution order.

Last In → First Out
(LIFO)
*/


function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Inside three");
}

one();

/*
Call Stack:

Global
one()
two()
three()

Then removed one by one.
*/


/* =========================================================
7️⃣ HOW JAVASCRIPT RUNS CODE
=========================================================

Step 1:
Global Execution Context created

Step 2:
Memory Allocation

Step 3:
Code Execution

Step 4:
Functions pushed to Call Stack
*/


/* =========================================================
VISUAL FLOW
=========================================================

Global Execution Context
        ↓
Function Call
        ↓
New Execution Context
        ↓
Call Stack
*/


/* =========================================================
REAL UNDERSTANDING
=========================================================

Lexical Scope:
Where function is defined.

Execution Context:
When function is executed.

Both together create Closures.
*/


/* =========================================================
INTERVIEW QUESTIONS
=========================================================

Q1: What is lexical scope?

Answer:
Ability of a function to access variables
from its parent scope.


--------------------------------------------


Q2: What is execution context?

Answer:
Environment where JavaScript code runs.


--------------------------------------------


Q3: How many types of execution context exist?

Answer:
1) Global Execution Context
2) Function Execution Context


--------------------------------------------


Q4: What will be the output?

let a = 10;

function test() {
  console.log(a);
}

test();

Answer:
10


--------------------------------------------


Q5: What is scope chain?

Answer:
JavaScript searches variables
from inner to outer scope.


=========================================================
END OF FILE
=========================================================
*/
