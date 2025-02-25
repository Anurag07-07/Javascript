// In function Expression if we call the function before it is defined, we will get a Error
//But in Function it is ok

console.log(addOne(5));
function addOne(nums) {
  return nums+1;
}

// console.log(addTwo(5))
const addTwo = function(nums) {
  return nums+2;
}
console.log(addTwo(5))

///////////////////////////////////////Arrow Function///////////////////////////////////////////////////////

const user = {
  username :"Anurag",
  price:99,
  welcomeMsg:function(){
    console.log(`Hello Welcome to our website ${this.username}`);
  }
}

user.welcomeMsg();
user.username = "Aniket"
user.welcomeMsg();
user.username = "Aditya"
user.welcomeMsg();

// Sabse jyada global object window object hai 

// inside function "this" is not working

function chai(){
  let username = "hitesh"
  console.log(this.username);
}

chai()

const name = ()=>(
  console.log(`Hello its Anurag Here`)
)
console.log(name());


//Implicit Run

const add = (num1,num2) => num1+num2;
console.log(add(45,56))

//Explicit Run

const object = (num1,num2) => ({name:"Anurag"});
console.log(object());

///////////////////////////////////////////IIFE///////////////////////////////////////////////////
// IIFE - Immediately Invoked Function Expression
// It is a function that runs as soon as it is defined.
// It is used to create a new scope and to prevent global variables from being overwritten.
// It is also used to create a new context for the function.
// It is a self-executing function that runs immediately after it is defined.

(function chai(){
  console.log(`DB Connected`);
})();

((num1,num2) => (
  console.log(num1+num2) 
)
)(45,56)


//Watch Lecture 25 