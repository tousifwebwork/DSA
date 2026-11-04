function demo(){
    if(true){
      var a=10;
      let b=20;
      const c=30;
    }
    console.log(a); // 10
    //console.log(b); // ReferenceError: b is not defined
    //console.log(c); // ReferenceError: c is not defined
} 
//demo()

function LoopTrap(){
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);   // 3 3 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log(j), 0);   // 0 1 2
}
//LoopTrap()

function demo2(){
var user = { name: "Asha" };
user.name = "Ravi";      // allowed: the object is mutated
console.log(user)
user = {};       
console.log(user)        
}
//demo2()

function hoisting(){
    console.log(a)
    var a=10;

    sayHi();
    function sayHi(){console.log("Hii")}

    sayAgain();              // TypeError: sayAgain is not a function
    var sayAgain = function () { console.log("again"); };
}
//hoisting()


function shadow(){
    var a = 1; 
    function f() {
    console.log(a);    //undefined
    var a = 2;
    } 
    f();
    console.log(a)
}
//shadow()


function TDZ(){
  console.log(age);   // ReferenceError: Cannot access 'age' before initialization
  let age = 20;       // TDZ ends here
  console.log(age);   // 20
}
//TDZ()


function Primitive_Reference_Type(){
let a = 10;
let b = a;
b = 20;
console.log(a);          // 10 (independent copies)

const o1 = { n: 1 };
const o2 = o1;           // same reference
o2.n = 2;
o2.id = "Object 2"
console.log(o1.n);       // 2 (both names point to one object)
console.log(JSON.stringify(o2))
console.log(o2)
console.log(JSON.parse('{"n":3, "id":"Object 3"}'))
//console.log({}==={})
let a1=[];
let a2=a1;
console.log(a1===a2)
 
//console.log([4]===[4])
}
//Primitive_Reference_Type()



function demo3(){
  var a=b=3
  console.log(a)
  console.log(b)
}
// demo3()
// console.log(typeof a)   
// console.log(typeof b)  



function objects(){
  const nest = { a: { b: 2 } };
  const shallow = { ...nest };
  shallow.a.b = 4;
  console.log(nest.a.b);    

  const deep = structuredClone(nest);
  deep.a.b = 5;
  console.log(deep.a.b);
  console.log(nest.a.b);


  let arr = [1, 2, 3];
  let brr = structuredClone(arr)
  let crr = [...arr]
  crr[0] = 0;
  brr[2] = 4;
  console.log(arr)
  console.log(brr)
  console.log(crr)
}
//objects()



function typeofD(){  
  console.log(typeof undefined);
  console.log(typeof null);
  console.log(typeof NaN);
  console.log(typeof {});
  console.log(typeof []);
  console.log(typeof function(){});
}
//typeofD()


function coercion(){
console.log("5" + 1);       // "51"
console.log("5" - 1);       // 4
console.log("5" * "2");     // 10
console.log(true + 1);      // 2
console.log(null + 1);      // 1     (null → 0)
console.log(undefined + 1); // NaN   (undefined → NaN)
console.log(1 + 2 + "3");   // "33"  (left to right: 3, then "33")
console.log("1" + 2 + 3);   // "123" (a string from the start)
console.log([] + []);       // ""
console.log([] + {});       // "[object Object]"
console.log(+"");           // 0
console.log(+"abc");        // NaN
}
//coercion()
 
function Truthy(){
  console.log(Boolean("0"))      // true  (non-empty string)
  console.log(Boolean("false"))  // true
  console.log(Boolean([]))       // true  (empty array)
  console.log(Boolean({}))       // true
  console.log(Boolean(" "))      // true
  console.log(Boolean(function(){})) // true
  console.log(Boolean(-1))       // true
}
//Truthy()


function demo4(){
  const obj = {
  name: "Asha",
  regular(){return this.name},
  arrow: ()=>{return this.name}
}; 
console.log(obj.arrow())
console.log(obj.regular())
}
//demo4()


function CallBack_Stack(){
function first()  { console.log("first start"); second(); console.log("first end"); }
function second() { console.log("second start"); third(); console.log("second end"); }
function third()  { console.log("third"); }
first();
}
//CallBack_Stack()


// function loop(){
//  Stack overflow: The stack has a size limit. Runaway recursion exhausts it:
//    loop()
// }
// loop()

 
// console.log("3" + 4 + 5, 3 + 4 + "5"); // 345 75
// console.log(null == undefined, null === undefined, null == 0); // true false false
// console.log([] + [], [] == false); // "" true


// var a = 1;
// function f() { 
//   console.log(a);  // undefined
//   var a = 2; 
// }
// f();



// let a = 1;
// function f() { 
//   console.log(a);   // ReferenceError: Cannot access 'a' before initialization
//   let a = 2;      
// }
// f();


// console.log([] == ![]) // true
// console.log([] == [])  // false


// function getObj() {
//   return { a: 1 };  // returns the object
// }function getObj() {
//   return
//   { a: 1 };  // returns undefined because of automatic semicolon insertion, use ( ) to return the value
// }
// console.log(getObj());


// const o = { a: 1 };
// o.a = 2;
// o = {}; // TypeError: Assignment to constant variable.
// console.log(o) // TypeError: Assignment to constant variable.




// const obj = {
//   name: "Tousif",
//   greet(){
//     const arrow = ()=>{
//       console.log(this.name)
//     }
//     arrow()
//   }
// }
// obj.greet()  // Tousif

// function demo6(a, b) {
//   console.log(arguments);
// }

// demo6(10, 20); // [10, 20] (arguments object)


 
// const demo5 = (a,b) => {
//   console.log(a,b);
// };
// demo5(10, 20); // [10, 20] (arguments object)
 


// function demo7(a) {
//   console.log(this);
// }

// demo7("Hello"); // Window (in browser) or global (in Node.js)



//console.log(1 + "2" + 3, 1 + 2 + "3") // 123,33
// const a = {p: {q: 1},x:3}; 
// const b = {...a}
// b.x=10
// b.p.q = 5;
// console.log(a.p.q)
// console.log(a.x)


// Approach 1: let (best)
//for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);

// Approach 2: IIFE (works with var)
// for (var i = 0; i < 3; i++) { 
//   (function (j) { setTimeout(() => console.log(j), 0); })(i);
// }

// // Approach 3: setTimeout extra argument (works with var)
for (var k = 0; k < 3; k++) setTimeout((j) => console.log(j), 0, k);