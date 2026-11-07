

function countActions(activities, target) { 
    let map=new Map();
    for(let [key,value] of activities){
        if(value===target)map.set(key,(map.get(key)||0)+1)
    }
    for(let [key,value] of [...map].sort((a,b)=>a[0].localeCompare(b[0]))){
        console.log(`${key} ${value}`)
    }
}
//countActions([["Bob","login"],["Alice","signin"],["John","login"],["Bob","login"],["David","logout"],["Alice","login"],["John","login"],["Emma","logout"],["Bob","logout"]], "login");



// Top Buyers of a Product
function topBuyer(orders,targetItem){   
    let map = new Map();
    targetItem=targetItem.trim().toLowerCase();
    for(let [name,item,quantity] of orders){
       name = name.trim().toLowerCase();
       item = item.trim().toLowerCase();  

       if(targetItem==item){
         map.set(name,(map.get(name)||0)+quantity);
       }
    } 
    //let ans = [...map].filter(([n, q]) => q > 0).sort((a,b)=>b[1]-a[1]).map(([n,q])=>`${n} ${q}`).join("\n")
    let ans = [...map].sort((a,b)=>b[1]-a[1]).map(([n,i])=>i>0?`${n} ${i}` : "").join('\n')
    return ans
}
//console.log(topBuyer([["asha ","Pen",3],["Ben","pen",5],["ASHA","pen",2],["Cara","book",4],["Ben","Pen",0],["Dev","pen",7]],"PEN"));
//console.log(topBuyer([["Zoe","cap",0],["Max","hat",2]],"cap"));



//Meeting Room Availability
function Availability(arr, start, end) {
    arr.sort((a,b) => a[0] - b[0]);

    let available = [];
    let lastEnd = start;

    for (let [meetingStart, meetingEnd] of arr) {
        if (meetingStart > lastEnd) {
            available.push([lastEnd, meetingStart]);
        }

        lastEnd = Math.max(lastEnd, meetingEnd);
    }

    if (lastEnd < end) {
        available.push([lastEnd, end]);
    }

    return available;
}


function Availability(arr, start, end) {
    arr.sort((a,b) => a[0] - b[0]);

    let available = [];
    let busyEnd = start;

    for (let i = 0; i < arr.length; i++) {
        let meetingStart = arr[i][0];
        let meetingEnd = arr[i][1];

        if (meetingStart > busyEnd) {
            available.push([busyEnd, meetingStart]);
        }

        if (meetingEnd > busyEnd) {
            busyEnd = meetingEnd;
        }
    }

    if (busyEnd < end) {
        available.push([busyEnd, end]);
    }

    return available;
}

//console.log(Availability([[9,11],[13,15],[10,12],[15,16]], 9, 18));




function maxSum(arr,k){
    if(arr.length<k)return 0;

    let sum=0;
    for(let i=0;i<k;i++)sum+=arr[i];

    let max=sum;
    for(let j=k;j<arr.length;j++){
        sum = sum + arr[j] - arr[j-k];
        if(max<sum)max=sum
    }

    return max
}
//console.log(maxSum([2,1,5,1,3,2],3))
//console.log(maxSum([-1,-2,-3,-4],2))
//console.log(maxSum([5],1))


function tallerBuilding(height){
   let r=new Array(height.length).fill(0);
   for(let i=0;i<height.length;i++){
    for(let j=i+1;j<height.length;j++){
        if(height[j]>height[i]){
            r[i]=j-i;
            break
        }
    }
   }
   return r
}
// console.log(tallerBuilding([4,2,3,5,1,6]))
// console.log(tallerBuilding([5,4,3,2]))
// console.log(tallerBuilding([1,2,3,4]))




// function nearbyDuplicates(arr,k){
//         for (let i = 0; i < arr.length; i++) { 
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j] && Math.abs(i - j) <= k) {
//                 return true;
//             }
//         }   
//     }
//     return false;
// }
function nearbyDuplicates(arr, k) {
    const window = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        // 1. If the duplicate exists within the last 'k' elements, we found it!
        if (window.has(arr[i])) {
            return true;
        }
        
        // 2. Add the current element to our sliding window
        window.add(arr[i]);
        
        // 3. Keep the window size exactly equal to 'k' by removing the oldest element
        if (window.size > k) {
            window.delete(arr[i - k]);
        }
    }
    
    return false;
}


//console.log(nearbyDuplicates([1,2,3,1],3))     //true
//console.log(nearbyDuplicates([1,0,1,1],1))     //true
//console.log(nearbyDuplicates([1,2,3,1,2,3],2)) //false





