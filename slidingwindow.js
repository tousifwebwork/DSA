//Level 1: Fixed window (easy)

//1. Maximum sum of any subarray of size k
// function MaxSubArr(arr,k){
//    if(arr.length<k) return 0;

//    let windowSum = 0;
//    for(let i=0;i<k;i++) windowSum+=arr[i];

//    let sum=windowSum;
//    for(let i=k;i<arr.length;i++){
//      windowSum = windowSum + arr[i] - arr[i-k];
//      Math.max(windowSum,sum);
//    }
//    return windowSum
// }
// console.log(MaxSubArr([1,2,3,4,5], 2)); 


//2. Average of every subarray of size k
// function AvgSubArr(arr,k){
//     if(arr.length<k) return 0;
 
//     let windowSum=0;
//     for(let i=0;i<arr.k;i++){windowSum+=arr[i]}
//     let maxAvg=windowSum/k;

//     for(let i=k;i<arr.length;i++){
//         windowSum = windowSum + arr[i] - arr[i-k];
//         let currentAvg = windowSum/k;
//         maxAvg=Math.max(currentAvg,maxAvg);
//     }
//     return maxAvg
    
// }
// console.log(AvgSubArr([1,2,3,4,5], 2)); 
// console.log(AvgSubArr([], 2)); 


//3. Sum is atleast a given target
// function sumFun(arr,k,target){
//     if(arr.length<k) return 0;

//     let windowSum=0;
//     for(let i=0;i<arr.length;i++){
//         windowSum += arr[i];
//     }
//     let count=0;
//     if(windowSum>=target)count++;

//     for(let i=k;i<arr.length;i++){
//         windowSum += arr[i] - arr[i-k];
//         if(windowSum>=target)count++;
//     }
//     return count

// }
// console.log(sumFun([1,2,3,4,5],3,4)); //3








//Level 2: Fixed window (medium)

//4. Vowel
// function vowels(str,k){
//     if(str.length<k) return;
//     let vowel = (char)=> "aeiou".includes(char);
//     let count=0;
//     for(let i=0;i<k;i++){
//         if(vowel(str[i])){
//             count++;
//         }
//     }
//     let maxCount=count;
//     for(let i=k;i<str.length;i++){
//         if(vowel(str[i])){
//             count++;
//         }
//         if(vowel(str[i-k])){
//             count--;
//         }
//         maxCount=Math.max(maxCount,count)
//     }   
//     return maxCount

// }
// console.log(vowels("aebcdaei",3))


//5. Count subarrays of size k with all distinct elements
// function distinct_elements(arr,k){
//     if(arr.length<k) return;

//     let count=0;
//     let set=new Set();

//     for(let i=0;i<k;i++){
//         set.add(arr[i]);
//     }
//     if(set.size===k) count++;
    
//     for(let i=k;i<arr.length;i++){
//         set.add(arr[i]);
//         set.delete(arr[i-k]);
//         if(set.size===k){
//             count++
//         }
//     }
//     return count
// }
// console.log(distinct_elements([1,3,1,4,5,3,3],2))



//Level 3: Variable window (easy to medium)

//6. Smallest subarray with sum at least target
// function smallest_sub(arr,target){
//     let left=0;
//     let sum=0;
//     let minLength=Infinity;
    
//     for(let right=0;right<arr.length;right++){
//         sum+=arr[right];
//         while(sum>=target){
//             minLength = Math.min(minLength, right - left + 1);
//             sum -= arr[left];
//             left++;
//         }
//     }
//         return minLength === Infinity ? 0 : minLength;
// }
// console.log(smallest_sub([2, 3, 1, 2, 4, 3], 7))



//7. Longest substring without repeating characters (LeetCode 3)
function long_str(str) {
    let left = 0;
    let maxLength = 0;
    let set = new Set();

    for (let right = 0; right < str.length; right++) {

        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(long_str("abcccir")); // 3 