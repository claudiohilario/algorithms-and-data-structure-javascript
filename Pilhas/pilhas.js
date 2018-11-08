class Stack {
    constructor() {
        this.items = [];
    }  

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

function dec2Bin(decNumber) {
    //Pilha de restos
    const restStack = [];
    let rest;
    let binaryString = '';

    while(decNumber > 0) {
        //Arredondamento para baixo do resto de decNumber / 2
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString(); 
    }

    return binaryString;
}

console.log(dec2Bin(25));