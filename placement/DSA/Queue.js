
function queue(){
    let queue = [];
    queue.push(1); // enqueue 1
    queue.push(2); // enqueue 2
    queue.push(3); // enqueue 3
    queue.shift(); // dequeue 1
    console.log(queue.length === 0); // returns false
    return queue; // returns [2, 3]

}
// console.log(queue())


class Queue{
    constructor(){
       this.head=0;
       this.tail=0;
       this.queue={}
    }

    enqueue(x){
        this.queue[this.tail] = x;
        this.tail++
        return x
    }
    
    dequeue(){
        let val = this.queue[this.head];
        delete this.queue[this.head];
        this.head++
        return val
    }

    peek(){
        return this.queue[this.head];
    }

    empty(){
        return this.head==this.tail
    }
    
    size(){
        return this.tail-this.head
    }

    getQueue(){
        let arr=[];
        for(let i=this.head;i<this.tail;i++){
          arr.push(this.queue[i])
        }
        return arr
    }
     
}


let obj = new Queue();

// console.log("Insert into Queue: ",obj.enqueue(10));
// console.log("Insert into Queue: ",obj.enqueue(20));
// console.log("Insert into Queue: ",obj.enqueue(30));
// console.log("Peek into Queue: ",obj.size());
// console.log("Peek into Queue: ",obj.peek());
// console.log("Peek into Queue: ",obj.dequeue());
// console.log("Peek into Queue: ",obj.getQueue()); 
// console.log("Peek into Queue: ",obj.peek());






class Lifo{

    constructor(){
       this.head=-1; 
       this.tail=-1; 
       this.queue={}
    }

    push(x){
        this.tail++;
        this.queue[this.tail] = x;
        return x
    }

    pop(){
        if(this.head==this.tail) return 

        let val = this.queue[this.tail];
        delete this.queue[this.tail];
        this.tail--; 
        return val;
    }

    top(){
        return this.queue[this.tail]
    }

    empty(){
        return this.tail===this.head
    }
}

let obj2 = new Lifo(); 
obj2.push(1)
obj2.push(2)
obj2.push(3)
// console.log(obj2.top())
// console.log(obj2.pop()) 
// console.log(obj2.top())
// console.log(obj2.empty())




var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;
    let minutes = 0;

    // 1. Initialize queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    // If there are no fresh oranges to begin with, return 0
    if (freshCount === 0) return 0;

    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    // 2. Perform BFS level by level (each level represents 1 minute)
    while (queue.length > 0 && freshCount > 0) {
        const size = queue.length;
        let rottedThisMinute = false;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                // Check bounds and if cell contains a fresh orange
                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2; // Make it rotten
                    freshCount--;     // Reduce fresh orange count
                    queue.push([nr, nc]); // Add to queue for next minute
                    rottedThisMinute = true;
                }
            }
        }

        if (rottedThisMinute) {
            minutes++;
        }
    }

    // 3. If any fresh oranges remain, it's impossible to rot all
    return freshCount === 0 ? minutes : -1;
};

// console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])) // Output: 4









