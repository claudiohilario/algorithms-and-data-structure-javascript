

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
 const fila = new Queue();

 fila.enqueue('João');
 fila.enqueue('António');
 fila.enqueue('Manuel');

 fila.print(); //Output: João,António,Manuel

 fila.dequeue();
 fila.print(); //Output: António,Manuel

 fila.dequeue();
 fila.print(); //Output: Manuel

 console.log(fila.isEmpty()); //Output: false
 console.log(fila.size()); //Output: 1

 
