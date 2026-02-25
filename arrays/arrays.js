// var x = 0 

// for(x=0; x<10;x=x+1){
//     console.log("123")
// }
// health= 100
// if(health =20){
// alert("WARNING!")
// }


// Here are some examples of how to use arrays in JavaScript:  
var fruits = ["apple", "banana", "orange"];

for(i=0;i<fruits.length;i++){
    if(fruits[i]=="banana"){
        console.log("I found a banana!")
    }
    else{
        console.log("banana not found")
    }
}

var vegetables = ["carrot", "broccoli", "spinach"];
 var x=vegetables.sort()
 console.log(x);

 var password ="Hello"
 if (password.length>8){
    console.log("Password is strong")
 }
 else{
    console.log("Password is weak")
 }
// 1. Basic Array
let numbers = [5, 2, 9, 1, 7];

alert("Original Array: " + numbers);

// 2. Sorting
numbers.sort();
alert("Sorted Array: " + numbers);

// 3. Slice
let sliced = numbers.slice(1, 4);
alert("Sliced Array (index 1 to 3): " + sliced);

// 4. For Loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Index " + i + " Value: " + numbers[i]);
}

// 5. While Loop
let count = 0;
while (count < 3) {
  console.log("While Loop Count: " + count);
  count++;
}

// 6. Do While Loop
let x = 0;
do {
  console.log("Do While Count: " + x);
  x++;
} while (x < 2);

// 7. Logic Practice – Filter Passed Students
let marks = [80, 45, 90, 60, 30];
let passed = [];

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 50) {
    passed.push(marks[i]);
  }
}

console.log("Students who passed: " + passed);
 