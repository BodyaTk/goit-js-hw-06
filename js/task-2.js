class Storage {
  #items = [];

  constructor(params) {
    this.#items = params;
  }

  getItems() {
    return this.#items;
  }
  addItem(params) {
    return this.#items.push(params);
  }
  removeItem(params) {
    this.#items = this.#items.filter(item => item !== params);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
