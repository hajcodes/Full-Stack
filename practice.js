// Day 02 - Conditional Statements Practice

// 1. Voting Eligibility
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// 2. Even or Odd Checker
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// 3. Positive, Negative or Zero
let value = -5;

if (value > 0) {
    console.log("Positive number");
} else if (value < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


// 4. Grade Calculator (Nested If)
let marks = 82;

if (marks >= 50) {
    if (marks >= 75) {
        console.log("Distinction");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Fail");
}


// 5. Largest of Two Numbers
let a = 10;
let b = 25;

if (a > b) {
    console.log("A is greater");
} else if (b > a) {
    console.log("B is greater");
} else {
    console.log("Both are equal");
}


// 6. Logical Operator Practice
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}