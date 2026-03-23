/*
=========================================================
10 - REST & SPREAD OPERATOR ( ... )
=========================================================

This file covers:

1) What is Rest Operator?
2) What is Spread Operator?
3) Key Differences
4) Array & Object usage
5) Real-world examples
6) Common mistakes
7) Interview questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT IS REST OPERATOR?
=========================================================

Rest operator collects multiple values
into a single array.

 Used in function parameters
 Represents "the rest of values"
*/


/* -------------------------
Basic Example
-------------------------- */

function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4); 
// [1, 2, 3, 4]



/* -------------------------
Using Rest in Calculation
-------------------------- */

function add(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(add(1, 2, 3)); // 6



/* -------------------------
Rest with other parameters
-------------------------- */

function test(a, b, ...rest) {
  console.log(a);    // first value
  console.log(b);    // second value
  console.log(rest); // remaining values
}

test(1, 2, 3, 4, 5);



/*
IMPORTANT RULE:
Rest parameter must be LAST parameter
*/


/* =========================================================
2️⃣ WHAT IS SPREAD OPERATOR?
=========================================================

Spread operator expands elements
of array or object.

Used to "spread" values
*/


/* -------------------------
Array Spread
-------------------------- */

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]


/* -------------------------
Merging Arrays
-------------------------- */

const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];

console.log(merged); // [1, 2, 3, 4]



/* -------------------------
Adding Elements
-------------------------- */

const nums = [1, 2];

const updated = [...nums, 3, 4];

console.log(updated); // [1, 2, 3, 4]



/* =========================================================
3️⃣ OBJECT SPREAD
========================================================= */

const user = {
  name: "Shubham",
  age: 22
};

const newUser = {
  ...user,
  city: "Delhi"
};

console.log(newUser);



/* -------------------------
Overwriting Properties
-------------------------- */

const updatedUser = {
  ...user,
  age: 25
};

console.log(updatedUser);



/* =========================================================
4️⃣ COPYING OBJECT (IMPORTANT)
========================================================= */

const obj1 = { a: 1 };
const obj2 = { ...obj1 };

obj2.a = 10;

console.log(obj1.a); // 1
console.log(obj2.a); // 10


/*
Spread creates shallow copy
*/


/* =========================================================
5️⃣ REST vs SPREAD DIFFERENCE
=========================================================

REST:
✔ Collect values into array
✔ Used in function parameters

SPREAD:
✔ Expand values
✔ Used in arrays/objects

Same syntax (...) but different use
*/


/* =========================================================
6️⃣ REAL LIFE EXAMPLES
========================================================= */

// Clone array
const numbers = [1, 2, 3];
const copy = [...numbers];

// Add item
const newArr = [...numbers, 4];

// Remove item (filter)
const filtered = numbers.filter(num => num !== 2);



/* =========================================================
7️⃣ COMMON MISTAKES
=========================================================

Using rest in wrong position

function test(...a, b) {} // Error


✔ Correct:
function test(a, ...rest) {}


/*
Confusing rest with spread
*/
*/


/* =========================================================
SUMMARY
=========================================================

Rest:
✔ Collect values
✔ Used in function parameters

Spread:
✔ Expand values
✔ Used in arrays and objects

Both use ... but behavior depends on context
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS + ANSWERS
=========================================================

Q1: Difference between rest and spread?

Answer:
Rest collects values,
Spread expands values.


--------------------------------------------


Q2: What will be output?

function test(...args) {
  console.log(args);
}

test(1, 2, 3);

Answer:
[1, 2, 3]


--------------------------------------------


Q3: What will be output?

const arr = [1, 2];
const newArr = [...arr, 3];

console.log(newArr);

Answer:
[1, 2, 3]


--------------------------------------------


Q4: Can rest be used anywhere?

Answer:
No, only in function parameters
and must be last.


--------------------------------------------


Q5: What is shallow copy?

Answer:
Copy where nested objects still share reference.


=========================================================
END OF FILE
=========================================================
*/
