// // const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// // console.log(descripter);


// // console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);


// const chai = {
//   name: "chai",
//   price: 250,
//   isAvailable:true,
//   orderChai:function() {
//     console.log("Chai nahi hai");
//   }
// }

// // console.log(chai);
// // // console.log(Object.getOwnPropertyDescriptors(chai));
// // console.log(Object.getOwnPropertyDescriptors(chai,"name"));

// // Object.defineProperty(chai,'name',{
// //   writable:false,
// //   enumerable:false
// // })

// // console.log(Object.getOwnPropertyDescriptors(chai,"name"));

// for (const [key,value] of Object.entries(chai)) {
//   if (typeof value !== "function") {
//      console.log(`${key } ,${value}`);
//   }
// }


//////////////////////////////////////Getter Setter////////////////////////////////////////

// class User{
//   constructor(email,password){
//     this.email = email;
//     this.password = password;
//   }

//   get password(){
//     return this._password.toUpperCase();
//   }

//   set password(value){
//     this._password = value;
//   }
// }

// const anurag = new User("anurag07raj@","abc")
// console.log(anurag.password);


// function User(email,password){
//   this.email = email;
//   this.password = password;

//   Object.defineProperty(this,'email',{
//     get(){
//       return this._email;
//     },
//     set(value){
//       this._email = value;
//     }
//   })
// }

// const anurag = new User("anurag07raj@","abc")
// console.log(anurag.email);
 

// const User = {
//   _email: "anurag07raj@",
//   _password: "abc",
//   get email(){
//     return this._email;
//   },
//   set email(value){
//     this._email = value;
//   }
// }

// const tea = Object.create(User);
// console.log(tea.email);