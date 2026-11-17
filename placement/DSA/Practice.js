
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
//console.log(flatReduce(arr2))



// Brute Force O(n*m + n*p),    Worst Case: O(n × (m + p))
function commonElement_Brute_Force(arr1,arr2,arr3){
    let result=[];
    
    for(let i=0;i<arr1.length;i++){
        let isFoundSecond = false;
        let isFoundThird  = false;
        
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]) isFoundSecond=true
        }

        if(isFoundSecond){
            for(let k=0;k<arr3.length;k++){
            if(arr1[i]==arr3[k]) isFoundThird=true
            }
        }

        if(isFoundSecond && isFoundThird){
            result.push(arr1[i]);
        }


    }
    return result 
}


// Set Method O(n+m+p) average
function commonElement_Set(arr1,arr2,arr3){ 
    let set2=new Set(arr2);
    let set3=new Set(arr3);
    let result = [];
    for(let i of arr1){
        if(set2.has(i)&&set3.has(i))result.push(i)
    }
    return result
}
 

// Set Method O(n+m+p) averageO(n+m+p)
function commonElement_Map(arr1,arr2,arr3){ 
    let map2=new Map();
    let map3=new Map();
    let result = [];
    for (let i of arr2) map2.set(i, true);
    for (let i of arr3) map3.set(i, true);

    for(let i of arr1) if(map2.has(i) && map3.has(i)) result.push(i)
    return result
}
 
console.log(commonElement_Map(
    [1,2,3,4,5],
    [2,3,5,7],
    [3,5,2]
))