



function Second_Largest(arr){
    let set = new Set(arr);
    return [...set].flat().sort((a,b)=>b-a)[1] ?? -1
}
//console.log(Second_Largest([[10, 5, 20, 8]]))
//console.log(Second_Largest([[3]]))


//optimal Second Largest
function secondLargest(arr) {
  let first = -Infinity;    // largest seen so far
  let second = -Infinity;   // second largest DISTINCT value seen so far

   for(let i of arr){
     if(i>first){
        second = first;
        first = i
     }else if(i<first && i>second){
        second = i
     }
   } 
  return second === -Infinity ? -1 : second

}
function thirdLargest(arr) {
  let first = -Infinity;    // largest seen so far
  let second = -Infinity;   // second largest DISTINCT value seen so far
  let third = -Infinity;

   for(let i of arr){
     if(i>first){
        third=second    
        second = first;
        first = i
     }else if(i<first && i>second){
        third = second;
        second = i;
     }else if(i<second && i>third){
        third = i
     }
   } 
  return third === -Infinity ? -1 : third

}
console.log(thirdLargest([10, 5, 20, 8])); // 10
console.log(thirdLargest([7, 7, 7]));      // -1
console.log(thirdLargest([3]));            // -1




function maxSubArray(arr) {
    let sum = 0;
    let max = -Infinity;
    for(let i of arr){
        sum += i
        max = Math.max(max, sum)

        if(sum<0)sum=0;
    }
    return max
}

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//console.log(maxSubArray([5]));
//console.log(maxSubArray([-3, -1, -2]));




function Product_EI(nums){
    let answer=[];
    for(let i=0;i<nums.length;i++){
       let sum=1;
        for(let j=0;j<nums.length;j++){
            if(i!==j){
                sum = sum*nums[j]
            }
       } 
       answer.push(sum===0?0:sum)
    }
    return answer
}
//console.log(Product_EI([1, 2, 3, 4]))
//console.log(Product_EI([-1, 1, 0, -3, 3] ))

function productExceptSelf(nums) {
    let arr = new Array(nums.length).fill(1); 

    let left=1;
    for(let i=0;i<arr.length;i++){
        arr[i] = left;
        left *= nums[i]
    }
    let right=1;
    for(let i=arr.length-1;i>=0;i--){
        arr[i] *= right;
        right *= nums[i]
    }
    return arr.map(x=>x+0)
}
//console.log(productExceptSelf([1, 2, 3, 4]));        // [24, 12, 8, 6]
//console.log(productExceptSelf([-1, 1, 0, -3, 3]));   // [0, 0, 9, 0, 0]