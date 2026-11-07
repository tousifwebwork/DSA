//console.log("A".charCodeAt(0)); // 65
//console.log("a".charCodeAt(0)); // 97
 

function firstUnique(str){
    let map = new Map();
    for(let i of str){
        map.set(i,(map.get(i)||0)+1)
    }
    // for(let [key,value] of map){
    //     if(value==1)return str.indexOf(key)
    // }
    for(let i=0;i<str.length;i++){
        if(map.get(str[i])===1)return i
    }
    return -1
}
// console.log(firstUnique("leetcode"))
// console.log(firstUnique("loveleetcode"))
// console.log(firstUnique("aabb"))


function reverseString(str){
    return str.split(/\s/).filter(x=>x!=='').reverse().join(' ')
}
// console.log(reverseString("the sky is blue")) 
// console.log(reverseString("  hello   world ")) 
// console.log(reverseString("a good   example" )) 




// Expands outward from (left, right) while characters match.
// Returns the length of the palindrome found.
function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;     // move left pointer one step outward (decrement)
    right++;    // move right pointer one step outward (increment)
  }
  // When the loop stops, left and right have gone ONE STEP TOO FAR.
  // Think: what is the palindrome's length in terms of left and right?
  return right - left - 1;
}

function longestPalindrome(s) {
  let start = 0;       // where the best palindrome starts
  let maxLen = 0;      // length of the best palindrome

  for (let i = 0; i < s.length; i++) {
    const len1 = expand(s, i, i);     // odd-length center: one character (i, i)
    const len2 = expand(s, i, i + 1); // even-length center: between i and i+1 (i, i+1)

    const len = Math.max(len1, len2);

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2); // how do you find the start from i and len?
    }
  }
  return s.slice(start, start + maxLen);
}
