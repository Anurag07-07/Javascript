"use strict" //treat all JS Code as newer version
/*

// alert(3+3); //we are using node js, not browser

let name = "Anurag"
let age = 18
let isloggedIn = false
let state = null

//Primitive data types
//number => 2 to the power 33 has it range
//BigInt
//string
//Boolean
//null => standalone value
//undefined => value not assign
//Symbol 

console.log(typeof undefined); //undefined
console.log(typeof null);  //Object

*/

// *********************************Type Conversion*************************************************


/*
let score = "33"
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
let value5 = "1234f"
let valueInNumber2 = Number(value5)
console.log(valueInNumber2);
let value1 = undefined
let valueInNumber3 = Number(value1)
console.log(valueInNumber3);
let value2 = null
let valueInNumber4 = Number(value2)
console.log(valueInNumber4);
let boolean = true
let booleanInNumber = Number(boolean)
console.log(booleanInNumber);

let isLoggedIn = 1
let boolean1 = Boolean(isLoggedIn)
console.log(boolean1);
let isLoggedIn1 = ""
let boolean2 = Boolean(isLoggedIn1)
console.log(boolean2);
let isLoggedIn2 = "anurag"
let boolean3 = Boolean(isLoggedIn2)
console.log(boolean3);

let number = 33;
let string = String(number)
console.log(string);
console.log(typeof string)
*/


// ****************************************Operations**************************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2**3);
console.log(2%3);

let str1 = "hello"
let str2 = "anurag"
console.log(str1+str2);  //Concatination


console.log("1"+2);
console.log("1"+2+2);


console.log(1+"2"+2);
console.log(1+2+"2");

/*

The difference in the output of `console.log(1 + 2 + "2")` and `console.log("1" + 2 + 2)` is due to how JavaScript handles **type coercion** and operator precedence when dealing with numbers and strings.

### Example 1: `console.log(1 + 2 + "2");`
- **Step-by-step evaluation**:
  1. `1 + 2` → Addition is performed because both operands are numbers. Result: `3`.
  2. `3 + "2"` → Since one operand is now a string (`"2"`), JavaScript coerces the number `3` into a string and concatenates the two. Result: `"32"`.
- **Output**: `"32"`

### Example 2: `console.log("1" + 2 + 2);`
- **Step-by-step evaluation**:
  1. `"1" + 2` → Since one operand is a string (`"1"`), JavaScript coerces `2` into a string and concatenates the two. Result: `"12"`.
  2. `"12" + 2` → The same rule applies; `2` is coerced into a string and concatenated. Result: `"122"`.
- **Output**: `"122"`

---

### Why the Difference?
The difference arises because:
1. The `+` operator is both an **arithmetic operator** and a **string concatenation operator**.
2. JavaScript evaluates expressions **from left to right**, and when a string is encountered, subsequent additions turn into concatenations.

---

### Key Takeaway
- When working with mixed types, JavaScript converts numbers to strings if one operand is a string.
- To avoid ambiguity:
  - Use **explicit type conversions**:
    ```javascript
    console.log(String(1 + 2) + "2"); // "32"
    console.log("1" + String(2 + 2)); // "14"
    ```
  - Ensure operands are of the same type:
    ```javascript
    console.log(Number("1") + 2 + 2); // 5
    ```

Would you like more examples or explanations?

*/

console.log("1"+2+2);
console.log(+"");
console.log(+true);

let gameChanger = 100;
++gameChanger;
console.log(gameChanger);
gameChanger++;
console.log(gameChanger);