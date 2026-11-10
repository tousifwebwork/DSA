

//function twoSumSorted(arr,target){
//   let l = 0;
//   let r = arr.length-1;

//   while(l<r){
//     let sum = arr[l]+arr[r];
//     if(sum==target)return [l+1,r+1] // 1 based index
//     else if(sum<target) l++
//     else r--
//   }
//   return []
//}

//console.log(twoSumSorted([2, 7, 11, 15], 9)); // [1, 2]
//console.log(twoSumSorted([2, 7, 11, 15], 18)); // [2, 3]


function removeDuplicates(nums) {
    if(nums.length==0) return

    let slow=0;
    for(let fast=1;fast<nums.length;fast++){
        if(nums[fast]!==nums[slow]){
            slow++
            nums[slow]=nums[fast]
        }
    }
    return slow+1
}
const arr = [1, 1, 2, 2, 3];
//console.log(removeDuplicates(arr));  // 3  (arr is now [1, 2, 3, 2, 3])





function squaresSort(arr){
    let l=0;
    let r=arr.length-1;
    let result=[];
    while(l<=r){
        if(Math.abs(arr[l])<Math.abs([arr[r]])){
            result.unshift(arr[r]*arr[r])
            r--
        }else{
            result.unshift(arr[l]*arr[l])
            l++
        }
    }
    return result
}
//console.log(squaresSort([-4, -1, 0, 3, 10]))   // [0, 1, 9, 16, 100]
//console.log(squaresSort([-7, -3, 2, 3, 11]))   // [4, 9, 9, 49, 121]
//console.log(squaresSort([5]))                  // [25]


function maxArea(arr){
    let maxWater=0;
    let l=0;
    let r=arr.length-1;

    while(l<r){
        let width = r - l;
        let currHeight = Math.min(arr[l],arr[r]);
        let currWater = width*currHeight;
        maxWater = Math.max(maxWater,currWater)

         if(arr[l] < arr[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxWater
}
 
//console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7] ))   
//console.log(maxArea([1, 1]))     



function Threesum(arr){
    let n=arr.length;
    let result=[];
    let set=new Set();

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(arr[i]+arr[j] == -arr[k]){
                    let tri = [arr[i],arr[j],arr[k]].sort((a,b)=>a-b);
                    let key = tri.join(",")
                    if(!set.has(key)){
                        set.add(key);
                        result.push(tri)
                    }
                }
            }
        }
    }
    return result
}

//console.log(Threesum([-1, 0, 1, 2, -1, -4])) //[[-1, -1, 2], [-1, 0, 1]]
//console.log(Threesum([0, 1, 1]))             //[]
//console.log(Threesum([0, 0, 0]))             //[[0, 0, 0]]








//optimal Squares of Sorted Array:
function sortedSquares(nums) {
  const n = nums.length;
  const result = new Array(n);
  let left=0;
  let right=n-1;

  for(let i=n-1;i>=0;i--){
    if(Math.abs(nums[left]) > Math.abs(nums[right])){
        result[i] = nums[left] * nums[left];
        left++;
    }else{
        result[i] = nums[right] * nums[right];
        right--;
    }
  }
  return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]