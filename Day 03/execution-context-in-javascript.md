
# Execution Context in JavaScript

## What is Execution Context?

In JavaScript, an **Execution Context** is the environment in which the JavaScript code is evaluated and executed. It holds the information about the current state of code execution such as variable scope, the value of `this`, and the order of execution.

Every time JavaScript runs a function or block of code, it creates an execution context.

---

## Types of Execution Context

1. **Global Execution Context (GEC)**
   - Created when your JavaScript code starts executing.
   - It represents the outermost environment (e.g., the window object in browsers).
   - There is only one global execution context per program.
   
2. **Function Execution Context (FEC)**
   - Created each time a function is invoked.
   - Contains the variables, parameters, and the inner scope for that specific function.
   
3. **Eval Execution Context**
   - Created when the `eval` function is executed.
   - Rarely used in modern code.

---

## Components of Execution Context

Each execution context has three main components:

1. **Variable Object (VO)**  
   - Contains all variables, function declarations, and parameters defined in the context.

2. **Scope Chain**  
   - Contains the variable objects from the current context and its parent contexts, allowing access to outer scope variables.

3. **`this` Binding**  
   - Refers to the object that is the current context of execution.

---

## Execution Context Lifecycle

1. **Creation Phase**  
   - The JavaScript engine sets up the Variable Object.
   - Functions and variables are declared.
   - The value of `this` is determined.

2. **Execution Phase**  
   - Code inside the execution context is executed line by line.
   - Variables are assigned values, and functions are invoked as needed.

---

## Why Is Execution Context Important?

- It explains the **scope** and **hoisting** behavior in JavaScript.
- Helps understand the function call stack and how asynchronous code is managed.
- Crucial for debugging, closures, and writing efficient code.

---

## Example

```javascript
var a = 10;

function foo() {
    var b = 20;
    console.log(a + b);
}

foo();
```

- When the engine runs this code:
  - A **global execution context** is created for global variables (`a`) and the function `foo`.
  - When `foo()` is called, a new **function execution context** is created containing variable `b`.
  - The inner console logs `30` because `foo` has access to the global variable `a` via the scope chain.

---

## Summary

The **Execution Context** is a foundational concept that describes the environment where JavaScript code runs. Understanding it is key to grasping variable scope, closures, hoisting, and how the JavaScript engine handles function invocation and the call stack.

---

*Would you like me to explain related topics like the Call Stack or Hoisting?*
