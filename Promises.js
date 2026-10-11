// console.log("one")
// console.log("two")
// console.log("three")



// function hello(){
//  console.log("hello")
// }

// setTimeout(hello, 2000);
// hello()
// hello()

// function add(a,b) {
//     console.log(a+b) 
// }

// function calculateSum(a,b,add) {
//     add(a,b)
// }
// calculateSum(2,3,add)






// const hello = () => {
//     console.log("hello")
// }
// setTimeout(() => {
//     hello();
// }, 3000);




// let promise = new Promise((resolve,reject)=>{
//     console.log("promise started") 
// })




// function abc(){
//     let promise = new Promise((resolve,reject)=>{
//         console.log("promise started")
//         reject("promise rejected")
//     })
//     return promise
// }

// let x = abc()
// x
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })










// function abc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("fetching data 1")
//             resolve("promise resolved")
//         }, 2000)
//     })
// }

// function abc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("fetching data 2")
//             resolve("promise resolved")
//         }, 2000)
//     })
// }

// await abc()
// .then((data=>{
//     console.log(data)
// }))
// abc2()
// .then((data=>{
//     console.log(data)
// }))




async function abc(){
    console.log("promise started")
}
abc() 