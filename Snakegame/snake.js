console.log("hello world");
var age=22;
var Fname = "Bibi ";
var Lname = "Hajira MS";
console.log(name);
var age2=21;
var age3= age * age2;
console.log( age3);
console.log( name +" " + "z" +" "+ Lname);
var Age = 15;
Age = 30;
console.log(Age);

var health= 90;
var boost = 50;
if(health<100 && boost >=30) {
    
        console.log("run super fast");

}
var Health = 70;
console.log(Health < 80);
var HEALTH = 0;
if(HEALTH!=0){
    console.log("alive");

}

var energy=- 40;
if(energy > 80){
    console.log("run faster");
}
else if (energy > 50){


console.log("run");
}
else if(energy > 30){
    console.log('walk');
}
else if(energy>10) {
    console.log("walk slowly");
}
else{
    console.log("invalid value")
}
var x =5;
while(x > 0){
    console.log(x);
    x = x - 1

}

health = 0;
if(health==0){
    alert("game over");
}
var fruits = [, 'mango', 'banana', 'pineapple']
for(i=0; i<apple; i++){
    if(fruits[i] = "apple"){
       console.log("apple exists");
    }
        else { 
            console.log("apple does not exist");
        }
            
          }
var z= "hello zoya";
var y = "zayd";
var z = z.slice(4,7)
var z = z.toUpperCase()
var z = z.concat(y)
console.log(z);

var password= "zayd";
if(password < 7){
    console.log('weak password');
    
}
else{
    console.log('strong password');
}

function add (a=3, b=5){
    console.log('HI FROM ADD FUNCTION');
return a + b  
console.log(add()); 
};
var x= 2;
const PI = 3.14;
var x = 3;
console.log(x);
a= 5;
b = 6;

console.log(add(2,3));
class User{
    constructor(firstname, lastname){
        this.firstname
        this.lastname
    }
    get fullname(){
        return(this.firstname+ " " + this.lastname)
    }
    

}
var user1 = new name("zoya" , "harmain")
updatelastname(Lname)
    this.Lname = new Lname;


var user1 = new user( "zoya" , "harmain");
console.log(user1.getfullname());
updatelastname("zayd");
var date = new date;
console.log(date.getfulllyear)

function slowtask(){
    for(let i =0; i <10000; i++){

    }
    console.log('slowtask completed');
    
}
console.log('start');
setTimeout(() =>{
   console.log(insidetimeout) 
}
),200;
console.log('end');

var x = document.getElementsByClassName("xyz")
console.log([1].innerHTML);
var y = document.getElementsByTagName("h1")
console.log(y[0].innertext);
 var z = document.forms()
 console.log(z[0].elements);
 function validateForms(){
    var x = document.forms[0][password].value;
    if ( yes=" "){
        alert('password cannot be empty');
    }
    function openwindow(){
        console.loga("hello");
        var mywindow = window.open (
             "",
            "popup,",
            width =300, height=400

        );
        mywindow.document.write("this is a popup");

        }
    }
    function openwindow(){
        console.loga("hello");
        var mywindow = window.close ()
    }
    let w = confirm("submit form");
    console.log(w);
    var a  = prompt("enter name");
    console.log(a);

    
    function appendValue(value){
        let display=document.getElementById("display");
        display.value= display.value + value
    }

    
 function clearDisplay(){
    let display=document.getElementById("display");
    display.value=''
 }
 function backSpace() {
    let display=document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display=document.getElementById("display");
    try {
 display.value = eval(display.value)
    }
   catch {
    display.value = 'Error';
   }
}