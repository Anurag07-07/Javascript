console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);


/*

Let's break down the behavior of `null` and `undefined` in these comparisons in JavaScript, following the rules of type coercion and comparison.

---

### Case 1: `console.log(null > 0);`
- The `>` operator attempts to convert `null` to a number. 
- When `null` is converted to a number, it becomes `0`. So this becomes:
  ```
  0 > 0
  ```
- The result is `false`.

---

### Case 2: `console.log(null == 0);`
- The `==` operator performs a loose equality check, which does **not** perform numeric conversion for `null`.
- The only values `null` is loosely equal to are `undefined` and itself:
  ```
  null == 0  // false
  ```
- So the result is `false`.

---

### Case 3: `console.log(null >= 0);`
- The `>=` operator converts `null` to a number (as it does for `<`, `>`, `<=`, and `>=`).
- `null` becomes `0`, so the comparison becomes:
  ```
  0 >= 0
  ```
- This evaluates to `true`.

---

### Case 4: `console.log(null <= 0);`
- Similar to the `>=` case, `null` is converted to `0`:
  ```
  0 <= 0
  ```
- This evaluates to `true`.

---

### Case 5: `console.log(undefined > 0);`
- The `>` operator tries to convert `undefined` to a number. When `undefined` is converted to a number, it becomes `NaN`.
- Any comparison involving `NaN` (except `NaN != NaN`) is always `false`:
  ```
  NaN > 0  // false
  ```
- The result is `false`.

---

### Case 6: `console.log(undefined == 0);`
- The `==` operator does not convert `undefined` to a number.
- `undefined` is loosely equal only to `null` and itself:
  ```
  undefined == 0  // false
  ```
- The result is `false`.

---

### Case 7: `console.log(undefined >= 0);`
- The `>=` operator converts `undefined` to `NaN` for numeric comparison.
- Any comparison involving `NaN` is always `false`:
  ```
  NaN >= 0  // false
  ```
- The result is `false`.

---

### Case 8: `console.log(undefined <= 0);`
- Similar to the `>=` case, `undefined` is converted to `NaN`, so:
  ```
  NaN <= 0  // false
  ```
- The result is `false`.

---

### Summary Table:
| Expression          | Result  |
|---------------------|---------|
| `null > 0`          | `false` |
| `null == 0`         | `false` |
| `null >= 0`         | `true`  |
| `null <= 0`         | `true`  |
| `undefined > 0`     | `false` |
| `undefined == 0`    | `false` |
| `undefined >= 0`    | `false` |
| `undefined <= 0`    | `false` |

### Key Takeaways:
1. `null` is converted to `0` in numeric comparisons (`>`, `<`, `>=`, `<=`).
2. `null` is loosely equal (`==`) only to `undefined` and itself.
3. `undefined` becomes `NaN` in numeric comparisons, and any comparison involving `NaN` is always `false`.
4. `undefined` is loosely equal (`==`) only to `null` and itself.



*/

// # Primitive

// 7 Types : String Number Boolean null undefined Symbol BigInt

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID) //They both are not same
// const bigNumber = 213154565421328186n;


//Reference (Non Primitive)

//Array Objects Functions

//Array

const cars = ["Lamborghini","Maclaren","Pagani","Ferrari"]

//Object

let user = {
   name:"Anurag",
   company:"Google"
}

//Function

const greet = function(user) {
   console.log(`Hello I am ${user.name} and I am working in ${user.company}`);  
}

greet(user)

// Stack and Heap Memory 

//Only value is copied 

let myname = "Anurag Raj"
console.log(myname);

let anothername = myname 
anothername = "Aniket Raj"

console.log(anothername);
console.log(myname);

//Due to reference both object value will be changes

let user1 ={
  email:"user@gmail.com",
  upi:"user@ybl"
}

let user2 = user1;

user1.email = "anurag07raj@gmail.com"
console.log(user1);
console.log(user2);

