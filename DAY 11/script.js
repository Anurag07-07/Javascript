console.log(1234);

/////////////////////////////////////////////For Of Loop/////////////////////////////////////////////////////
["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]

for (const element of arr) {
  console.log(element);
}


/////////////////////////////////////////////Maps/////////////////////////////////////////////////////
//All Value should be Unique
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York')
console.log(map.get('name')); // John

for (const [key,value] of map) {
  console.log(key+":"+value); 
}

const myObj = {
  name: 'John',
  age: 30,
  city: 'New York'
}

// for (const [key,value] of Object.entries(myObj)) {
//   console.log(key+":"+value); 
// }


for (const key in myObj) {
       console.log(myObj[key]);
}

const arr1 = [1,2,3,4,5]

for (const key in arr1) {
  console.log(arr1[key]);
}

///////////////////////For Each Loop/////////////////////////////////

const coding = ["js","cpp","java"]

coding.forEach((name)=>{
  console.log(name);
})

//////////////Another Way

function printMe(item){
  console.log(item);
}

coding.forEach(printMe)

////////////////To get the index of the item in the array///////////////////

function printMe(item,index,arr){
  console.log(item,index,arr);
}

coding.forEach(printMe)

////////////////////////////For Each Loop For Object Arrays///////////////////////////

const myObj1 = [
  {name:"John",age:30},
  {name:"Jane",age:25},
  {name:"Alice",age:35}
]


myObj1.forEach((item)=>{
  console.log(item.name,item.age);
})


//Filter

const mynum = [1,2,3,4,5,6,7,8,9]
const value = mynum.filter((value)=>{
  return value > 5
})

console.log(value);

//For Each

const newNums = []
mynum.forEach((num) => {
  if(num > 5){
    newNums.push(num)
  }
})
console.log(newNums);

//map 

const numbers = [1,2,3,4,5,6,7,8,9] 

const newNums1 = numbers.map((num)=>{
  return num+2
})

console.log(newNums1);

//Reduce
//Intial Value goes inside accumulator

const numbers1 = [1,2,3,4,5,6,7,8]
const sum = numbers1.reduce((acc,cur) => {
  return acc+cur
},0)

console.log(sum);

//Task 
//Find The Total totalPrice

const shoppingCart = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    quantity: 2,
    pricePerItem: 15.99,
    totalPrice: 31.98,
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    quantity: 1,
    pricePerItem: 49.99,
    totalPrice: 49.99,
  },
  {
    id: 3,
    name: "Notebook",
    category: "Stationery",
    quantity: 3,
    pricePerItem: 2.5,
    totalPrice: 7.5,
  },
  {
    id: 4,
    name: "Water Bottle",
    category: "Home Essentials",
    quantity: 1,
    pricePerItem: 10.0,
    totalPrice: 10.0,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Electronics",
    quantity: 1,
    pricePerItem: 25.99,
    totalPrice: 25.99,
  }
];

// console.log(shoppingCart);


const Total_value = shoppingCart.reduce((acc,item)=>{
  return acc+item.totalPrice
},0)
console.log(Total_value)