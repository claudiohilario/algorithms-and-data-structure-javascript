

 class Queue {
     constructor() {
         this.items = [];
     }

     //Adiciona um novo item
     enqueue(element) {
         this.items.push(element);
     }

     //Remove um item
     dequeue() {
         return this.items.shift();
     }

     //Retorna o primeiro elemento da fila.
     front() {
         const firstElement = 0;
         return this.items[firstElement];
     }

     //Verifica se a fila está vazia ou não
     isEmpty() {
         const arraySize = this.items.length;
         return arraySize === 0;
     }

     //Retorna o tamanho da fila 
     size() {
         return this.items.length;
     }

     //Imprimir a fila no console
     print() {
         console.log(this.items.toString());
     }
 }

 /** Teste da Class Queue */
//  const fila = new Queue();

//  fila.enqueue('João');
//  fila.enqueue('António');
//  fila.enqueue('Manuel');

//  fila.print(); //Output: João,António,Manuel

//  fila.dequeue();
//  fila.print(); //Output: António,Manuel

//  fila.dequeue();
//  fila.print(); //Output: Manuel

//  console.log(fila.isEmpty()); //Output: false
//  console.log(fila.size()); //Output: 1

 /** Fila de prioridades */
 
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

     enqueue(element, priority) { //João, 2
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

 //Teste Rápido

 const pqueue = new PriorityQueue();

 pqueue.enqueue('João', 2);
 pqueue.enqueue('António', 1);
 pqueue.enqueue('José', 3);
 pqueue.enqueue('Manuel', 1);

 pqueue.print();
 /**
  * Output:
  *     - António 1
  *     - Manuel 1
  *     - João 2
  *     - José 3
  */
