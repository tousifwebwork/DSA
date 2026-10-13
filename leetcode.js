

var longestSubarray = function(nums) {
    let count = 0;
let maxCount = 0;

for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 1) {
        count++;
        maxCount = Math.max(maxCount, count);
    } else {
        count = 0;
    }
}
return maxCount;
};
console.log(longestSubarray([1,1,0,1])); 