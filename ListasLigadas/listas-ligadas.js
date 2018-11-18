class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    //Adiciona um elemento no final da lista
    append(element) { 
        const node = new Node(element);
        let current; 

        if(this.head === null) {
            this.head = node; 
        } else {
            current = this.head

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }
    
    //Adiciona um elemento em uma posição especifica.
    insert(position, element) {
        if(position >= 0 && position <= this.length) {
            const node = new Node(element);
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }    
    }

    //Remove o elemento de uma posiçºao especifica
    removeAt(position) {
        if(position > -1 && position < this.length) {
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0) {
                this.head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

    remove(element) {
        // Remove o elemento element
    }

    indexOf(element) {
        //Retorna a posição do elemento
    }

    isEmpty() {//Imprime na consolang 
        //Retorna se está vazia ou não a instância
    }

    size() {
        //Retorna o tamanho da instância 
    }

    //Converte em string
    toString() {
        let current = this.head;
        let string = '';

        while(current) {
            string += `${current.element} `;
            current = current.next;
        }

        return string;
    }

    //Imprime na consola
    print() {
        console.log(this.toString());
    }
}

//Testes Iniciais

const ll = new LinkedList();

ll.append('Claudio')
ll.append('Daniel')
ll.append('José')
ll.print() // Output: Claudio Daniel José
console.log(`Foi removido: ${ll.removeAt(0)}`); // Foi removido Cláudio
ll.append('Claudio')
ll.print() // Output: Daniel José Claudio
ll.insert(0, 'António');
ll.print() // Output: António Daniel José Claudio
ll.insert(2, 'Ana');
ll.print() // Output: António Daniel Ana José Claudio