

// function altitude(arr){
//     let sum=0;
//     let brr=[]
//     for(let i of arr){ 
//         brr.push(sum+=i)
//     }
//     return Math.max(0,...brr)
// }
// console.log(altitude([-5,1,5,0,-7]));         // 1
// console.log(altitude([-4,-3,-2,-1,4,3,2]));   // 0

// function pattern(str){
//     let pattern = /(\d+)\[([a-zA-Z]+)\]/;
    
//     while(str.includes("]")){
//         str = str.replace(pattern,(_,count,value)=>{
//             return value.repeat(Number(count))
//         })
//     }

//     return str;
// }
// console.log(pattern("3[a]2[b]"))
// console.log(pattern("3[a]2[bc]5[d]"))




// Array Manupulation

function Number_Rows_Coll(arr){
    let Row_No = arr.length;
    let Col_No = arr[0].length;
    return console.log("Number of Rous is : "+Row_No+"\nNumber of Column is : "+Col_No)
}
function Uniq_Row_Col(arr){
    let Row = new Set();
    for(let i of arr){
        Row.add(i.join(","))
    }

    let Col = new Set();
    for(let i=0; i<arr[0].length; i++){
        let colArr = arr.map(c=>c[i]);
        Col.add(colArr.join(","))
    }
    return console.log("Uniq Row: "+Row.size+"\nUniq Col: "+Col.size)
}
// function Uniq_Row_and_Col(arr){
//     let c=0;
//     let totalCols = arr[0].length; 
//     let totalRows = arr.length;

//     for(let i=0;i<totalRows ;i++){
//         let row=arr[i].join(",");
//         for(let j=0;j<totalCols ;j++){
//             let col = arr.map(x=>x[j]).join(",");

//             if(row==col)c++
//         }
//     }
//     return console.log("No. of Unique Rows and Col are: ",c)
// }


function Uniq_Row_and_Col_Fast(arr) {
    if (!arr || arr.length === 0 || !arr[0]) return 0;

    let c = 0;
    const totalRows = arr.length;
    const totalCols = arr[0].length;
    const rowCounts = new Map();

    // 1. Frequency Map: Store how many times each row string appears
    for (let i = 0; i < totalRows; i++) {
        const rowStr = arr[i].join(",");
        rowCounts.set(rowStr, (rowCounts.get(rowStr) || 0) + 1);
    }

    // 2. Column Check: Extract each column once and look it up in the Map
    for (let j = 0; j < totalCols; j++) {
        const colStr = arr.map(x => x[j]).join(",");
        
        if (rowCounts.has(colStr)) {
            c += rowCounts.get(colStr);
        }
    }

    console.log("No. of Unique Rows and Col are: ", c);
    return c;
}


//Number_Rows_Coll([[1,2,3],[1,2,3],[1,2,3],[1,2,3]])
//Uniq_Row_Col([[1,2,3],[1,2,3],[1,2,3],[1,4,3]])
Uniq_Row_and_Col_Fast([[1,2,3],[2,2,3],[3,2,3]])
Uniq_Row_and_Col_Fast([,,[1,2],[2,1]]);

 