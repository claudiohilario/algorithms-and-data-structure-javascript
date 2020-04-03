

 class Queue {
     constructor() {
         this.items = [];
     }

     enqueue(element) {
         this.items.push(element);
     }

     dequeue() {
         return this.items.shift();
     }

     front() {
         const firstElement = 0;
         return this.items[firstElement];
     }

     isEmpty() {
         const arraySize = this.items.length;
         return arraySize === 0;
     }

     size() {
         return this.items.length;
     }

     print() {
         console.log(this.items.toString());
     }
 }

//  const queue = new Queue();

//  queue.enqueue('João');
//  queue.enqueue('António');
//  queue.enqueue('Manuel');

//  queue.print(); //Output: João,António,Manuel

//  queue.dequeue();
//  queue.print(); //Output: António,Manuel

//  queue.dequeue();
//  queue.print(); //Output: Manuel

//  console.log(queue.isEmpty()); //Output: false
//  console.log(queue.size()); //Output: 1

 
 class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

 class PriorityQueue {
     constructor() {
         this.items = [];
     }

     enqueue(element, priority) {
         const queueElement = new QueueElement(element, priority);
         let added = false;

         for(let i = 0; i < this.items.length; i++) {
             if(queueElement.priority < this.items[i].priority) {
                 this.items.splice(i, 0, queueElement);
                 added = true;
                 break;
             }
         }

         if (!added) {
             this.items.push(queueElement);
         }
     }

     dequeue() {
         return this.items.shift();
     }

     print() {
        for(let i = 0; i < this.items.length; i++) {
            console.log(`${this.items[i].element} ${this.items[i].priority}`)
        }
     }
 }

//  const pqueue = new PriorityQueue();

//  pqueue.enqueue('João', 2);
//  pqueue.enqueue('António', 1);
//  pqueue.enqueue('José', 3);
//  pqueue.enqueue('Manuel', 1);

//  pqueue.print();
 /**
  * Output:
  *     - António 1
  *     - Manuel 1
  *     - João 2
  *     - José 3
  */

  /**
   * Other Example
   */
  function hotPotato(nameList, num) {
      const queue = new Queue();

      for(let i = 0; i < nameList.length; i++) {
          queue.enqueue(nameList[i]);
      }

      let eliminated = '';

      while(queue.size() > 1) {
          for(let i = 0; i < num; i++ ) {
              queue.enqueue(queue.dequeue());
          }

          eliminated = queue.dequeue();
          console.log(`${eliminated} was eliminated from the Hot Potato Game!`)
      }

      return queue.dequeue();
  }

  const names = [
      'António',
      'João',
      'Dulce',
      'José',
      'Maria',
  ];

  const winner = hotPotato(names, 7);
  console.log(`The winner is: ${winner}`);

