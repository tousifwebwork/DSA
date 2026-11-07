

let a:number = 32;
//console.log(a);

function mul(n:number):number{
    return n*2
}
//console.log(mul(2))



let s: string|null = null;
//console.log(s)


const nums: number[] = [1,2,3,4]
const nums2: Array<string> = ['2','w']
const nums3: Array<Boolean> = [true,false,false]
//console.log(nums,nums2,nums3)



type status = "success" | "reject"
interface User {
  name: string;
  age: number;
}
const user: User={name: "Tousif", age: 22};
let payment: status = "reject";
console.log(user)
console.log(payment)