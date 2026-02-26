console.log(typeof add);

function add(a=0, b=0) {
    console.log("Hi I'm add function a:",a,"b:",b);
    console.log('arguments:', arguments);
    return  a+b;
}

var a=7;
var b=8;
//function is also an object in JavaScript, so we can assign it to a variable
console.log(add(3,6));
//function expression to understand the concept of function in JS
const sub = function(a,b) {
    console.log("Hi I'm sub function a:",a,"b:",b);
    return a-b;

};
console.log(sub(10,5));

// Variable Practice
var name = "Hajira";
let age = 21;
const country = "India";

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// Function with Parameters
function greet(userName) {
  return "Hello, " + userName + "!";
}

console.log(greet(name));

// Function with Multiple Parameters
function add(a, b) {
  return a + b;
}

console.log("Sum:", add(5, 3));

// Callback Function Example
function processUserInput(callback) {
  let user = "Developer";
  callback(user);
}

processUserInput(function(name) {
  console.log("Welcome, " + name);
});

// Arrow Function Practice
const multiply = (x, y) => x * y;
console.log("Multiplication:", multiply(4, 6));
