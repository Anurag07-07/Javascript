function add(a,b){
  console.log(a+b);
}

//In these there is no return type so it will return undefined
// function subtract(a,b){
//   console.log(a-b);
// }

//Return type is number
function subtract(a,b){
  return a-b
}

// function loginUserMessage(username){
//   if(!username){
//     console.log("Username is required");
//     return
//   }
//   return `Welcome ${username}`
// }

//Predefined Value
function loginUserMessage(username="Sam"){
  if(!username){
    console.log("Username is required");
    return
  }
  return `Welcome ${username}`
}


add(12,45)
add(12,"a")
add(12,null)
add(12,undefined)

const sub = subtract(12,45)
console.log("Result:",sub);

//This  will return value but we can't tell to print the value
loginUserMessage("Anurag")
console.log(loginUserMessage("Anurag"));
console.log(loginUserMessage());

/////////////////////////////////Rest and Spread Operator////////////////////////////////////////////////////////

//It return array
function calculateCartPrice(...num1){
  return num1
}

function calculateCartPrice1(num1,num2,...num3){
  return num1
}

console.log(calculateCartPrice(100,200,300,400,500));
console.log(calculateCartPrice1(100,200,300,400,500));


const user = {
  name: "Shirt",
  price:199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.name} and Price is ${anyobject.price}`);
}

handleObject(user)


const newNewArray = [200,400,100,600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(newNewArray));

///////////////////////////////////Scopes/////////////////////////////////////////////////////////

let a = 10
var b = 20  //Dont use it
const c = 30

function name(){
  a = "Anurag"
  console.log(a); 
}

//c = 40; //This gives the error
console.log(a);

name()

console.log(c)