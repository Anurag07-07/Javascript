// const tinderUser = new Object(); //Singleton Object
const tinderUser = {}; //Non SingleTon Object

tinderUser.name = "John"
tinderUser.age = 25
tinderUser.gender = "male"
tinderUser.interests = ["hiking", "reading", "coding"]
tinderUser.location = "New York"  
// console.log(tinderUser);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//Object merging 1

const obj3 = {...obj1,...obj2}
// console.log(obj3);

//Object merging 1
const obj4 = Object.assign({},obj1,obj2)
// console.log(obj3);


const students = [
  {
    id: 1,
    name: "Alice",
    age: 20,
    grade: "A",
    hobbies: ["Reading", "Swimming"]
  },
  {
    id: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    hobbies: ["Gaming", "Cycling"]
  },
  {
    id: 3,
    name: "Charlie",
    age: 19,
    grade: "A+",
    hobbies: ["Music", "Drawing"]
  }
];

// console.log(students[1].name);
// console.log(students);
console.log(Object.keys(students));
// console.log(Object.values(students));
// console.log(Object.entries(students));
// console.log(tinderUser.hasOwnProperty("isLoggedin"));

//Destructuring

const course = {
  coursename:"js in hindi",
  price:"999",
  courseInstructor:"hitesh"
}
  
// const {coursename,price,courseInstructor} = course;
const {coursename:a,price:b,courseInstructor:c} = course;
// console.log(coursename,price,courseInstructor);

console.log(a);