
// palindrome
// const palindrome = (s) => {
//     let str1=s.replace(/[^a-zA-Z]/g,"").toLowerCase();
//     let str2=str1.split("").reverse().join("");
//     return str1===str2
// }
// console.log(palindrome("A man, a plan, a canal: Panama")); //true
// console.log(palindrome("race a car")); //false
// console.log(palindrome(" ")); //true




// const TwoSum = (arr,t)=>{
//     const map = new Map();
//     for(let ch in arr){
//         let need = t-arr[ch];
//         if(map.has(need)){
//             return [Number(map.get(need)),Number(ch)];
//         }
//         map.set(arr[ch],ch)
//     }
// }
// console.log(TwoSum([2,7,11,15],9)); //[0,1]
// console.log(TwoSum([3,2,4],6)); //[1,2]



// const Remove_Duplicates = (a)=>{
//     let k = new Set(a).size;
//     let arr = [...new Set(a)]

//     while(a.length>arr.length){
//         arr.push("_")
//     }
//     console.log(arr)

//     return k;
// }
// console.log(Remove_Duplicates([1,1,2]));                // -> k=2, [1,2,_]
// console.log(Remove_Duplicates([0,0,1,1,1,2,2,3,3,4] )); // -> k=5, [0,1,2,3,4,_,_,_,_,_]

// const Remove_Duplicates = (a) => {
//     let arr = [...new Set(a)];

//     for (let i = 0; i < arr.length; i++) {
//         a[i] = arr[i];
//     }

//     for (let i = arr.length; i < a.length; i++) {
//         a[i] = "_";
//     }

//     return arr.length;
// };

// console.log(Remove_Duplicates([1,1,2]));// 2
// console.log(Remove_Duplicates([0,0,1,1,1,2,2,3,3,4]));// 5






//Time is O(n log(n)) because of sort()
// const Squares_of_Sorted_Array = (arr) => {
//     let new_arr = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<0)new_arr[i] = arr[i] * (-1)
//         else new_arr[i] = arr[i] * (1)
//     }
//     let sort_arr = new_arr.sort((a,b)=>a-b);
//     let sq_arr=[];
//     for(let i=0;i<sort_arr.length;i++){
//         sq_arr[i] = sort_arr[i]*sort_arr[i]
//     }
//     return sq_arr
// }
// console.log(Squares_of_Sorted_Array([-4,-1,0,3,10])); // [0,1,9,16,100]
// console.log(Squares_of_Sorted_Array([-7,-3,2,3,11])); // [4,9,9,49,121]


// const Squares_of_Sorted_Array = (arr) => {
//     let l=0;
//     let r=arr.length-1;
//     let res = new Array(arr.length);
//     while(l<=r){
//         let left = Math.abs(arr[l]);
//         let right = Math.abs(arr[r]);
//         if(left > right){
//             res.unshift(l * l);
//             left++
//         }else{
//             res.unshift(r * r);
//             right--
//         }
//     }
//     return res
// }
// console.log(Squares_of_Sorted_Array([-4,-1,0,3,10])); // [0,1,9,16,100]
// console.log(Squares_of_Sorted_Array([-7,-3,2,3,11])); // [4,9,9,49,121]



//Time complexity is O(n)

// const Squares_of_Sorted_Array = (arr) => {
//     let l = 0;
//     let r = arr.length - 1;
//     let res = new Array(arr.length);

//     for(let i=arr.length-1;i>=0;i--){
//         if( Math.abs(arr[l]) > Math.abs(arr[r]) ){
//             res[i] = arr[l]*arr[l];
//             l++
//         }else{
//             res[i] = arr[r]*arr[r];
//             r--
//         }
//     }
//     return res
// }
// console.log(Squares_of_Sorted_Array([-4,-1,0,3,10])); // [0,1,9,16,100]
// console.log(Squares_of_Sorted_Array([-7,-3,2,3,11])); // [4,9,9,49,121] 













// const Three_Sum = (arr) => {

//     // sort
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }

//     let triplet = [];

//     for (let i = 0; i < arr.length - 2; i++) {

//         // skip duplicate i
//         if (i > 0 && arr[i] === arr[i - 1]) continue;

//         let l = i + 1;
//         let r = arr.length - 1;

//         while (l < r) {

//             let sum = arr[i] + arr[l] + arr[r];

//             if (sum === 0) {

//                 triplet.push([arr[i], arr[l], arr[r]]);

//                 // skip duplicate l
//                 while (l < r && arr[l] === arr[l + 1]) {
//                     l++;
//                 }

//                 // skip duplicate r
//                 while (l < r && arr[r] === arr[r - 1]) {
//                     r--;
//                 }

//                 l++;
//                 r--;

//             } else if (sum < 0) {
//                 l++;
//             } else {
//                 r--;
//             }
//         }
//     }

//     return triplet;
// };


// const Three_Sum = (arr) => {
//     let triplet = [];
//     for(let i=0;i<arr.length;i++){
//       for(let j=i+1;j<arr.length;j++){
//         for(let k=j+1;k<arr.length;k++){  
//           if(arr[i]+arr[j]+arr[k] === 0){
//             triplet.push([arr[i],arr[j],arr[k]])
//           }
//         }   
//       }   
//     }
//     return triplet;
// };

const Three_Sum = (arr) => {
    let triplet = [];

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 2; i++) {
        let l = i + 1;
        let r = arr.length - 1;

        while (l < r) {
            let sum = arr[i] + arr[l] + arr[r];

            if (sum === 0) {
                triplet.push([arr[i], arr[l], arr[r]]);
                l++;
                r--;
            } 
            else if (sum < 0) {
                l++;
            } 
            else {
                r--;
            }
        }
    }

    return triplet;
};
 

console.log(Three_Sum([-1,0,1,2,-1,-4]))
console.log(Three_Sum([0,1,1]))
console.log(Three_Sum([0,0,0]))