// const chars = "tousif".split("");   // string -> array
// console.log(chars)
// chars[0] = "x";
// const result = chars.join(""); // array -> string
// console.log(result)
// console.log(chars)

// console.log("a".charCodeAt(0))
// console.log(/[a-z]/.test("a")) 



// 1. Two_Sum using two loop - O(n²)
// function Two_Sum(arr,target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j] === target){
//             return[i,j]
//         }
//        }
//     }
//     return -1

// }
// console.log(Two_Sum([2,7,11,15],9))
// console.log(Two_Sum([3, 2, 4], 6))
// console.log(Two_Sum([3, 3],9))

// 1. Two_Sum using Map - O(n)
// function Two_Sum(arr,target){
//    const map = new Map()
//    for(let i=0;i<arr.length;i++){
//      const need=target-arr[i]
//      if(map.has(need)){
//         return [map.get(need),i]
//      }
//      map.set(arr[i],i)
//    }
//    return -1
// }
// console.log(Two_Sum([2,7,11,15],9))
// console.log(Two_Sum([3, 2, 4], 6))
// console.log(Two_Sum([3, 3],9))



//3. Reverse String 
// function palindrome(str) {
//     const clean = str.toLowerCase().replace(/[^a-z0-9]/g,"")
//     const rev = clean.split("").reverse().join("")
//     return rev===clean
// }
// console.log(palindrome("A man, a plan, a canal: Panama")); // true
// console.log(palindrome("race a car")); // false
// console.log(palindrome("")); // true




//4. Longest Sub-String
 
// function Longest_Prefix(str){
//     let ans = str[0];
//     for(let i=1;i<str.length;i++){
//        while(!str[i].startsWith(ans)){
//         ans = ans.slice(0,-1)
//        }
//     }
//     return ans
// }
// console.log(Longest_Prefix(["flower","flow","flight"])) // "fl" 


// Max sub array
// function maxSubArray(arr) { 
//     let sum=0;
//     let max=arr[0];
//     for(let i of arr){
//         sum+=i;
//         if(sum>max){
//             max=sum;
//         }
//         if(sum<0){
//             sum=0;
//         }
//     }
//     return max
// }
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); 