
//tcs Questions
// let arr=[1,3,[4,[5,[6,7,[8]]]]];
// console.log(arr.flat(Infinity)) // Output: [1, 3, 4, 5, 6, 7, 8]


//recurstion
// function test(n){
//     if(n===0)return ;
//     console.log(n)
//     test(n-1)
// }
// test(3)


//let arr = [1, 3, [4, [5, [6, 7, [8]]]]];
function flaten(arr){
   let res=[];
   for(let i of arr){
    if(Array.isArray(i)){
        res.push(...flaten(i))
    }else{
        res.push(i)
     }
   }
   return res
}
// console.log(flaten(arr));




//Definition: reduce() processes every array element and combines them into one final value.
let arr=[1,2,3]
let result = arr.reduce((acc,item)=>{return acc*item},1)





let arr2=[1, 3, [4, [5, [6, 7, [8]]]]];
function flatReduce(arr){
    return arr.reduce((res,item)=>{
        return res.concat(Array.isArray(item) ?  flatReduce(item) : item)
    },[])
}
console.log(flatReduce(arr2))