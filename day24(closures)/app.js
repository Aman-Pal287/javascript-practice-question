// Q1 .Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).
// function callerfnc(fn){
//     setTimeout(fn,3000);
// }
// callerfnc(function(){
//     console.log("makra")
// })

// Q2. Implement your own version of `.map()` as a higher-order function.

// layemn language- ek function banao jo ki accept kare array and accept kare ki kya chalana hai value par
// let arr = [1,2,3,4,5,6];

// function mapkicopy(a,fnc){
//     let newarr = []
//     for(var i = 0; i<arr.length; i++){
//         newarr.push(fnc(arr[i]));
//     }

//     return newarr;
// }
// let ans = mapkicopy(arr,function(value){
//     return value+1;
// })


// let ans = mapping(arr,(value)=> value*2)


//Q3. Write a function that uses closures to create a counter.

// function counter(){
//     let count = 0;   
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let fnc = counter();
// fnc()
// fnc()
// fnc()