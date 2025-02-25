/*
Notes

Here's a detailed note explaining the given code and concepts used:

---

### **Notes on the Code**

1. **Variable Declaration and Initialization:**
   - `const accoundId = 144553`  
     - Declares a constant `accoundId` with the value `144553`.
     - Constants are immutable, meaning their value cannot be reassigned.
     - Attempting to reassign `accoundId` (e.g., `accoundId = 2`) will result in an error.
   - `let accountEmail = "anurag07raj@gmail.com"`  
     - Declares a variable `accountEmail` using `let` and initializes it with an email address.
     - `let` allows reassignment, so `accountEmail = "adityanv8@gmail.com"` is valid.
   - `var accountPassword = "12345"`  
     - Declares a variable `accountPassword` using `var` and initializes it with a password.
     - **Note:** Avoid using `var` because it has **functional scope** (not block-scoped), which can lead to unintended behavior.
   - `accountCity = "Greater Noida"`  
     - Assigns a value to an undeclared variable, implicitly making it global (in non-strict mode). 
     - It is better to explicitly declare variables using `let`, `const`, or `var`.
   - `let accountState;`  
     - Declares a variable `accountState` using `let` without initialization. Its value is `undefined` by default.

2. **Reassignment Examples:**
   - `accountEmail = "adityanv8@gmail.com"`  
     - Changes the value of `accountEmail` since it is declared with `let`.
   - `// accountCity = "Delhi"`  
     - This line is commented out but would work since `accountCity` is treated as a global variable (not recommended).

3. **Console Output:**
   - `console.table([...])`  
     - Displays data in a tabular format in the console.
     - The table includes the following:
       - `accoundId` (constant): **144553**  
       - `accountEmail` (reassigned): **"adityanv8@gmail.com"**  
       - `accountPassword` (var): **"12345"**  
       - `accountCity` (global): **"Greater Noida"**  
       - `accountState` (uninitialized): **`undefined`**

4. **Best Practices:**
   - **Avoid `var`:**  
     Variables declared with `var` are hoisted and have functional scope, which can lead to bugs. Use `let` or `const` instead.
   - **Use `const` when the value should not change:**  
     For values that do not require reassignment (e.g., `accoundId`), `const` is more suitable.
   - **Declare variables explicitly:**  
     Avoid creating global variables by omitting `let`, `const`, or `var` (e.g., `accountCity`).

5. **Key JavaScript Concepts:**
   - **`const`:** For variables whose value should remain constant. Immutable after declaration.
   - **`let`:** For block-scoped variables that may change later.
   - **`var`:** For functional-scoped variables. Not recommended due to block scope issues.
   - **Global Variables:** Created when assigning values to undeclared variables. Avoid this as it can lead to scope pollution.
   - **`undefined`:** Default value of variables declared but not initialized (e.g., `accountState`).

---

### **Table Representation of the Final Values**

| Property         | Value                     |
|------------------|---------------------------|
| `accoundId`      | `144553`                 |
| `accountEmail`   | `"adityanv8@gmail.com"`  |
| `accountPassword`| `"12345"`               |
| `accountCity`    | `"Greater Noida"`       |
| `accountState`   | `undefined`             |

---

By adhering to these best practices, your code becomes more predictable, readable, and free from unexpected behaviors caused by scope issues.


*/

const accoundId = 144553
let accountEmail = "anurag07raj@gmail.com"
var accountPassword = "12345"
accountCity = "Greater Noida"
let accountState;


// accoundId = 2 // not allowed
accountEmail = "adityanv8@gmail.com"
// accountCity = "Delhi" //Don't do this

/*
Prefer Not to use var
because of issue in block scope and functional scope

*/

console.table([accoundId, accountEmail, accountPassword, accountCity,accountState]) 