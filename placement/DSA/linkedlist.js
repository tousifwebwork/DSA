


// class listNode{
//     constructor(data, next = null){
//         this.data = data;
//         this.next = next;
//     }
// }
// var head = new listNode(1, new listNode(2, new listNode(3, new listNode(4, new listNode(5)))));

 

// function printList(head){
//     let temp=head;
//     while(temp){
//         console.log(temp.data);
//         temp = temp.next
//     }
// }
// //printList(head);

// function addFirst(head,data){ //add First
//     return new listNode(data,head)
// } 

// function addLast(head,data){
//     let newNode = new listNode(data);
//     if(!head)return newNode;

//     let temp=head;
//     while(temp.next)temp = temp.next;
    
//     temp.next = newNode;
//     return head;
// }

// head = addLast(head, 6);
// printList(head);









class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function printList(head) {
    let temp = head;
    while(temp){
        console.log(temp.data);
        temp = temp.next;
    } 
}
function removeDuplicates(head) {
    if (!head) return head;
    let curr = head;
    while (curr && curr.next) {
        if (curr.data === curr.next.data) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}

let head = new ListNode(1, new ListNode(1, new ListNode(2)));
//printList(removeDuplicates(head));




 function removeNthFromEnd(head, n) {
    let len=0;
    let temp=head;
    while(temp){
        len++;
        temp=temp.next;
    }
    if(len===1)return head;
    let curr=head;
    let pos=len-n;
    if(pos===0)return head;
    for(let i=1;i<pos;i++){
        curr=curr.next;
    }
    curr.next=curr.next.next;
    return head
}

let head2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
//printList(removeNthFromEnd(head2, 1));
printList(removeNthFromEnd(new ListNode(1), 0));