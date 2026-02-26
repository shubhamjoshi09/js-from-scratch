/*
===========================================
01 - VARIABLES IN JAVASCRIPT
===========================================

JavaScript me variables 3 tarike se declare kiye jaate hain:

1) var
2) let
3) const

-------------------------------------------
1️⃣ var
-------------------------------------------

- Old way (ES5)
- Function scoped hota hai
- Re-declare aur re-assign dono allowed
- Hoisting hoti hai (undefined ke saath)

Example:
*/

var name = "Shubham";
var name = "Rahul";   //  Re-declare allowed
name = "Aman";        //  Re-assign allowed

console.log(name);


/*
Problem with var:
Block scope follow nahi karta
*/

if (true) {
  var age = 25;
}

console.log(age); //  Accessible outside block (Problem)



/*
-------------------------------------------
2️⃣ let
-------------------------------------------

- Introduced in ES6
- Block scoped
- Re-assign allowed
- Re-declare NOT allowed
- Hoisting hoti hai but in TDZ (Temporal Dead Zone)

Example:
*/

let city = "Delhi";
city = "Mumbai";  //  Re-assign allowed
// let city = "Pune";  Re-declare not allowed

console.log(city);

if (true) {
  let score = 100;
}

// console.log(score);  Error (Block scoped)



/*
-------------------------------------------
3️⃣ const
-------------------------------------------

- Block scoped
- Re-declare NOT allowed
- Re-assign NOT allowed
- Must initialize at declaration

Example:
*/

const country = "India";
// country = "USA";  Error

console.log(country);


/*
Important:
const object ko modify kar sakte hain
*/

const user = {
  name: "Shubham"
};

user.name = "Rahul";  // Allowed

console.log(user);



/*
===========================================
Difference Summary
===========================================

var:
- Function scoped
- Re-declare 
- Re-assign 
- Avoid using in modern JS

let:
- Block scoped
- Re-declare 
- Re-assign 
- Use when value changes

const:
- Block scoped
- Re-declare 
- Re-assign 
- Use by default (recommended)

===========================================
Best Practice:
Always use const by default.
Use let when value needs to change.
Avoid var.
===========================================
*/
