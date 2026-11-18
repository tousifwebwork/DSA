
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



function insert(arr,target){
    let left=0;
    let right=arr.length-1; 

    while(left<=right){
        let mid=left+Math.floor((right-left)/2); 

        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]<target){
           left = mid+1
        }
        else{
            right = mid-1 
        } 
    }

    return left
}
// console.log(insert([1, 3, 5, 6],5)); //2
// console.log(insert([1, 3, 5, 6],2)); //
// console.log(insert([1, 3, 5, 6],7)); //
// console.log(insert([1, 3, 5, 6],0)); //


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
console.log(search([4, 5, 6, 7, 0, 1, 2],0))
console.log(search([4, 5, 6, 7, 0, 1, 2],3))
console.log(search([1],0))
