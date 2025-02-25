
// Javascript and Classes

// Javsscript is prototype based language.


//OOPS
//Object Oriented Programming
//Collection of properties and methods

//Why use OOPS?
/*

Object-Oriented Programming (OOP) in JavaScript enhances code organization and reusability by modeling real-world entities as objects. It promotes modularity, making it easier to maintain and scale complex applications while leveraging concepts like encapsulation and inheritance. **Key Benefits of Using OOP in JavaScript**

- Improved Code Organization  
  OOP allows developers to structure code in a way that mirrors real-world entities, making it easier to understand and manage.

- Encapsulation  
  By bundling data and methods into classes, encapsulation helps protect the internal state of objects and exposes only necessary interfaces, reducing complexity.

- Abstraction  
  OOP enables developers to create simplified models of complex systems, focusing on essential features while hiding unnecessary details.

- Inheritance  
  This feature allows new classes to inherit properties and methods from existing classes, promoting code reuse and reducing redundancy.

- Polymorphism  
  Polymorphism allows for the use of a single interface to represent different data types, enabling flexibility in code and making it easier to extend functionality.

**Implementation of OOP Concepts in JavaScript**

1. **Classes and Objects**  
   JavaScript supports class-based OOP, allowing developers to define classes and create objects that encapsulate data and behavior.

2. **Constructor Functions**  
   Before ES6, constructor functions were used to create objects and implement inheritance through prototypes.

3. **Prototypes**  
   JavaScript uses prototypes to enable inheritance, allowing objects to share properties and methods.

4. **ES6 Classes**  
   With the introduction of ES6, JavaScript now has a more straightforward syntax for defining classes, making OOP more accessible.

5. **Modules**  
   OOP principles can be combined with JavaScript modules to create encapsulated and reusable code components.

**Conclusion**  
Using OOP in JavaScript not only enhances code quality and maintainability but also aligns with modern development practices, making it a preferred choice for building scalable applications.

*/



/*
// const user = {
//   username : "hitesh",
//   loginCount:8,
//   signedIn:true,
//   getUserDetails:function(){
//     // console.log(`the user is ${this.username} and has logged in ${this.loginCount} times`);
//     console.log(this);
//   }
// }

// //It Give empty Object inside node
// console.log(this);


// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
  this.username = username,
  this.loginCount = loginCount,
  this.isLoggedIn = isLoggedIn

  return this //It implicitlly defined so its your choice to return this or not
}

const user1 = new User("hitesh",12,true);
const user2 = new User('Anurag',8,true)
// console.log(user2.loginCount);

// console.log(user1.loginCount);
// console.log(user1.isLoggedIn);
console.log(user1.constructor);
console.log(user2);

read instance of

////////////////////////////////////Prototypal Behaviour/////////////////////////////////////////////////////


// function multiplyBy5(num){
//   return num*5
// }

// multiplyBy5.power = 2
// console.log(multiplyBy5.power);
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.prototype);

// // Function array string are Object

// function createUser(username,score){
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increment = function(){
//   this.score++;
// }

// createUser.prototype.printMe = function(){
//   console.log(`score is ${this.score}`);
// }

// const chai = new createUser('chai',25)
// const tea = new createUser('chai',250)

chai.printMe()

let myname = "Anurag          "

//Create a method
console.log(myname.trueLength);

let myHeros = ['thor','spiderman','ironman']

let heroPower = {
  thor:'hammer',
  spiderman:'web',
  ironman:'suit',

  getSpiderPower:function(){
    console.log(`Spidey power is ${this.spiderman}`)
  }
}


Object.prototype.hitesh = function(){
  console.log(`hitesh is present in all objects`); 
}

heroPower.hitesh()

Array.prototype.heyHitesh = function(){
  console.log("Hitesh says Hello");
}


//Object is not an array and we give new prototype to array so thats why it will not
//not work on object
myHeros.heyHitesh();
heroPower.heyHitesh()

*/

//Inheritance
const User = {
  name: 'John',
  age: 25,
}

const Teacher = {
  makeVideo:true
}

const TeachingSupport = {
  isAvailable:false
}

const TASupport = {
  makeAssignment : 'JS assignment',
  fullTime:true,
  __proto__:TeachingSupport //It can borrow properties from TeachingSupport
}

Teacher.__proto__ = User  //It can borrow properties from TeachingSupport
Object.setPrototypeOf(Teacher,User) //It can borrow properties from User into Teacher


let anotherUsername = "Anurag              "
//Get Trim length Applied on each String
String.prototype.trueLength = function(){
  console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()