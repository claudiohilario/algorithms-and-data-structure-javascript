function HashTable() {
  const table = [];

  this.put = function(key, value) {
    const position = loseloseHashCode(key);
    console.log(position + " " + key);
    table[position] = value;
  };

  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined;
  };

  this.get = function(key) {
    return table[loseloseHashCode(key)];
  };

  const loseloseHashCode = function(key) {
    let hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
}

const hash = new HashTable();

hash.put("Test1", "test1@email.com");
hash.put("Test2", "test2@email.com");
hash.put("Test3", "test3@email.com");

hash.remove("Test2");

hash.get("Test1"); //test1@email.com
hash.get("AAAAAA"); //undefined
