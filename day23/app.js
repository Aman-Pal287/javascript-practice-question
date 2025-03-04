// 1. Removing Duplicate Values from an Array :Problem=>Remove duplicate values from an array
// let arr = [1,2,5,1,2,3,1,5,6,1,2,3,4,2,3,1,4,3,2,1,6,1,2,3,4,3,1,6,1,32,1,5,13,4,5,6,];
// let ans = [...new Set(arr)];
// console.log(ans);

// 2. findind the second largest Number in an array : problem=>find the second lagest number in an array.

// let arr = [1,2,1,32,456,32,546,1,56,1,456,4,700,655,23,41,564,84,564,356,6,54]

// //step-1 unique
// let ans = [...new Set(arr)];

// //step-2 sort array in descensding order
// let newarr = ans.sort(function(a,b){
//     return b-a;
// })

// //step-3 1st index(arr[1]) of sorted(in descending) array
// console.log(newarr[1])

//ek level up answer niche hai
// console.log([...new Set(arr)].sort(function(a,b){
//     return b-a;
// })[1]);

//in fat arrow function
// console.log([...new Set(arr)].sort((a,b)=>b-a)[1]);

// sorting samajhne ke liye --------------------------
// let answer = arr.sort(function(a,b){
//     return b-a; // b-a karne pe descending order hojata hai
//     // return a-b; // a-b karne pe ascending order hota hai.

// })
// ----------------------------------------------------

// 4. reversing an array without reverse(): Problem=> Reverse an array without using .reverse()  
// let arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,273,214];
// let arr2 = [];
// for(let i = arr.length-1;i>=0; i--){
//     arr2.push(arr[i]);
// }
// console.log(arr)
// console.log(arr2)


// 5. finding the most frequent element in an array : Problem=> find the most frequent element in an array.

// let arr = [3,4,1,3,4,6,7];
// let obj = {}

// arr.forEach(function(val){
//     obj[val] === undefined ? obj[val] = 1 : obj[val]++;
// })


