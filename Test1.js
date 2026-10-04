


// const Two_Sum = (arr,t)=>{
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         let need = t-arr[i];
//         if(map.has(arr[i])){
//             return [map.get(arr[i]),i]
//         }
//         map.set(arr[i],i)
//     }
//     return -1
// }
// console.log(Two_Sum([2,2,11,15],9))






// function Anagram(str1, str2) {
//     let s1 = str1.split("").sort().join("").toLowerCase()
//     let s2 = str2.split("").sort().join("").toLowerCase()

//     return s1 === s2
// }





// const Anagram = (s1,s2)=>{
//     if(s1.length!==s2.length) return false;
//     let m = new Map();
//     for(let i of s1){
//         m.set(i,(m.get(i)||0)+1)
//     }
//     console.log(m)
//     for(let i of s2){
//         if(!m.get(i))return false;
//         m.set(i,(m.get(i)||0)-1);
//     }
//     console.log(m)
//     for(let val of m.values()){
//         if(val !== 0) return false;
//     }
//     return true
// }

// console.log(Anagram("listen", "silent")) // true
// //console.log(Anagram("hello", "world"))   // false





// const prod_arr = (arr) => {
//    let ans_arr = [];
//    for(let i=0;i<arr.length;i++){
//      let prod=1;
//      for(let j=0;j<arr.length;j++){
//         if(i!==j){
//             prod *= arr[j];
//         }
//      }
//      ans_arr[i]=prod
//    }
//    return ans_arr
// }
// console.log(prod_arr([1,2,3,4]));




 

function Longest_Consecutive(arr) {
    let set = new Set(arr);
    let max = 0;
    for(let i of arr){
        let count = 1;
        if(!set.has(i-1)){
            while(set.has(i+count)){
                count++
            }
        }
        max = Math.max(max,count)
    }
    return max;
}

console.log(Longest_Consecutive([100,4,200,1,3,2])) //4

