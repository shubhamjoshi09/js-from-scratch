/*
=========================================================
14 - CALL STACK & SCOPE CHAIN
=========================================================

This file covers:

1) What is Call Stack?
2) How Call Stack works (LIFO)
3) What is Scope Chain?
4) How variable lookup works
5) Call Stack + Scope Chain together
6) Step-by-step execution flow
7) Interview Questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT IS CALL STACK?
=========================================================

Call Stack is a data structure
that keeps track of function calls.

It follows:
Last In → First Out (LIFO)

It decides:
Which function runs first and ends first
*/


/* =========================================================
2️⃣ CALL STACK EXAMPLE
========================================================= */

function one() {
  console.log("Inside One");
  two();
}

function two() {
  console.log("Inside Two");
  three();
}

function three() {
  console.log("Inside Three");
}

one();


/*
Execution Flow:

Step 1: Global Execution Context added
Step 2: one() pushed
Step 3: two() pushed
Step 4: three() pushed

Execution:
three() → removed
two() → removed
one() → removed

Stack becomes empty
*/


/* =========================================================
3️⃣ WHAT IS SCOPE CHAIN?
=========================================================

Scope Chain is the process
JavaScript uses to find variables.

Search order:
Current Scope → Parent → Global
*/


/* =========================================================
4️⃣ SCOPE CHAIN EXAMPLE
========================================================= */

let globalVar = "I am Global";

function outer() {
  let outerVar = "I am Outer";

  function inner() {
    let innerVar = "I am Inner";

    console.log(globalVar);
    console.log(outerVar);
    console.log(innerVar);
  }

  inner();
}

outer();


/*
inner() searches:

innerVar → found locally
outerVar → found in parent
globalVar → found in global

This is Scope Chain
*/


/* =========================================================
5️⃣ IMPORTANT RULE
=========================================================

Scope chain depends on
WHERE function is written (lexical scope)

NOT where it is called
*/


/* =========================================================
6️⃣ COMBINED EXAMPLE (IMPORTANT)
========================================================= */

let a = 10;

function first() {
  let b = 20;

  function second() {
    let c = 30;

    console.log(a, b, c);
  }

  second();
}

first();


/*
Call Stack:

Global → first() → second()

Scope Chain inside second():

c → local
b → parent (first)
a → global
*/


/* =========================================================
7️⃣ REAL EXECUTION FLOW
========================================================= */

let x = 1;

function a() {
  let y = 2;

  function b() {
    let z = 3;

    console.log(x + y + z);
  }

  b();
}

a();


/*
Call Stack:
Global
→ a()
→ b()

Scope Chain:
z → b()
y → a()
x → global
*/


/* =========================================================
8️⃣ COMMON CONFUSION
========================================================= */

function test() {
  let value = 10;

  return function () {
    console.log(value);
  };
}

const fn = test();
fn();


/*
Even though test() is finished,
value is still accessible.

Because of closure + scope chain
*/


/* =========================================================
SUMMARY
=========================================================

Call Stack:
✔ Manages function execution
✔ LIFO (Last In First Out)

Scope Chain:
✔ Finds variables
✔ Current → Parent → Global

Together:
✔ Execution + Variable access
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS
=========================================================

Q1: What is Call Stack?

Answer:
A data structure that tracks function calls.


--------------------------------------------


Q2: What is Scope Chain?

Answer:
Process of finding variables from inner
to outer scopes.


--------------------------------------------


Q3: What will be output?

function one() {
  console.log("1");
  two();
}

function two() {
  console.log("2");
}

one();

Answer:
1
2


--------------------------------------------


Q4: What will be output?

let a = 10;

function test() {
  console.log(a);
}

test();

Answer:
10


--------------------------------------------


Q5: Does scope chain depend on call stack?

Answer:
No

✔ It depends on lexical scope (where defined)


=========================================================
END OF FILE
=========================================================
*/
