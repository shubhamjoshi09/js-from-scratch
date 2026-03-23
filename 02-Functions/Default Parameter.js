/*
=========================================================
09 - DEFAULT PARAMETERS IN JAVASCRIPT
=========================================================

This file covers:

1) What are Default Parameters?
2) Why we use them
3) How they work internally
4) Old way vs new way
5) Edge cases
6) Interview questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT ARE DEFAULT PARAMETERS?
=========================================================

Default parameters allow us to assign
a default value to function parameters
if no value (or undefined) is passed.

Introduced in ES6
*/


/* -------------------------
Basic Example
-------------------------- */

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Shubham"); // Hello Shubham
greet();          // Hello Guest



/* =========================================================
2️⃣ WHY USE DEFAULT PARAMETERS?
=========================================================

✔ Avoid undefined values
✔ Safer functions
✔ Cleaner code
✔ No need for manual checks
*/


/* =========================================================
3️⃣ OLD WAY (Before ES6)
========================================================= */

function greetOld(name) {
  name = name || "Guest";
  console.log("Hello " + name);
}

greetOld(); // Hello Guest


/*
Problem:
If name = "" (empty string),
it will still become "Guest" 
*/


/* =========================================================
4️⃣ MODERN WAY (ES6)
========================================================= */

function greetNew(name = "Guest") {
  console.log("Hello " + name);
}

greetNew(""); // Hello "" (correct behavior)



/* =========================================================
5️⃣ HOW DEFAULT PARAMETERS WORK
=========================================================

Default value is used ONLY when:

✔ Argument is NOT passed
✔ Argument is undefined
*/


function test(value = 10) {
  console.log(value);
}

test();          // 10
test(undefined); // 10
test(null);      // null (IMPORTANT)



/*
null ≠ undefined
Default works ONLY with undefined
*/


/* =========================================================
6️⃣ MULTIPLE DEFAULT PARAMETERS
========================================================= */

function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum());      // 0
console.log(sum(5));     // 5
console.log(sum(5, 10)); // 15



/* =========================================================
7️⃣ USING OTHER PARAMETERS AS DEFAULT
========================================================= */

function multiply(a, b = a * 2) {
  console.log(a, b);
}

multiply(5); // 5, 10



/* =========================================================
8️⃣ DEFAULT WITH FUNCTIONS
========================================================= */

function getValue() {
  return 100;
}

function testFunc(value = getValue()) {
  console.log(value);
}

testFunc(); // 100



/* =========================================================
9️⃣ DEFAULT + DESTRUCTURING (ADVANCED)
========================================================= */

function createUser({ name = "Guest", age = 18 } = {}) {
  console.log(name, age);
}

createUser();                     // Guest 18
createUser({ name: "Shubham" });  // Shubham 18



/* =========================================================
🔟 COMMON MISTAKES
=========================================================

 Assuming null triggers default

function test(a = 5) {
  console.log(a);
}

test(null); // null (NOT 5)


✔ Only undefined triggers default
*/


/* =========================================================
SUMMARY
=========================================================

Default Parameters:
✔ Assign default values to parameters
✔ Work only with undefined
✔ Improve readability
✔ Replace old || pattern

Best Practice:
✔ Always use default parameters
for safer functions
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS + ANSWERS
=========================================================

Q1: What are default parameters?

Answer:
Default values assigned to function parameters.


--------------------------------------------


Q2: When do default parameters apply?

Answer:
When argument is undefined or not passed.


--------------------------------------------


Q3: What will be output?

function test(a = 5) {
  console.log(a);
}

test(undefined);
test(null);

Answer:
5
null


--------------------------------------------


Q4: Difference between old and new approach?

Answer:
Old uses || (can fail with falsy values),
New uses proper default parameters.


--------------------------------------------


Q5: What will be output?

function sum(a = 1, b = a + 1) {
  console.log(a, b);
}

sum(5);

Answer:
5, 6


=========================================================
END OF FILE
=========================================================
*/
