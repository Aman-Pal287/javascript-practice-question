//Q1. Create a function that takes a callback and executes it after every `n` seconds indefinitely.

// function barbarchalao(fn,time){
//     setInterval(fn,time);
// }

// barbarchalao(function(){
//     console.log("hey");
// },2000)


//Q2. Implement a function that returns a function with a preset greeting (Closure).

//mera dimag ka solution
// function abcd (){
//     let greet = "Hello"
//     return function(name){
//         console.log(`${greet} ${name}`)
//     }
// }

// let greeting = abcd();
// greeting("aman");
// greeting("harsh");
// greeting("shubham");
// greeting("govinda");
// greeting("roushan");
// greeting("dkpl");


// sir ka dimag ka solution

// function greetkaro(greeting){
//     return function(name){
//         console.log(`${greeting}! ${name}`)
//     }
// }
// let greetingFunction  = greetkaro("Hello");
// greetingFunction("aman");
// greetingFunction("aman");
// greetingFunction("shubham");
// greetingFunction("dkpl");

// let spanishfnc = greetkaro("Hola!");
// spanishfnc("aman")
// spanishfnc("gkg")