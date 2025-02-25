//*************************************************Strings ************************************/
console.log("Hello"+"World");

let name = "Anurag Raj"
let repoCount = 10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const name1 = new String("Anurag Raj"); //This has return Type Object
console.log(name1.length);
console.log(name1.toUpperCase()); //It can't change Original Value
console.log(name1.toLowerCase()); //It can't change Original Value
console.log(name1[0]);
console.log(name1.__proto__);
console.log(name1.charAt(4));
console.log(name1.indexOf('A')); //if there is no element we get -1 as the value 

const newString = name1.substring(0,4) //4 is not included
console.log(newString);  

const anotherString = name1.slice(0,4)
console.log(anotherString);

// Q what is difference between slice and substring

/*

Feature	          slice()	            substring()
Negative indices	Counts from the end	Treated as 0
Start > End behavior	Returns an empty string	Swaps start and end
Use case preference	Substring with flexibility	Simpler cases without negatives

*/

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://anurag07raj.com/anurag%07raj"
console.log(url.replace('%07','_'));
console.log(url.includes('anurag'));

//Convert String in Array
console.log(name1.split(','));

//**************************************Number and Maths**************************************** */
const score = 400
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
//It give precision after Decimal
console.log(balance.toFixed(2))

const otherNumber = 23.8966
//it give precision from starting Number
console.log(otherNumber.toPrecision(3));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.SQRT2);
console.log(Math.abs(-4));

//Give closest Value
console.log(Math.round(4.6));
//Give Highest Integer Closer to that Number
console.log(Math.ceil(4.2));
//Give Lowest Integer Closer to that Number
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log(Math.random()*10 + 1);

const min = 10;
const max = 20;

//General Formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ***********************************************Date************************************************************

let myDate  = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let CreatedDate = new Date(2023,0,23)
let CreatedDate1 = new Date("2025-01-14")
console.log(CreatedDate.toDateString());
console.log(CreatedDate1.toLocaleString());
console.log(CreatedDate1.getTime()); //This is In MilliSecond

console.log(myDate.getMonth()+1); //+1 because month start with 0

myDate.toLocaleString('default',{
  weekday:"long",
  timeZone: "Asia/Kolkata"
})