class Storage {
  #item = [];

  constructor(params) {
    this.#item = params;
  }

  getItems() {
    return this.#item;
  }
  addItem(params) {
    return this.#item.push(params);
  }
  removeItem(params) {
    const newItem = this.#item.filter(item => item !== params);
    return (this.#item = newItem);
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
