// function SetUsername(username){
//   //Complex DB calls
//   this.username = username;
//   console.log("called");
// }

// function createUser(username,email,password){
//   SetUsername.call(this,username) //we have to pass this we dont need that username can you there this as it refernce has no such value
//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser('chai','chai@itb',123)
// console.log(chai);


///////////////////////////////////Classes////////////////////////////////////
// class User {
//   constructor(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword(){
//     return `${this.password}abc`
//   }

//   Changeusername(){
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai = new User('chai','chai@itb',123)
// console.log(chai.encryptPassword());
// console.log(chai.Changeusername());

//////////////////////////////////////////Inheritance//////////////////////////////////////////////
// class User {
//   constructor(username){
//     this.username = username;
//   }
  
//   logMe(){
//     console.log(`USERNAME is ${this.username}`);
//   }
// }

// class Teacher extends User{
//   constructor (username,email,password){
//     super(username) //we have to call the parent class constructor
//     this.email = email
//     this.password = password
//   }

//   addCourse(){
//     console.log(`A new course was added by ${this.username}`);
//   }
// }

// const chai = new Teacher('chai','chai@itb',123)
// console.log(chai.addCourse());
// console.log(chai.logMe());

// console.log(chai instanceof Teacher);


// class User {
//   constructor(username){
//     this.username = username;
//   }
  
//   logMe(){
//     console.log(`USERNAME is ${this.username}`);
//   }

//   static createId(){   //static can stop the access
//     return `123`
//   }
// }

// const anurag = new User('anurag')
// console.log(anurag.createId());