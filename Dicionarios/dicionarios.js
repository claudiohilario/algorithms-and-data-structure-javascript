function Dicionary() {
  let items = {};

  /**
   * Permite adicionar um novo item ao dicionário.
   */
  this.set = function(key, value) {
    items[key] = value;
  };

  /**
   * Permite eliminar elemento do dicionário pela chave
   */
  this.delete = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }

    return false;
  };

  /**
   * Permite verificar se key existe.
   */
  this.has = function(key) {
    return items.hasOwnProperty(key);
  };

  /**
   * Retorna valor de uma determinada key.
   */
  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };

  /**
   * Remove todos os itens do dicionário
   */
  this.clear = function() {
    items = {};
  };

  /**
   * Retorna a quantidade de elementos do dicionário
   */
  this.size = function() {
    return Object.keys(items).length;
  };

  /**
   * Retorna array com todas as keys do dicionário.
   */
  this.keys = function() {
    return Object.keys(items);
  };

  /**
   * Retorna todos os valores do dicionário.
   */
  this.values = function() {
    const values = [];
    const keys = Object.keys(items);

    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  };

  this.getItems = function() {
    return items;
  };
}

const dici = new Dicionary();

dici.set("Test", "test@example.com");
dici.set("Test1", "test1@example.com");
dici.set("Test2", "test2@example.com");

console.log(dici.has("Test1")); // true
console.log(dici.has("xxx")); // false

console.log(dici.size()); // 3

console.log(dici.get("Test")); // test@example.com

console.log(dici.keys()); // [ 'Test', 'Test1', 'Test2' ]

console.log(dici.values()); // [ 'test@example.com', 'test1@example.com', 'test2@example.com' ]

console.log(dici.delete("Test")); // true
console.log(dici.getItems()); // { Test1: 'test1@example.com', Test2: 'test2@example.com' }

console.log(dici.clear()); //undefined
