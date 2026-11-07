

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




