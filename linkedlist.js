

function LinkedList(data){
    this.data=data;
    this.next=null;
}

let a1 = new LinkedList(30);
let a2 = new LinkedList(40);
let a3 = new LinkedList(50);

a2.next=a1;
a3.next=a2;
let c=a3


console.log(a1)