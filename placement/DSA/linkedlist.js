


class listNode{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
var head = new listNode(1, new listNode(2, new listNode(3, new listNode(4, new listNode(5)))));

 

function printList(head){
    let temp=head;
    while(temp){
        console.log(temp.data);
        temp = temp.next
    }
}
//printList(head);

function addFirst(head,data){ //add First
    return new listNode(data,head)
} 

function addLast(head,data){
    let newNode = new listNode(data);
    if(!head)return newNode;

    let temp=head;
    while(temp.next)temp = temp.next;
    
    temp.next = newNode;
    return head;
}

head = addLast(head, 6);
printList(head);