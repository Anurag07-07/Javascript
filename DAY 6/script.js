//******************************************Array*******************************************************

const myArr = [0,1,2,3,4,5,"hitesh"]
console.log(myArr)
console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)

//Array methods

//Add Element
myArr.push(6)
console.log(myArr)

//Remove Element
myArr.pop()
console.log(myArr)

//Add Element at first
myArr.unshift(0)
console.log(myArr)

//Remove Element at first
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const myArr3 = myArr.join() //This method convert the array into string 
console.log(myArr3)
console.log(typeof myArr3);

// Slice vs Splice

//In slice only value will be extracted 
const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log(myArr)

//In splice the original value  will be cut 
const myn2 = myArr.splice(1,3);
console.log(myn2)
console.log(myArr)

//************************************ Arrays Types ***********************

const super_cars = ["Maclaren","Lamborghini","Buggati"]
const lamborghini = ["Aventador","Huracan","Veneno"]
super_cars.push("Ferrari")
// super_cars.push(lamborghini)
// super_cars.push(...lamborghini)
console.log(super_cars)

// Concat Array Way 1
const cars = super_cars.concat(lamborghini)
console.log(cars);

// Concat Array Way 2
const cars1 = [...lamborghini,...super_cars]
console.log(cars1);


//To spread Array Elements
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//To check if there is an array name hitesh
console.log(Array.isArray("hitesh"));

//To create an array from given value
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"})); //it can't directly convert this object into array so it will 
// return empty array


// to print variable name in form of array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


//*******************************************Objects*************************************/

//singleton
//Object literals
const mySym = Symbol("key1")

const JsUser = {
  name:"Anurag",
  // mySym:"mykey1", //This is not the correct way to represent the Symbol
  [mySym]:"mykey1", //This is the correct way to represent the Symbol
  age:18,
  location:"Delhi",
  email:"anurag07raj@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser);
// Way 1 to extract
console.log(JsUser.email);
// Way 2 to extract
console.log(JsUser["email"]);
// console.log(JsUser.mySym);
//This type is string as this is not the correct way
// console.log(typeof(JsUser.mySym));
//This type is Symbol as this is the correct way to represent Symbol
console.log(JsUser[mySym]);
console.log(typeof(JsUser[mySym]));

//To change the value
JsUser.email = "adityanv8@gmail.com"
console.log(JsUser);

//To freeze the Object (The Value will not be changed)
// Object.freeze(JsUser)
JsUser.email = "anurag07raj@gmail.com"
console.log(JsUser);

//Create Function inside Object
JsUser.greeting = function(){
  console.log(`Hello ${this.name} Welcome to Google`);
}

console.log(JsUser.greeting());