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



function extra_letter(s,t){
    let set = new Set(s);
    for(let ch of t){
        if(!set.has(ch)){
            return ch;
        }
    }
}

console.log(extra_letter("abcd","abcde")) //e