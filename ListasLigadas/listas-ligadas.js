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

    insert(position, element) {
        //Adiciona um elemento em uma posição especifica.
    }

    removeAt(position) {
        //Remove o elemento de uma posiçºao especifica
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