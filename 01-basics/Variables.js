/*
=====================================================
01 - VARIABLES IN JAVASCRIPT
=====================================================

In JavaScript, variables can be declared using:
1) var
2) let
3) const

This file covers:
- Scope
- Reassignment
- Redeclaration
- Hoisting
- Temporal Dead Zone (TDZ)
- Best Practices
- Interview Questions
=====================================================
*/


/* =====================================================
1️⃣ var
=====================================================

Function Scoped
Can be Re-declared
Can be Re-assigned
Hoisted (initialized with undefined)
Not Block Scoped
*/

var a = 10;
var a = 20;   // Redeclaration allowed
a = 30;       // Reassignment allowed

console.log(a); // 30


// Scope Example
if (true) {
  var x = 100;
}

console.log(x); // 100 (because var is NOT block scoped)


/* =====================================================
2️⃣ let
=====================================================

Block Scoped
Cannot be Re-declared
Can be Re-assigned
Hoisted (but in TDZ)
*/

let b = 50;
b = 60;       // Reassignment allowed
// let b = 70; Redeclaration not allowed

console.log(b);


// Scope Example
if (true) {
  let y = 200;
}

// console.log(y); Error (Block scoped)


/* =====================================================
3️⃣ const
=====================================================

Block Scoped
Cannot be Re-declared
Cannot be Re-assigned
Must initialize at declaration
Hoisted (but in TDZ)
*/

const c = 500;
// c = 600; Error

console.log(c);


// Object behavior with const
const user = {
  name: "Shubham"
};

user.name = "Rahul"; // Allowed (object reference same)

console.log(user);


/* =====================================================
REDECLARATION vs REASSIGNMENT
=====================================================

Redeclaration:
let num = 10;
let num = 20; Not allowed

Reassignment:
let num = 10;
num = 20; Allowed
*/


/* =====================================================
HOISTING
=====================================================

Hoisting means variable declarations are moved to
the top of their scope during compilation.

Example with var:
*/

console.log(testVar); // undefined
var testVar = 5;


/*
Behind the scenes:
var testVar;
console.log(testVar);
testVar = 5;
*/


/*
let and const are also hoisted,
but they stay in TDZ.
*/


/* =====================================================
TEMPORAL DEAD ZONE (TDZ)
=====================================================

TDZ is the time between variable hoisting
and initialization.

Accessing variable before declaration
results in ReferenceError.
*/

console.log(testLet); // ReferenceError
let testLet = 10;


/*
TDZ exists for:
let
const
Not for var
*/


/* =====================================================
SCOPE TYPES
=====================================================

1) Global Scope
2) Function Scope
3) Block Scope
*/

let globalVar = "I am global";

function example() {
  let functionVar = "I am function scoped";
  console.log(functionVar);
}

example();

// console.log(functionVar); Not accessible


if (true) {
  let blockVar = "I am block scoped";
}

// console.log(blockVar); Not accessible



/* =====================================================
SUMMARY TABLE
=====================================================

Keyword   Scope        Redeclare   Reassign   Hoisted   TDZ
------------------------------------------------------------
var       Function     ✅           ✅         ✅         ❌
let       Block        ❌           ✅         ✅         ✅
const     Block        ❌           ❌         ✅         ✅
------------------------------------------------------------

Best Practice:
Use const by default
Use let when value changes
Avoid var
=====================================================
*/



/* =====================================================
PRACTICE QUESTIONS
=====================================================

Q1: What will be the output?

console.log(a);
var a = 10;

-----------------------------------------

Q2: Why does this give error?

console.log(b);
let b = 20;

-----------------------------------------

Q3: What is the difference between
redeclaration and reassignment?

-----------------------------------------

Q4: Why is const preferred in modern JS?

-----------------------------------------

Q5: What is Temporal Dead Zone?

-----------------------------------------

Try answering before checking theory again.
=====================================================
*/
