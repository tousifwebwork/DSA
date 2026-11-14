

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






//Problem 1 (Easy): Contains Duplicate II
function distinctIndices(num,k){
    let left=0;
    let set=new Set();
    for(let right=0;right<num.length;right++){
        if(set.has(num[right])){
            return true
        }

        set.add(num[right]);
        if(right-left >= k){
            set.delete(num[left])
            left++
        }
    }
    return false
}
function distinctIndices(num,k){
    let map = new Map();
    
    for(let i=0;i<num.length;i++){
        if(map.has(num[i]) && i-map.get(num[i])  <= k){
            return true
        }
        map.set(num[i],i);
    }

    return false
}
// console.log(distinctIndices([1, 2, 3, 1],3))        //true
// console.log(distinctIndices([1, 0, 1, 1],1))        //true
// console.log(distinctIndices([1, 2, 3, 1, 2, 3],2))  //false




//Problem 2 (Medium): Longest Repeating 

function characterReplacement(s,k){
    let count={};
    let left=0;
    let maxfreq=0;
    //  let arr = [];       // current window
    // let best = [];      // longest window found

for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;
        maxfreq = Math.max(maxfreq, count[s[right]]);
       // arr.push(s[right]);                 // add the element

        if (right - left + 1 - maxfreq > k) {
            count[s[left]]--;
            left++;
           // arr.shift();                    // remove the first element
        }

        // if (arr.length > best.length) {
        //     best = [...arr];                // save a COPY
        // }
    }

    return s.length-left
    //return best.join("");

} 
// console.log(characterReplacement("ABAB", 2));      // 4
// console.log(characterReplacement("AABABBA", 1));   // 4
// console.log(characterReplacement("AAAA", 0));      // 4




//Problem 3 (Interview-level): Minimum Window Substring 
function smallestSubString(s, t) {

  const need = {};
  for (const c of t) 
    need[c] = (need[c] || 0) + 1;

  let miss = t.length, l = 0, best = "";

  for (let r = 0; r < s.length; r++) {
    
    if (need[s[r]]-- > 0) 
    miss--;                 // add s[r]; was it needed?
    
    while (!miss) {                               // window valid
       if (!best || r - l + 1 < best.length) 
        best = s.slice(l, r + 1);
       
       if (++need[s[l++]] > 0) 
        miss++;             // remove s[l]; do we miss it now?
    }

  }
  return best;
}

// console.log(smallestSubString("ADOBECODEBANC", "ABC")); // "BANC"
// console.log(smallestSubString("a", "a"));               // "a"
// console.log(smallestSubString("a", "aa"));              // "" 

