/*
=========================================================
06 - ARROW FUNCTIONS & RETURN (DETAILED)
=========================================================

This file covers:

1) What are Arrow Functions?
2) Syntax differences
3) Return behavior (implicit vs explicit)
4) this keyword difference
5) Common mistakes
6) Interview questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT IS AN ARROW FUNCTION?
=========================================================

Arrow functions are a shorter way to write functions.

Introduced in ES6.

Syntax:
() => {}
*/


/* -------------------------
Normal Function
-------------------------- */

function add(a, b) {
  return a + b;
}


/* -------------------------
Arrow Function
-------------------------- */

const addArrow = (a, b) => {
  return a + b;
};

console.log(addArrow(2, 3)); // 5



/* =========================================================
2️⃣ IMPLICIT vs EXPLICIT RETURN
=========================================================

Arrow functions have TWO types of return:

1) Explicit Return
2) Implicit Return
*/


/* -------------------------
EXPLICIT RETURN
-------------------------- */

const sum1 = (a, b) => {
  return a + b;   // explicitly written
};


/* -------------------------
IMPLICIT RETURN
--------------------------

When you remove {} → no need to write return
*/

const sum2 = (a, b) => a + b;

console.log(sum2(2, 3)); // 5



/* =========================================================
IMPORTANT RULE
=========================================================

If {} are used → MUST use return
If {} are NOT used → automatic return
*/


/* =========================================================
3️⃣ RETURNING OBJECTS (IMPORTANT)
=========================================================

Arrow function me object return karte time
() use karna zaruri hai
*/


//  Wrong
const getUser1 = () => { name: "Shubham" };

// Correct
const getUser2 = () => ({ name: "Shubham" });

console.log(getUser2());


/* =========================================================
4️⃣ SINGLE PARAMETER SHORTCUT
========================================================= */

const square = x => x * x;

console.log(square(5)); // 25



/* =========================================================
5️⃣ MULTI-LINE FUNCTION
========================================================= */

const multiply = (a, b) => {
  let result = a * b;
  return result;
};



/* =========================================================
6️⃣ THIS KEYWORD (IMPORTANT DIFFERENCE)
=========================================================

Arrow functions DO NOT have their own this.
They take this from outer scope (lexical this).
*/


/* -------------------------
Normal Function
-------------------------- */

const user1 = {
  name: "Shubham",
  greet: function () {
    console.log(this.name);
  }
};

user1.greet(); // Shubham



/* -------------------------
Arrow Function
-------------------------- */

const user2 = {
  name: "Rahul",
  greet: () => {
    console.log(this.name);
  }
};

user2.greet(); // undefined


/*
Because arrow function ka apna this nahi hota
*/


/* =========================================================
7️⃣ WHEN TO USE ARROW FUNCTION
=========================================================

✔ Short functions
✔ Callback functions
✔ Functional programming

 Object methods
 When you need dynamic this
*/


/* =========================================================
8️⃣ COMMON MISTAKES
=========================================================

Forgetting return when using {}

const test = () => {
  5 + 5;
};

console.log(test()); // undefined


✔ Correct:

const test2 = () => {
  return 5 + 5;
};



/* =========================================================
9️⃣ REAL-LIFE USE (IMPORTANT)
========================================================= */

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]



/* =========================================================
SUMMARY
=========================================================

Arrow Function:
✔ Short syntax
✔ Implicit return possible
✔ No own this (lexical this)

Return:
✔ {} → need return
✔ no {} → automatic return
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS
=========================================================

Q1: Difference between arrow function and normal function?

Answer:
Arrow function does not have its own this.


--------------------------------------------


Q2: What is implicit return?

Answer:
Returning value without writing "return".


--------------------------------------------


Q3: What will be output?

const test = () => {
  return 5;
};

console.log(test());

Answer:
5


--------------------------------------------


Q4: What will be output?

const test = () => 5;

console.log(test());

Answer:
5


--------------------------------------------


Q5: What will be output?

const obj = {
  name: "A",
  show: () => {
    console.log(this.name);
  }
};

obj.show();

Answer:
undefined


=========================================================
END OF FILE
=========================================================
*/
