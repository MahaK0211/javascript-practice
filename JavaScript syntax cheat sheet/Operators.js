//Arithmetic operators
let a = 10,
  b = 3;

a + b; // 13
a - b; // 7
a * b; // 30
a / b; // 3.333...
a % b; // 1 (remainder)
a ** b; // 1000
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//Comparison operators
10 > 5; // true
10 < 5; // false
10 >= 10; // true
10 === "10"; // false
10 == "10"; // true
10 !== 5; // true
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 === "10");
console.log(10 == "10");
console.log(10 !== 5);
//Prefer === and !== to avoid unexpected type conversion.

//Logical operators
true && false; // false (AND)
true || false; // true (OR)
!true; // false (NOT)

console.log(10 && 10);
console.log(20 || 10);
console.log(!30);

//AND Operation
//Both conditions must be true
let age = 10;
if (age == 20 && age < 60) {
  console.log("You can enter");
} else {
  console.log("You cannot enter");
}
console.log(age);

//OR Operation
//At least one condition must be true
let HasTicket = true;
let HasPass = false;
if (HasTicket || HasPass) {
  console.log("You can Proceed");
} else {
  console.log("You cannot Proceed");
}

//NOT Operation
//Reverses the boolean value
let loggin = true;
if (!loggin) {
  console.log("you can login");
} else {
  console.log("you cannot login");
}

//Conditional statement jgjgj

