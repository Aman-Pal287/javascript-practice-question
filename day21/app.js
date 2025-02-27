// 1. Log "Hello, JavaScript!" to the console in 3 different ways.
// console.log("hello");
// console.info("hello")
// console.error("hello")

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.
// console.log(35 * 2 - (10/2) + 7);


// 3. Log the data type of "123", 123, true, and null using typeof.
// console.log(typeof "123");
// console.log(typeof 123);
// console.log(typeof true);
// console.log(typeof null);


// 4. Write a program that swaps the values of two variables.
// let a = 12;
// let b = 25;
// let c;
// method:1
// c = a;
// a = b;
// b = c;
//method:2
// [a,b] = [b,a]
// console.log(a,b)

// 5. Use console.group() to organize logs into a group.
// console.groupCollapsed("list of response")
// console.log("201 success");
// console.log("401 error");
// console.log("500 response send");
// console.log("BKL");
// console.groupEnd()


// 6. Declare a const object, modify its properties, and log the updated object.
// const obj = {
//     name: "aman" ,
//     age: 50,
//     class : 10,
//     email : "test@example.com"
// }
// obj.name= "harsh"
// obj.age = 12
// obj.email = "harsh.com"
// obj.class = "3rd"
// console.log(obj)

// 7. Convert "50" (string) into a number using 3 different methods.
// let a = Number("50"); // number method
// let b = parseInt("50");// parseInt method
// let c = +"50"  // unary method


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// 8. Check if "JavaScript" contains "Script" without using .includes().
// let str = "JavaScript"
// console.log(str.includes("Script"))
// console.log(str.search("Script") !== -1);
// console.log(str.indexOf("Script") !== -1)

// 10. Explain the difference between undefined, null, and NaN with examples.
// let a; // Undefined
// console.log(a); // undefined

// let b = null; // Explicitly assigned null
// console.log(b); // null

// let c = "hello" / 2; // Invalid math operation
// console.log(c); // NaN
// console.log(typeof NaN); // "number" (weird JS quirk)