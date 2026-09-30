

// function fac(n){
//     if(n<=1)return 1
//     return n*fac(n-1)
// }
// console.log(fac(5))


// function fib(n){
//     if(n<2){
//         return n
//     }
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(5))




// function fibMemo(n, memo = new Map()) {
//   if (n < 2) return n;
//   if (memo.has(n)) return memo.get(n);
//   const res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
//   memo.set(n, res);
//   return res;
// }

// console.log(fibMemo(5));







// const m = new Map();
// m.set("a", 1); 
// console.log(m)
// console.log(m.get("a"));

// const sam = new Set([1,23,4,4,5])
// console.log(sam.size)







//frequencey
// const freq = new Map();
// for(let i of "Hello"){
//     freq.set(i,(freq.get(i)||0)+1)
// }
// console.log(freq)
// var max = 0
// for(let [key,value] of freq){
//     if(value>max){
//         max = value
//     }
// }
// console.log(max)



// console.log([10, 9, 1].sort());                 
// console.log([10, 9, 1].sort((a, b) => a - b));
// console.log([10, 9, 1].sort((a, b) => b - a));
// const people = [
//     { id: 1, name: "Aisha", age: 8 },
//     { id: 2, name: "Omar", age: 10 },
//     { id: 3, name: "Fatima", age: 7 },
//     { id: 4, name: "Yusuf", age: 9 },
// ]; 
// console.log(people.sort((a,b)=>a.age-b.age).map(i=>[i.name,i.age]))

// console.log(new Array(5).fill(0))
// console.log(Array.from({length:3},(_,i)=>i))






//1. function sumArray(arr){
//   if(arr.length===0) return 0;
//   return arr.pop() + sumArray(arr)

// }
// console.log(sumArray([1,2,3,4,5]))


//2. function reverseString(s) {
//     if (s.length === 0) return "";  
//     return reverseString(s.slice(1))+s[0]
// }

// console.log(reverseString("hello"));



//3. function freq_count(str){
//     const freq = new Map();
//     let max=0;
//     let maxChar="";
//      for(let ch of str){
//         freq.set(ch,(freq.get(ch)||0)+1)
//         if(freq.get(ch)>max){
//             max=freq.get(ch)
//             maxChar=ch
//         }
//      }
//      return "Maximum char is '"+maxChar+"' with '"+max+"' times"
// }

// console.log(freq_count("Hello"))





// 4. function dublicate(arr){
//     return new Set(arr).size === arr.length ? false:true
// }

// console.log(dublicate([1, 2, 3,3]));

//4. map version
//  function dublicate(arr){
//     const arr_map = new Map()
//     for(let ch of arr){
//         arr_map.set(ch,(arr_map.get(ch)||0)+1)
//     }
//     for(let[key,val] of arr_map){
//         if(val>1){
//             return true
//         }
//     }
//     return false
// }

// console.log(dublicate([1, 2, 3,3]));

//4. map-V.2 
//    function deplicate(arr) {
//     const arr_map = new Map();
//     for(let ch of arr){
//         if(arr_map.has(ch)){
//             return true
//         }

//         arr_map.set(ch,1)   
//     }
//     return false

//    }
//    console.log(deplicate([1,2,3,3,4]))


//5. function anagram(s,t){
//     let s_map = new Map()
//     let t_map = new Map()
//     for (let ch of s) {
//         s_map.set(ch, (s_map.get(ch) || 0) + 1);
//     }
//     for (let ch of t) {
//         t_map.set(ch, (t_map.get(ch) || 0) + 1);
//     }

//     if (s_map.size !== t_map.size) return false;

//     for(let [char, val] of s_map){
//         if(t_map.get(char) !== val){
//             return false
//         }
//     }

//     return true
// }
// console.log(anagram("rat","car"))


//6. function sorting_by_num(arr){ 
//     return arr.sort((a,b)=>a[0]-b[0])
// }
// console.log(sorting_by_num([[3,"c"],[1,"a"],[2,"b"]]))


//7. function sorting_by_length(arr){ 
//     return arr.sort((a,b)=>a.length-b.length)
// }
// console.log(sorting_by_length(["banana","fig","apple"]))