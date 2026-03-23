/*
=========================================================
15 - THIS KEYWORD IN JAVASCRIPT
=========================================================

This file covers:

1) What is "this"?
2) Global context
3) Inside normal function
4) Inside object method
5) Arrow function behavior
6) Strict mode difference
7) Common mistakes
8) Interview questions
=========================================================
*/


/* =========================================================
1️⃣ WHAT IS "this"?
=========================================================

"this" refers to the object
that is currently calling the function.

 Value of "this" depends on HOW function is called
NOT where it is written
*/


/* =========================================================
2️⃣ GLOBAL CONTEXT
========================================================= */

console.log(this);

/*
In Browser:
this → window object

In Node.js:
this → {}
*/


/* =========================================================
3️⃣ INSIDE NORMAL FUNCTION
========================================================= */

function show() {
  console.log(this);
}

show();

/*
Non-strict mode (browser):
this → window

Strict mode:
this → undefined
*/


/* =========================================================
4️⃣ INSIDE OBJECT METHOD
========================================================= */

const user = {
  name: "Shubham",
  greet: function () {
    console.log(this.name);
  }
};

user.greet(); // Shubham


/*
Here:
this → user object
because user is calling greet()
*/


/* =========================================================
5️⃣ ARROW FUNCTION
=========================================================

Arrow functions DO NOT have their own "this"

They take "this" from outer scope (lexical this)
*/


const obj = {
  name: "Rahul",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet(); // undefined


/*
Because arrow function ka apna this nahi hota
*/


/* =========================================================
6️⃣ NORMAL vs ARROW INSIDE OBJECT
========================================================= */

const person = {
  name: "Aman",

  normalFunc: function () {
    console.log("Normal:", this.name);
  },

  arrowFunc: () => {
    console.log("Arrow:", this.name);
  }
};

person.normalFunc(); // Aman
person.arrowFunc();  // undefined



/* =========================================================
7️⃣ NESTED FUNCTION PROBLEM
========================================================= */

const user2 = {
  name: "Shubham",

  greet: function () {
    function inner() {
      console.log(this.name);
    }

    inner();
  }
};

user2.greet(); // undefined


/*
Fix using arrow function
*/


const user3 = {
  name: "Shubham",

  greet: function () {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  }
};

user3.greet(); // Shubham



/* =========================================================
8️⃣ EXPLICIT BINDING (call, apply, bind)
========================================================= */

function showName() {
  console.log(this.name);
}

const userA = { name: "A" };
const userB = { name: "B" };

showName.call(userA); // A
showName.call(userB); // B



/* =========================================================
9️⃣ IMPORTANT RULES SUMMARY
=========================================================

1) Global → this = window / {}
2) Normal function → this = depends on call
3) Object method → this = object
4) Arrow function → this = outer scope
5) Strict mode → this = undefined (in functions)
*/


/* =========================================================
🔟 COMMON MISTAKES
=========================================================

 Using arrow function as object method

 Expecting "this" inside inner function

 Confusing where vs how function is called
*/


/* =========================================================
SUMMARY
=========================================================

"this" is dynamic:

✔ Depends on how function is called
✔ Arrow function takes lexical this
✔ Object method binds this to object

Golden Rule:
"this" depends on CALL SITE
=========================================================
*/


/* =========================================================
INTERVIEW QUESTIONS
=========================================================

Q1: What is "this"?

Answer:
Reference to the calling object.


--------------------------------------------


Q2: What will be output?

const obj = {
  name: "JS",
  show: function () {
    console.log(this.name);
  }
};

obj.show();

Answer:
JS


--------------------------------------------


Q3: What will be output?

const obj = {
  name: "JS",
  show: () => {
    console.log(this.name);
  }
};

obj.show();

Answer:
undefined


--------------------------------------------


Q4: Difference between arrow and normal function?

Answer:
Arrow does not have its own this.


--------------------------------------------


Q5: What is lexical this?

Answer:
this taken from outer scope.


=========================================================
END OF FILE
=========================================================
*/
