class ArrayList {
    constructor() {
        this.array = [];
    }

    insert(item) {
        this.array.push(item);
    }

    toString() {
        return this.array.join();
    }

    bubbelSort() {
        for(let i = 0; i < this.array.length; i++) {
            for(let j = 0; j < this.array.length - 1; j++) {
                if( this.array[j] > this.array[j + 1]) {
                    this.swap(this.array, j , j + 1);
                }
            }
        }
    }

    // Troca de valores do index 1 com index 2
    swap(array, index1, index2) {
        const aux = array[index1];
        array[index1] = array[index1]
        array[index2] = aux;
    }
}