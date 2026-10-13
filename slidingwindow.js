//Level 1: Fixed window (easy)

//1. Maximum sum of any subarray of size k
// function MaxSubArr(arr,k){
//    if(arr.length<k) return 0;

//    let windowSum = 0;
//    for(let i=0;i<k;i++) windowSum+=arr[i];

//    let sum=windowSum;
//    for(let i=k;i<arr.length;i++){
//      windowSum = windowSum + arr[i] - arr[i-k];
//      Math.max(windowSum,sum);
//    }
//    return windowSum
// }
// console.log(MaxSubArr([1,2,3,4,5], 2)); 


//2. Average of every subarray of size k
// function AvgSubArr(arr,k){
//     if(arr.length<k) return 0;
 
//     let windowSum=0;
//     for(let i=0;i<arr.k;i++){windowSum+=arr[i]}
//     let maxAvg=windowSum/k;

//     for(let i=k;i<arr.length;i++){
//         windowSum = windowSum + arr[i] - arr[i-k];
//         let currentAvg = windowSum/k;
//         maxAvg=Math.max(currentAvg,maxAvg);
//     }
//     return maxAvg
    
// }
// console.log(AvgSubArr([1,2,3,4,5], 2)); 
// console.log(AvgSubArr([], 2)); 


//3. Sum is atleast a given target
function sumFun(arr,k,target){
    if(arr.length<k) return 0;

    let windowSum=0;
    for(let i=0;i<arr.length;i++){
        windowSum += arr[i];
    }
    let count=0;
    if(windowSum>=target)count++;

    for(let i=k;i<arr.length;i++){
        windowSum += arr[i] - arr[i-k];
        if(windowSum>=target)count++;
    }
    return count

}
console.log(sumFun([1,2,3,4,5],3,4)); //3