

//Greatest in array
// function findMax(arr) {
//   let max = arr[0];          
//   for (let i = 0; i < arr.length; i++) {
//     if(max<arr[i])max=arr[i]
//   }   
//   return max;
// }
// console.log("The Max "+findMax([1, 2, 3, 4, 5])); // should return 5 


//Second Largest Distinct Number
// function second_larget(nums){
//     let f = -Infinity;
//     let s = -Infinity;

//     for(let n of nums){
//         if(n>f){
//             s=f
//             f=n;
//         }else if(n<f && n>s){
//             s=n
//         }
//     }
//     return s === -Infinity ? null : s
// }
// console.log("Second Largest: "+second_larget([1, 2, 3, 4, 5]));  


//Maximum Subarray
// function maxSubArray(arr){
//     let curr = arr[0];
//     let best = arr[0];
//     for(let i of arr){
//         curr = Math.max(i,curr+i)
//         best = Math.max(best,curr)
//     }
//     return best
// } 
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



// var maxProfit = function(arr){
//     let min = arr[0];
//     let max = 0;
//     for(let i of arr){
//         let today = i - min;
//         max = Math.max(today,max)
//         min = Math.min(i,min)
//     }  

//     return max      
// };
// console.log(maxProfit([7,1,5,3,6,4]))
// console.log(maxProfit([4,4]))




// var productExceptSelf = function(nums) {
//     let arr=[];
//     for(let i=0;i<nums.length;i++){
//         let mul=1
//         for(let j=0;j<nums.length;j++){
//             if(i!==j){
//                 mul = mul * nums[j]
//             }
//         }
//         arr.push(mul)
//     }
//     return arr
// };
// console.log(productExceptSelf([1,2,3,4]))





//Rotate left
var rotateLeft = function(arr, k) {
    if(arr.length === 0)return
      k = k % arr.length;
    return [...arr.slice(-k),...arr.slice(0,-k)]
};
//Rotate Right
var rotateRight = function(nums, k) { 
    if(nums.length === 0)return
    k = k % nums.length;
    return [...nums.slice(k),...nums.slice(0,k)]
};
console.log(rotateLeft([1,2,3,4,5,6,7],3))
console.log(rotateRight([1,2,3,4,5,6,7],3))