class StringBuilder {
  #value;

  constructor(parametrs) {
    this.#value = parametrs;
  }
  getValue() {
    return this.#value;
  }
  padStart(str) {
    return (this.#value = str + this.#value);
  }
  padEnd(str) {
    return (this.#value = this.#value + str);
  }
  padBoth(str) {
    return (this.#value = str + this.#value + str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
