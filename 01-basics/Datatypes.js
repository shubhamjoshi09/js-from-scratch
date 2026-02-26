/*
=========================================================
02 - DATA TYPES IN JAVASCRIPT
=========================================================

JavaScript has TWO main categories of data types:

1) Primitive Data Types
2) Non-Primitive (Reference) Data Types

This file covers:
- What are Primitive types?
- What are Non-Primitive types?
- Mutability vs Immutability
- Memory behavior
- Copy behavior
- Examples
- Practice Questions
=========================================================
*/


/* =========================================================
1️⃣ PRIMITIVE DATA TYPES
=========================================================

Primitive data types are simple values.
They are IMMUTABLE.
They are stored by VALUE.

JavaScript has 7 primitive types:

1) String
2) Number
3) Boolean
4) Undefined
5) Null
6) BigInt
7) Symbol
*/


// Examples of Primitive Types

let name = "Shubham";        // String
let age = 25;                // Number
let isStudent = true;        // Boolean
let city;                    // Undefined
let emptyValue = null;       // Null
let bigNumber = 123456789n;  // BigInt
let uniqueId = Symbol("id"); // Symbol


/* =========================================================
IMMUTABILITY (Important Concept)
=========================================================

Primitive values are IMMUTABLE.

Immutability means:
The original value CANNOT be changed.

Example:
*/

let message = "Hello";
message[0] = "Y";  

console.log(message); 
// Output: "Hello"
// String did NOT change because strings are immutable


/*
If you "change" a primitive,
JavaScript creates a NEW value.
*/

let score = 10;
score = 20;   // This does NOT modify 10
              // It replaces it with a new value 20



/* =========================================================
Primitive Copy Behavior (Stored by VALUE)
=========================================================

When copying a primitive,
a separate copy is created.
*/

let a = 5;
let b = a;   // Copy by value

b = 10;

console.log(a); // 5
console.log(b); // 10

// Changing b does NOT affect a



/* =========================================================
2️⃣ NON-PRIMITIVE (REFERENCE) DATA TYPES
=========================================================

Non-Primitive types are complex data types.
They are MUTABLE.
They are stored by REFERENCE.

Main Non-Primitive Types:

1) Object
2) Array
3) Function
*/


// Object Example
let user = {
  name: "Shubham",
  age: 25
};

// Array Example
let numbers = [1, 2, 3];

// Function Example
function greet() {
  console.log("Hello");
}



/* =========================================================
MUTABILITY
=========================================================

Non-Primitive values are MUTABLE.

Mutable means:
The original value CAN be modified.
*/

let person = {
  name: "Rahul"
};

person.name = "Aman";  // Modifying existing object

console.log(person); 
// { name: "Aman" }



/* =========================================================
Reference Behavior (Stored by REFERENCE)
=========================================================

When copying an object,
you copy the REFERENCE (memory address),
NOT the actual value.
*/

let obj1 = { value: 100 };
let obj2 = obj1;  // Reference copy

obj2.value = 200;

console.log(obj1.value); // 200
console.log(obj2.value); // 200

// Both point to SAME memory location



/* =========================================================
Primitive vs Non-Primitive Comparison
=========================================================

Primitive:
✔ Immutable
✔ Stored by Value
✔ Simple Data
✔ Compared by value

Non-Primitive:
✔ Mutable
✔ Stored by Reference
✔ Complex Data
✔ Compared by reference
*/


/* Example of Comparison */

let x = 10;
let y = 10;

console.log(x === y); // true (value comparison)


let objA = { num: 10 };
let objB = { num: 10 };

console.log(objA === objB); 
// false (different memory reference)



/* =========================================================
MEMORY CONCEPT (IMPORTANT FOR INTERVIEWS)
=========================================================

Primitive:
Stored in STACK memory.

Non-Primitive:
Stored in HEAP memory.
Variable stores reference to heap location.

(Conceptual understanding — not exact engine detail)
*/


/* =========================================================
SUMMARY TABLE
=========================================================

Feature            Primitive         Non-Primitive
--------------------------------------------------------
Stored As          Value             Reference
Mutable            No                Yes
Compared By        Value             Reference
Memory             Stack             Heap
Examples           String, Number    Object, Array
--------------------------------------------------------
*/


/* =========================================================
PRACTICE QUESTIONS
=========================================================

Q1: What is the difference between primitive
    and non-primitive data types?

--------------------------------------------

Q2: Why are strings immutable?

--------------------------------------------

Q3: What will be the output?

let a = 5;
let b = a;
b = 20;
console.log(a);

--------------------------------------------

Q4: What will be the output?

let obj1 = { name: "A" };
let obj2 = obj1;
obj2.name = "B";

console.log(obj1.name);

--------------------------------------------

Q5: Why are objects called reference types?

--------------------------------------------

Try answering before revising the theory.
=========================================================
*/
