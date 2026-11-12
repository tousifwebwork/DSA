

//Fixed window
function slidingWindow(num,k){
    if(k>num.length) return null;

    let windowSum = 0;
    for(let i=0;i<k;i++){
        windowSum+=num[i];
    }
    let best = windowSum;
    for(let i=k;i<num.length;i++){
        windowSum = windowSum + num[i] - num[i-k];
        best = Math.max(best, windowSum);
    }
    return best
}
//console.log(slidingWindow([2, 1, 5, 1, 3, 2], 3)) //9


//Variable window
function minSubArrayLen(target, nums) {
   let i=0,j=0;
   let sum=0, minLen = Infinity;

   for( i;i<nums.length;i++){
     sum = sum + nums[i];

     while(sum>=target){
        minLen = Math.min(minLen, i-j+1);
        sum = sum - nums[j];
        j++;
     }
    
   }
    return minLen === Infinity ? 0 : minLen;

}
//console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2   ([4, 3])


function lengthOfLongestSubstring(s) {
    let window = new Set();
    let left = 0;
    let best = 0;

    for(let right=0;right<s.length;right++){

        while(window.has(s[right])){
            window.delete(s[left]);
            left++
        }
        window.add(s[right])
        best = Math.max(best, right - left + 1);
    }

  return best;

}
//console.log(lengthOfLongestSubstring("abcabcbb")); // 3  ("abc")
//console.log(lengthOfLongestSubstring("bbbbb"));    // 1
//console.log(lengthOfLongestSubstring("pwwkew"));   // 3  ("wke")







function distinctIndices(num,k){
    let left=0;
    let set=new Set();
    for(let right=0;right<num.length;right++){

        if(set.has(num[right])){
            return true
        }

        set.add(num[right]);
        
        if(right - left >= k){
            set.delete(num[left])
            left++
        }
    }
    return false;
}
console.log(distinctIndices([1, 2, 3, 1],3))        //true
console.log(distinctIndices([1, 0, 1, 1],1))        //true
console.log(distinctIndices([1, 2, 3, 1, 2, 3],2))  //false