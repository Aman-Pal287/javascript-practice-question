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


// sorting samajhne ke liye --------------------------
// let answer = arr.sort(function(a,b){
//     return b-a; // b-a karne pe descending order hojata hai
//     // return a-b; // a-b karne pe ascending order hota hai.

// })
// ----------------------------------------------------