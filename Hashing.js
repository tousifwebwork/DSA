// Pattern 1: Seen-before (Set)
// const seen = new Set();
// for (const x of arr) {
//   if (seen.has(x)) return true;
//   seen.add(x);
// }

// Pattern 2: Frequency count (Map)
// const freq = new Map();
// for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);

// Pattern 3: Complement lookup (Map: value to index)
// Two Sum. For each x, look for target - x.

// Pattern 4: Group by key (Map of arrays)
// Group Anagrams. Build a key from each item and push into map.get(key).

// Pattern 5: Prefix sum + Map
// Store running sums and how often each appeared. This solves "subarray with sum k" and is very common in Medium problems.
// // count subarrays with sum = k
// const seen = new Map([[0, 1]]);
// let sum = 0, count = 0;
// for (const x of nums) {
//   sum += x;
//   count += seen.get(sum - k) || 0;
//   seen.set(sum, (seen.get(sum) || 0) + 1);
// }






// /1. Single Number
// function Appere_once(arr){
//     let num=0;
//     const map = new Map();
//     for(i of arr){
//         map.set(i,(map.get(i)||0)+1)
//     } 
//     for([key,val] of map){
//         if(val===1){
//             num=key
//         }
//     } 
//     return num
// }
// console.log(Appere_once([4,1,2,1,2])) //4
// function Appere_once(arr){
//     const set = new Set();
//     for(let i of arr){
//         if(set.has(i)){
//             set.delete(i)
//         }else{
//             set.add(i)
//         }
//     }
//     return [...set][0]
// }
// console.log(Appere_once([4,1,2,1,2])) //4


//2. Find the Difference
// function extra_letter(s,t){
//    let map = new Map();
//     for (let ch of s) {
//       map.set(ch, (map.get(ch) || 0) + 1);
//     }
//     for (let ch of t) { 
//         if (map.has(ch)) {
//             map.set(ch,map.get(ch)-1)
//         }else{
//             return ch
//         }
//     }
// }   
// console.log(extra_letter("abcd","abcde")) //e


// function extra_letter(s,t){
//     let set = new Set(s);
//     for(let ch of t){
//         if(!set.has(ch)){
//             return ch;
//         }
//     }
// }

// console.log(extra_letter("abcd","abcde")) //e






//3. First Unique Character in a String
// function first_unique(str){
//    let uniq = new Map();
//     for (let i in str) {
//         uniq.set(str[i], (uniq.get(str[i]) || 0) + 1);   // 1. Count each character
//     }
//     for(let i in str){
//         if(uniq.get(str[i])==1){
//             return i
//         }
//     }
//     return -1
// }
// console.log(first_unique("Leetcode"))
// console.log(first_unique("loveleetcode"));  // 2
// console.log(first_unique("aabb"));           // -1





//4. Word Pattern

// function Word_Pattern(pattern,word){
//     let words = word.split(" ")
//     let map = new Map();
//     let x=0
//     for(let i=0;i<pattern.length;i++){
//         if(map.has(pattern[i])){
//             if(map.get(pattern[i])!==words[i]){
//                 return false
//             }
//         }else{
//             map.set(pattern[i],words[i])        
//         }
//     } 
//     return true
// }


// console.log(Word_Pattern("abba","dog cat cat dog"))   //true
// console.log(Word_Pattern("abba","dog cat cat fish"))  //false
// console.log(Word_Pattern("aaaa","dog cat cat dog"))   //false





//5. Contains Duplicate II (LeetCode 219)

// function Contains_Duplicate(arr,k){
//     let set = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         if (set.has(arr[i])) {
//             return true;
//         }
//         set.add(arr[i]);
//         if (set.size > k) {
//             set.delete(arr[i - k]);
//         }
//     }
//    return false;
// }
// console.log(Contains_Duplicate([1,2,3,1],3));
// console.log(Contains_Duplicate([1,2,3,1,2,3],2));



//6. 4Sum II (LeetCode 454)
// function fourSum(A, B, C, D) {
//     let count = 0;

//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < B.length; j++) {
//             for (let k = 0; k < C.length; k++) {
//                 for (let l = 0; l < D.length; l++) {

//                     if (A[i] + B[j] + C[k] + D[l] === 0) {
//                         count++;
//                     }

//                 }
//             }
//         }
//     }

//     return count;
// }

// function fourSum(A, B, C, D) {
//     let map = new Map();
//     let count = 0;

//     // Store A + B sums
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < B.length; j++) {
//             let sum = A[i] + B[j];
//             map.set(sum, (map.get(sum) || 0) + 1);
//         }
//     }

//     // Check C + D
//     for (let i = 0; i < C.length; i++) {
//         for (let j = 0; j < D.length; j++) {
//             let sum = C[i] + D[j];

//             if (map.has(-sum)) {
//                 count += map.get(-sum);
//             }
//         }
//     }

//     return count;
// }

// function fourSum(A, B, C, D) {
//     let sum1 = [];
//     let sum2 = [];
//     let count = 0;

//     // A + B
//     for (let a of A) {
//         for (let b of B) {
//             sum1.push(a + b);
//         }
//     }

//     // C + D
//     for (let c of C) {
//         for (let d of D) {
//             sum2.push(c + d);
//         }
//     }

//     // Compare
//     for (let x of sum1) {
//         for (let y of sum2) {
//             if (x + y === 0) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }
 
// console.log(fourSum([1, 2],[-2, -1],[-1, 2],[0, 2])); // 2


//Anagrams in a String  abcdefg
// function Anagram_str(s, p) {
//     let result = []; 
//     let sprtedP = p.split("").sort().join("");
//     for(let i=0;i<s.length;i++){
//         let subStr = s.substring(i,i+p.length);
//         if(subStr.split("").sort().join("")===sprtedP){
//             result.push(i);
//         }
//     } 

//     return result;
// }

// console.log(Anagram_str("cbaebabacd", "abc"));
// console.log(Anagram_str("abab", "ab"));





// function Continuous_Subarray_Sum(arr,k){ 
//     for(let i=0;i<arr.length;i++){
//           let sum = 0;
//         if((arr[i]+arr[i+1])%k ===0 ){
//             return true
//         }
//     }
//     return false
// }
// console.log(Continuous_Subarray_Sum([23,2,4,6,7],6)) //true
// console.log(Continuous_Subarray_Sum([23,2,6,4,7],13 )) //false




function Longest_substring(str) {

    let map = new Map();
    let left = 0;
    let max = 0;

    for (let i = 0; i < str.length; i++) {

        if (map.has(str[i])) {
            left = map.get(str[i]) + 1;
        }

        map.set(str[i], i);

        max = Math.max(max, i - left + 1);
    }
    console.log(map)
    return max;
}

console.log(Longest_substring("abcabcbb")); // 3
