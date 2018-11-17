

 class Queue {
     constructor() {
         this.items = [];
     }

     //Adiciona um novo item
     emqueue(element) {
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