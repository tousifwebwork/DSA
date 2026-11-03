 
// 1. Create Node
function Node(val) {
    this.val = val;
    this.next = null;
}

// 2. Print Linked List
function printList(head) {
    let c = head;
    let result = [];

    while (c !== null) {
        result.push(c.val);
        c = c.next;
    } 

    console.log(result.join(" -> ") + " -> null");
}

// 3. Add at Front
function addFront(head, val) {
    let n = new Node(val);
    n.next = head;
    return n;
}

// 4. Add at End
function addEnd(head, val) {
    let n = new Node(val);
    if (head === null) return n;

    let c = head;
    while (c.next !== null) {
        c = c.next;
    }

    c.next = n;
    return head;
}

// 5. Remove from Front
function removeFront(head) {
    if (head === null) return null;
    return head.next;
}

// 6. Remove from End
function removeEnd(head) {
    if (head === null || head.next === null) return null;

    let c = head;
    while (c.next.next !== null) {
        c = c.next;
    }

    c.next = null;
    return head;
}

// 7. Remove by Value (first occurrence)
function removeValue(head, val) {
    if (head === null) return null;
    if (head.val === val) return head.next;

    let c = head;

    while (c.next !== null) {
        if (c.next.val === val) {
            c.next = c.next.next;
            return head;
        }

        c = c.next;
    }

    return head;
}

// 8. Reverse Linked List (iterative)
function reverseList(head) {
    let prev = null;
    let c = head;

    while (c !== null) {
        let next = c.next;
        c.next = prev;
        prev = c;
        c = next;
    }

    return prev;
}

// 9. Search Value
function search(head, val) {
    let c = head;

    while (c !== null) {
        if (c.val === val) return true;
        c = c.next;
    }

    return false;
}

// 10. Find Middle Node
function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// 11. Find Length
function length(head) {
    let count = 0;
    let c = head;

    while (c !== null) {
        count++;
        c = c.next;
    }

    return count;
}

// 12. Find Nth Node from End (n starts at 1)
function nthFromEnd(head, n) {
    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        if (fast === null) return null;
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

// 13. Detect Cycle
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}

// ---------------------------------
// TEST ALL OPERATIONS
// ---------------------------------

let head = new Node(10);
head = addEnd(head, 20);
head = addEnd(head, 30);

console.log("Original list:");
printList(head);

console.log("Add at front (5):");
head = addFront(head, 5);
printList(head);

console.log("Add at end (40):");
head = addEnd(head, 40);
printList(head);

console.log("Remove front:");
head = removeFront(head);
printList(head);

console.log("Remove end:");
head = removeEnd(head);
printList(head);

console.log("Remove value (20):");
head = removeValue(head, 20);
printList(head);

console.log("Search 30:", search(head, 30));

let mid = middleNode(head);
console.log("Middle node:", mid ? mid.val : null);

console.log("Length:", length(head));

let nth = nthFromEnd(head, 2);
console.log("2nd node from end:", nth ? nth.val : null);

console.log("Has cycle:", hasCycle(head));

console.log("Reverse list:");
head = reverseList(head);
printList(head); 












// My Practice
// function Node(v){
//     this.data = v;
//     this.next = null; 
// }

// let a1 = new Node(10);
// let a2 = new Node(20);
// let a3 = new Node(30);
// a1.next = a2;
// a2.next = a3;

// // function printNode(h){
// //     let c = h;
// //     while(c !== null){
// //         console.log(c.data)
// //         c = c.next
// //     }
// // }

// // function frontAdd(h,d){
// //     let newNode = new Node(d);
// //     newNode.next = h;
// //     return newNode
// // } 

// // function lastNode(h, d) {
// //     let newNode = new Node(d);
// //     if (h === null) return newNode;

// //     let c = h;
// //     while (c.next !== null) {
// //         c = c.next;
// //     }

// //     c.next = newNode;
// //     return h;
// // }

// // function deletenode(h,d) {
// //     if(h == null) return null;
// //     if(h.data == d) return h.next;

// //     let prev = null;
// //     let c = h;
// //     while(c.next !== null){
// //         if(c.data == d){
// //             prev.next = c.next;
// //             return h
// //         }
// //         prev = c;
// //         c = c.next
// //     }
// //     return h
// // }

// // let h = a1;           // 10 -> 20 -> 30
// // h = frontAdd(h, 0);   // 0 -> 10 -> 20 -> 30
// // h = lastNode(h, 40);  // 0 -> 10 -> 20 -> 30 -> 40
// // printNode(h)
// // h = deletenode(h,10)  // 0 -> 20 -> 30 -> 40
// // printNode(h)


// function rev(c){
//     if(c==null)return
//     rev(c.next)
//     console.log(c.data)
// }

// let h = a1
// rev(h)




 