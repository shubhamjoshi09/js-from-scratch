/*
=========================================================
11 - CLOSURES IN JAVASCRIPT
=========================================================

This file covers:

1) What is Closure?
2) Lexical Scope connection
3) How closure works internally
4) Memory behavior
5) Real-life examples
6) Common mistakes
7) Interview questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT IS A CLOSURE?
=========================================================

A Closure is created when:

A function remembers variables
from its outer scope
even AFTER the outer function has finished execution.

In simple words:
"A function + its lexical environment = Closure"
*/


/* =========================================================
2️⃣ BASIC EXAMPLE
========================================================= */

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3


/*
Even after outer() is finished,
inner() still remembers count.

This is Closure
*/


/* =========================================================
3️⃣ HOW IT WORKS (IMPORTANT)
=========================================================

Step-by-step:

1) outer() runs → creates variable count
2) inner() is returned
3) outer() execution ends
4) BUT count is NOT destroyed
5) inner() keeps reference to count

 Memory is preserved
*/


/* =========================================================
4️⃣ LEXICAL SCOPE CONNECTION
=========================================================

Closures exist because of lexical scope.

Inner function can access outer variables.
*/

function parent() {
  let name = "Shubham";

  function child() {
    console.log(name);
  }

  return child;
}

const result = parent();
result(); // Shubham



/* =========================================================
5️⃣ REAL-LIFE EXAMPLE (VERY IMPORTANT)
=========================================================

Counter example
*/

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const myCounter = createCounter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2


/*
Use case:
 Private variables
 Data hiding
*/


/* =========================================================
6️⃣ DATA PRIVACY (POWERFUL USE)
========================================================= */

function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    }
  };
}

const account = bankAccount();

account.deposit(500);   // 1500
account.withdraw(200);  // 1300

// balance is NOT directly accessible
// Data is protected using closure



/* =========================================================
7️⃣ COMMON MISTAKE (IMPORTANT)
========================================================= */

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

/*
Output:
4 4 4

Why?
Because var is function scoped
and all callbacks share same i
*/


/* -------------------------
FIX USING let
-------------------------- */

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

/*
Output:
1 2 3
*/


/* =========================================================
8️⃣ CLOSURE + PARAMETERS
========================================================= */

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);

console.log(double(5)); // 10


/*
multiply(2) creates closure
where x = 2 is remembered
*/


/* =========================================================
9️⃣ MEMORY BEHAVIOR
=========================================================

Normally:
Variables are destroyed after function ends

BUT in closure:
Variables stay in memory
because they are still being used

This is called memory preservation
*/


/* =========================================================
SUMMARY
=========================================================

Closure:
✔ Function remembers outer variables
✔ Works due to lexical scope
✔ Preserves memory

Use Cases:
✔ Data privacy
✔ Counters
✔ Function factories

=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS + ANSWERS
=========================================================

Q1: What is a closure?

Answer:
A function that remembers its outer scope
even after execution.


--------------------------------------------


Q2: Why do closures work?

Answer:
Because of lexical scope.


--------------------------------------------


Q3: What will be output?

function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}

const fn = outer();
fn();

Answer:
10


--------------------------------------------


Q4: What is data hiding in closures?

Answer:
Using closure to protect variables
from outside access.


--------------------------------------------


Q5: What will be output?

function test() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const c = test();

console.log(c());
console.log(c());

Answer:
1
2


--------------------------------------------


Q6: Why does var fail in loop with closures?

Answer:
Because it shares same reference
due to function scope.


=========================================================
END OF FILE
=========================================================
*/
