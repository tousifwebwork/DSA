
function twoSum(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let need = target - nums[i];

        if(map.has(need))return [map.get(need), i]

        map.set(nums[i],i)
    }
    return -1
}
//console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
//console.log(twoSum([3, 3], 6));         // [0, 1]

function containsDuplicate(nums) {
  const seen = new Set();
  for(let i of nums){
    if(seen.has(i))return true
    seen.add(i)
  }
  return false;
}
// console.log(containsDuplicate([1, 2, 3, 1])); // true
// console.log(containsDuplicate([1, 2, 3, 4])); // false

function groupAnagrams(str){
    let map = new Map();
    for(let i of str){
        let word = i.split("").sort().join(""); 
        if(!map.has(word))map.set(word,[]);
        map.get(word).push(i)
    }
   return [...map.values()]
}
//console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));





//Practice Problems

function Intersection(nums1,nums2){
    const counts = new Map();
    const result = [];
    
    for (const num of nums1) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    for(const num of nums2){
        if(counts.has(num) && counts.get(num)>0){
           result.push(num) 
           counts.set(num,counts.get(num)-1)
        }
    } 
    console.log(counts)

    return result
} 
console.log(Intersection([1, 2, 2, 1],[2, 2]))
console.log(Intersection([4, 9, 5],[9, 4, 9, 8, 4]))
//console.log(Intersection([1, 2],[3, 4]))