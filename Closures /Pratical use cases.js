/*
=========================================================
12 - CLOSURES PRACTICAL USE CASES
=========================================================

This file covers:

1) Data Privacy / Encapsulation
2) Counter / State Management
3) Function Factory
4) Event Handling
5) Async (setTimeout)
6) Memoization (Performance)
7) Module Pattern
8) Interview Questions
=========================================================
*/


/* =========================================================
1️⃣ DATA PRIVACY / ENCAPSULATION
========================================================= */

function createUser() {
  let password = "12345"; // private variable

  return {
    checkPassword(input) {
      return input === password;
    }
  };
}

const user = createUser();

console.log(user.checkPassword("12345")); // true
// console.log(user.password); undefined

/*
Use Case:
✔ Protect sensitive data (passwords, tokens)
*/


/* =========================================================
2️⃣ COUNTER / STATE MANAGEMENT
========================================================= */

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2

/*
Use Case:
✔ Button clicks
✔ Cart items
✔ Like systems
*/


/* =========================================================
3️⃣ FUNCTION FACTORY
========================================================= */

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*
Use Case:
✔ Dynamic logic creation
✔ Pricing / tax calculation
*/


/* =========================================================
4️⃣ EVENT HANDLING (SIMULATED)
========================================================= */

function handleClick(message) {
  return function () {
    console.log(message);
  };
}

const btn1 = handleClick("Button 1 clicked");
const btn2 = handleClick("Button 2 clicked");

btn1();
btn2();

/*
Use Case:
✔ UI interactions
✔ Button clicks
✔ Form handling
*/


/* =========================================================
5️⃣ ASYNC (setTimeout)
========================================================= */

function delayedMessage(msg) {
  setTimeout(function () {
    console.log(msg);
  }, 1000);
}

delayedMessage("Hello after 1 second");

/*
Use Case:
✔ API calls
✔ Delayed actions
✔ Animations
*/


/* =========================================================
6️⃣ MEMOIZATION (PERFORMANCE)
========================================================= */

function createMemo() {
  let cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("From cache");
      return cache[num];
    }

    console.log("Calculating...");
    let result = num * num;

    cache[num] = result;
    return result;
  };
}

const square = createMemo();

console.log(square(5)); // Calculating...
console.log(square(5)); // From cache

/*
Use Case:
✔ Avoid repeated calculations
✔ Improve performance
*/


/* =========================================================
7️⃣ MODULE PATTERN (IIFE + CLOSURE)
========================================================= */

const counterModule = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    }
  };
})();

counterModule.increment(); // 1
counterModule.increment(); // 2

/*
Use Case:
✔ Private modules
✔ Encapsulation
*/


/* =========================================================
SUMMARY
=========================================================

Closures are used for:

✔ Data privacy
✔ Maintaining state
✔ Function factories
✔ Event handling
✔ Async operations
✔ Performance optimization

 Closure = Function + Memory
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS
=========================================================

Q1: What will be the output?

function test() {
  let x = 10;

  return function () {
    return x++;
  };
}

const fn = test();

console.log(fn());
console.log(fn());

Answer:
10
11


--------------------------------------------


Q2: What will be the output?

function outer() {
  let name = "JS";

  return function () {
    console.log(name);
  };
}

const a = outer();
const b = outer();

a();
b();

Answer:
JS
JS

(Separate closures, separate memory)


--------------------------------------------


Q3: What will be the output?

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

Answer:
4 4 4

Reason:
var shares same reference


--------------------------------------------


Q4: How to fix above problem?

Answer:
Use let (block scope)


=========================================================
END OF FILE
=========================================================
*/
