
//Creating a node

// function linkList(v){
//     this.val=v;
//     this.next=null;
// }
// let firstList = new linkList(10)
// let secondList = new linkList(20)
// let thirdList = new linkList(30)

// // console.log(firstList)
// // console.log(firstList.val)
// // console.log(firstList.next)


// firstList.next=secondList
// secondList.next=thirdList

// let head=firstList;
// //console.log(head)
// let current=head
// //console.log(current)

// while(current != null){
//     console.log(current.val)
//     current=current.next
// }








function li(v){
    this.val=v;
    this.next=null;
}
let a1=new li(10);
let a2=new li(20);
let a3=new li(30);
let a4=new li(40);
let a5=new li(50);

a1.next=a2;
a2.next=a3;
a3.next=a4;
a4.next=a5;

let h=a1;

//Count no of nodes 
// let count=0;
// for(let c=h; c!==null; c=c.next){
//     count++
// }
// console.log(`Total Nodes in the linklist are: ${count}`) 


//Search for value 20 
// let found=false;
// for(let c=h; c!==null; c=c.next){
//     if(c.val==20){
//         found = true
//     }
// }
// console.log(`Node 20 is been found: ${found}`) 

 
//Reverse the list 
let prev = null;
let current = h;

while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
}
h = prev
// Print reversed list
for (let final = h; final !== null; final = final.next) {
    console.log(final.val);
}