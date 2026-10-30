// console.log("A"); 

// // B and C are pushed to the Check phase (Macrotask)
// setImmediate(() => {
//     console.log("B"); 
//     console.log("C");
// }); 

// // D is pushed to the Next Tick queue (Microtask)
// process.nextTick(() => console.log("D")); 






// console.log("A")
// console.log("B")
// console.log("C")


// // setTimeout(()=>{
// //     console.log("A")
// // },1000)
// // queueMicrotask(()=>{
// //     console.log("B")
// // })
// // setTimeout(()=>{
// //     console.log("C")
// // })








// setTimeout(() => console.log("mac1"), 0);
// setTimeout(() => console.log("mac2"), 0);

// queueMicrotask(() => console.log("mic1"));
// queueMicrotask(() => console.log("mic2"));
// queueMicrotask(() => console.log("mic3"));
// setTimeout(() => console.log("mac3"), 1000);
// queueMicrotask(() => console.log("mic4"));