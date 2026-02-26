/*
=========================================================
04 - SCOPE, HOISTING & THIS (BASICS)
=========================================================

This file covers:

1) Scope (Global, Function, Block)
2) Hoisting (var, let, const, functions)
3) Temporal Dead Zone (Quick revision)
4) this keyword (basic behavior)
5) Interview style questions with answers
=========================================================
*/


/* =========================================================
1️⃣ SCOPE
=========================================================

Scope determines where a variable is accessible.

There are 3 types of scope:

1) Global Scope
2) Function Scope
3) Block Scope
*/


/* -------------------------
GLOBAL SCOPE
-------------------------- */

let globalVar = "I am global";

function testGlobal() {
  console.log(globalVar); // Accessible
}

testGlobal();



/* -------------------------
FUNCTION SCOPE
-------------------------- */

function testFunctionScope() {
  let functionVar = "Inside function";
  console.log(functionVar);
}

testFunctionScope();

// console.log(functionVar); Error
// Not accessible outside function



/* -------------------------
BLOCK SCOPE
-------------------------- */

if (true) {
  let blockVar = "Block scoped";
  const anotherBlock = "Also block scoped";
  var notBlockScoped = "var ignores block";
}

// console.log(blockVar); Error
// console.log(anotherBlock); Error

console.log(notBlockScoped); 
// Accessible because var is NOT block scoped



/*
IMPORTANT:
let & const → Block scoped
var → Function scoped
*/


/* =========================================================
LEXICAL SCOPE
=========================================================

Inner functions can access outer variables.
Outer functions CANNOT access inner variables.
*/

function outer() {
  let outerVar = "Outer";

  function inner() {
    console.log(outerVar); // Accessible
  }

  inner();
}

outer();



/* =========================================================
2️⃣ HOISTING
=========================================================

Hoisting means declarations are moved
to the top of their scope during compilation.
*/


/* -------------------------
VAR HOISTING
-------------------------- */

console.log(a); // undefined
var a = 10;

/*
Behind the scenes:
var a;
console.log(a);
a = 10;
*/


/* -------------------------
LET & CONST HOISTING
-------------------------- */

// console.log(b); ReferenceError
let b = 20;

/*
let & const are hoisted
BUT they stay in Temporal Dead Zone (TDZ)
until initialized.
*/


/* -------------------------
FUNCTION HOISTING
-------------------------- */

greet(); // Works

function greet() {
  console.log("Hello");
}


/*
Function declarations are fully hoisted.
But function expressions are NOT.
*/


// sayHi(); Error

var sayHi = function () {
  console.log("Hi");
};



/* =========================================================
3️⃣ THIS KEYWORD (BASIC)
=========================================================

The value of "this" depends on HOW a function is called.
*/


/* -------------------------
1) Global Context
-------------------------- */

console.log(this);

/*
In browser:
this → window object

In Node.js:
this → empty object {}
*/


/* -------------------------
2) Inside Regular Function
-------------------------- */

function show() {
  console.log(this);
}

show();

/*
In non-strict mode (browser):
this → window

In strict mode:
this → undefined
*/


/* -------------------------
3) Inside Object Method
-------------------------- */

const user = {
  name: "Shubham",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); 
// "this" refers to the object calling it → user



/* -------------------------
4) Arrow Function
-------------------------- */

const person = {
  name: "Rahul",
  greet: () => {
    console.log(this.name);
  }
};

person.greet();

/*
Arrow functions do NOT have their own this.
They take this from surrounding scope.
*/



/* =========================================================
SUMMARY
=========================================================

SCOPE:
- Global
- Function
- Block
- Lexical

HOISTING:
- var → hoisted with undefined
- let/const → hoisted but in TDZ
- function declaration → fully hoisted

THIS:
- Depends on how function is called
- In object method → refers to object
- In arrow function → lexical this
=========================================================
*/



/* =========================================================
INTERVIEW STYLE QUESTIONS + ANSWERS
=========================================================


Q1: What will be the output?

console.log(x);
var x = 5;

Answer:
undefined (due to hoisting)


--------------------------------------------


Q2: What will happen?

console.log(y);
let y = 10;

Answer:
ReferenceError (TDZ)


--------------------------------------------


Q3: What is lexical scope?

Answer:
Inner functions can access variables
from outer functions.


--------------------------------------------


Q4: What will be the output?

const obj = {
  value: 10,
  show: function() {
    console.log(this.value);
  }
};

obj.show();

Answer:
10 (this refers to obj)


--------------------------------------------


Q5: What will be the output?

const obj = {
  value: 10,
  show: () => {
    console.log(this.value);
  }
};

obj.show();

Answer:
undefined (arrow function does not bind this)


--------------------------------------------


Q6: Why is var considered problematic?

Answer:
Because it is function scoped
and ignores block scope,
which can cause unexpected bugs.


=========================================================
END OF FILE
=========================================================
*/
