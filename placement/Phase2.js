// const x = "global";
// function outer() {
//   const x = "outer";
//   return function inner() { console.log(x); };
// }
// function test() {
//   const x = "test";
//   console.log(x)
//   outer()();     // inner is called here 
// }
// console.log(x)
// test();          // "outer" 



// function a(){
//    console.log("Hey");
//     return function b(){
//         console.log("Hello");
//     }
// }
// a()



// function counter(){
//     let c=0;
//     return {
//         inc:()=>++c,
//         incBy5:()=>c+5,
//         get:()=>c
//     }
// }
// let c1=counter();
// let c2=counter();
// console.log(c1.get(),c2.get(),c2.incBy5())
// console.log(c1.inc(),c2.get(),c1.get())



// const multiply =(n)=>(x)=>x*n
// const double = multiply(2);
// console.log(double(15)); // 10
// console.log(multiply(3)(2))


// var fns = [];
// for (var i = 0; i < 3; i++) fns.push(() => i);
// console.log(fns.map(f => f())); // [3, 3, 3]: all closures share one `i`



function Timmer() {
  let a1="tousif";
  let a2="tousif3";

   return Pro = new Promise((resolve,reject)=>{
    if(a1==a2){
      resolve()
    }else{
        reject()
    }
  })
}

// Test 1
//Timmer().then(a => console.log("Promise resolved successfully")).catch(e => console.log("Promise is rejected")).finally(() => console.log("This is finally"));
 


// console.log("1");
// setTimeout(() => console.log("2"), 0);
// queueMicrotask(()=>console.log("5"))
// Promise.resolve().then(() => console.log("3"));
// console.log("4");



// console.log([1,2,3,4,5].filter(n => (n % 2===0)));             // [1, 3, 5]
// console.log([1,2,3,4,5].reduce((acc,curr)=>curr+acc,0));  
 
// console.log(["a","b","a"].reduce((acc,curr)=>{
//      acc[curr] = (acc[curr]||0)+1;
//      return acc
// },{}))


