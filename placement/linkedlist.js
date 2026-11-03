
function Node(v){
    this.data = v;
    this.next = null; 
}

let a1 = new Node(10);
let a2 = new Node(20);
let a3 = new Node(30);
a1.next = a2;
a2.next = a3;

function printNode(h){
    let c = h;
    while(c !== null){
        console.log(c.data)
        c = c.next
    }
}

function frontAdd(h,d){
    let newNode = new Node(d);
    newNode.next = h;
    return newNode
} 

function lastNode(h, d) {
    let newNode = new Node(d);
    if (h === null) return newNode;

    let c = h;
    while (c.next !== null) {
        c = c.next;
    }

    c.next = newNode;
    return h;
}

function deletenode(h,d) {
    if(h == null) return null;
    if(h.data == d) return h.next;

    let prev = null;
    let c = h;
    while(c.next !== null){
        if(c.data == d){
            prev.next = c.next;
            return h
        }
        prev = c;
        c = c.next
    }
    return h
}

let h = a1;           // 10 -> 20 -> 30
h = frontAdd(h, 0);   // 0 -> 10 -> 20 -> 30
h = lastNode(h, 40);  // 0 -> 10 -> 20 -> 30 -> 40
printNode(h)
h = deletenode(h,10)  // 0 -> 20 -> 30 -> 40
printNode(h)