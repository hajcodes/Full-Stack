class User{
   constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
   }
   getFullName(){
      return (this.firstName + " " + this.lastName);        
   }

}

var user1 = new User("John", "Doe");

console.log(user1.getFullName());

//    }

//     methodName(a,b){
//         dosomething
//         return xyz
//     }
// }
//methods are functions that are defined inside a class and
// can be called on instances of the class. They can access and modify the properties of the class and perform specific actions related to the class. Methods are defined using the method syntax, which is similar to regular function syntax but without the function keyword. They can take parameters and return values just like regular functions.
// 1️⃣ Class as Blueprint
class AquaGuard {
  constructor(location, capacity, monitorName) {
    this.location = location;
    this.capacity = capacity;
    this.monitorName = monitorName;
  }

  displayDetails() {
    console.log("Location:", this.location);
    console.log("Capacity:", this.capacity);
    console.log("Monitor:", this.monitorName);
  }

  refillTank() {
    console.log(this.location + " tank is being refilled...");
  }
}

// Creating Objects from Class
const unit1 = new AquaGuard("Block A", 500, "Rahul");
const unit2 = new AquaGuard("Block B", 300, "Aisha");

unit1.displayDetails();
unit2.displayDetails();
unit1.refillTank();


// 2️⃣ Role-Based Example (Monitor Check)
class Monitor {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  checkAccess() {
    if (this.role === "admin") {
      console.log(this.name + " has full access.");
    } else {
      console.log(this.name + " has limited access.");
    }
  }
}

const monitor1 = new Monitor("Zara", "admin");
const monitor2 = new Monitor("Ali", "viewer");

monitor1.checkAccess();
monitor2.checkAccess();


// 3️⃣ Asynchronous Function Example
function simulateWaterCheck() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Water quality check completed.");
    }, 2000);
  });
}

async function checkSystem() {
  console.log("Checking water system...");
  const result = await simulateWaterCheck();
  console.log(result);
}

checkSystem();