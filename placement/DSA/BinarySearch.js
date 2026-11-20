
function binarySearch(arr,target){

    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid = left + Math.floor((right-left)/2); 
        if(arr[mid]==target)return mid;
        else if(arr[mid]<target) left=mid+1;
        else right=mid-1
    }
    return -1

}
// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));  // 4
// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));  // -1



function firstBadVersion(n,isBabVersion){
    let l=1;
    let r=n;
    while(l<r){
        let mid = l + Math.floor((r-l)/2)
        if(isBabVersion(mid))r = mid;
        else l=mid+1
    }
    return l
}
const isBad = (v) => v >= 4;
//console.log(firstBadVersion(5, isBad)); // 4



function insert(nums,target){
      let left = 0;
  let right = nums.length;                  // one past the end: "insert at end" is a valid answer

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) right = mid;   // mid could be the first position ≥ target
    else left = mid + 1;
  }
  return left;
}
console.log(insert([1, 3, 5, 6],5)); //2
console.log(insert([1, 3, 5, 6],2)); //
console.log(insert([1, 3, 5, 6],7)); //
console.log(insert([1, 3, 5, 6],0)); //


function search(nums, target) {
    let left=0;
    let right=nums.length-1;

    while(left<=right){
        let mid =  Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        //left half
        if(nums[left]<=nums[mid]){
            if(target>=nums[left] && target<nums[mid]){
                right = mid-1;
            }else{
                left  = mid+1;
            }
        } 
        
        if(nums[mid]<=nums[right]){
            if(target<nums[mid] && target>=nums[right]){
                left = mid+1
            }else{
                right = mid-1
            }
        }

    }
    return -1

}
// console.log(search([4, 5, 6, 7, 0, 1, 2],0))
// console.log(search([4, 5, 6, 7, 0, 1, 2],3))
// console.log(search([1],0))




let splitArray = (nums,k) => {

    let left = Math.max(...nums);
    let right = nums.reduce((a,b)=>a+b,0);

    while(left<right){
        let mid = left + Math.floor((right-left)/2); 
        let count=1; 
        let sum=0;

        for(let num of nums){
            if(num+sum>mid){
                count++;
                sum = num;
            }else{
                sum += num
            }
        }

        if(count>k){
            left = mid+1
        }else{
            right = mid
        }

    }
    return left
}
console.log(splitArray([7, 2, 5, 10, 8], 2)); // 18
console.log(splitArray([1, 2, 3, 4, 5], 2));  // 9
console.log(splitArray([1, 4, 4], 3));        // 4