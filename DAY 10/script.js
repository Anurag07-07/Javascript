/*

//if

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("Yes");
}else {
  console.log("No");
}

const temperature = 41;

if (temperature < 50) {
  console.log("Less Than 50"); 
}else if (temperature > 50) {
  console.log("More Than 50");
}else {
  console.log("Equal To 50");
}

const debitCard = true;
if (isUserLoggedIn && debitCard) {
  console.log("Allow to buy Course");
}else{
  console.log("Not Allow to buy Course");
}

const userEmail = "anurag07raj@gmail.com"
if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have user email");
}

//flasy value
// false 0 -0 ,BigInt =0n, null undefined NaN 

//truthy Value
// "0",false," ",[],{},function(){}

//To check array is empty or not
if (userEmail.length ===0) {
  console.log("Array is Empty");
}else{
  console.log("Array is Not Empty");
}


//To check Object is empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log("Object is Empty");
} 


false == 0  //True
false == ''  //True
0 == ''   //True

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 10;
val4 = NaN ?? 10;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//Ternary operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Ice Tea is free") : console.log("Ice Tea is not free");


////////////////////////////////////////Iterations///////////////////////////////////

for (let i = 1; i <= 10; i++) {
  console.log(i*i);
}

let arr = ["Maclaren","Pagani","Lamborghini"]
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

//Break and Continue
//Read and Learn

//While Loop

let arr1 = [1,2,3,4,5,6,7,8,9,10]

let start = 0;
let end = arr1.length -1;
while (start<end) {
  let temp = arr1[start];
  arr1[start] = arr1[end];
  arr1[end] = temp;
  start++;
  end--;
}
console.log(arr1);

*/
//Do while
let value = 1;
do {
  console.log(value);
  value++;
} while (value <= 10);
