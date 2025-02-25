/////////////////////Promise/////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/todos').then().catch().finally()

// const promiseOne = new Promise(function(resolve,reject){
//   //Do an async task
//   setTimeout(function(){
//     console.log("Async task is completed");
//     resolve()
//   },1000)
// })

// promiseOne.then(function(){
//   console.log("Promise is resolved")
// })



// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Async task is completed");
//     resolve()
//     },1000)
//   }).then(function(){
//   console.log("Promise is resolved");
// })


//Resolve is use to pass the value to then block
// const promiseThree = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     resolve({
//       name:"Anurag",
//       age:30
//     })
//   },1000)
// })

// promiseThree.then(function(data){
//   console.log(data);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       let error = false;
//       if(!error){
//         resolve({
//           name:"Anurag",
//           age:30
//         })
//       }else{
//         reject("Something went wrong")
//       }
//     },1000)
//   })

//   promiseFour.then((user)=>{
//     return user.name   //Rturn value can be printed in next then block
//   }).then((name)=>{
//     console.log(name);
//   }).catch(function(error){
//     console.log(error);
//   }).finally(()=> console.log("The Promise is either Resolved or rejected"))


//Async await not handle error so we use try and Catch Block
// const promiseFive = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     let error = true;
//     if(!error){
//       resolve({
//         name:"Javascript",
//         password:123
//       })
//     }else{
//       reject("Something went wrong")
//     }
//   },1000)
// })

// async function consumePromiseFive(){
//   try {
    
//     const response = await promiseFive
//     console.log(response);

//   } catch (error) {
    
//     console.log(error);

//   }
  
  
// }

// consumePromiseFive()

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => {return response.json()})
.then(json => console.log(json))
.catch(error => console.log(error))
.finally(() => console.log("The Promise is either Resolved or rejected"))


//error code comes inside resolve

//Read Fetch documentation