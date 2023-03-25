let instance = null;

class Singleton {
  #value;

  constructor() {
    if (instance === null) {
      instance = this;
    }

    return instance;
  }

  setValue(value) {
    this.#value = value;
  }

  greet() {
    console.log('the private value is ', this.#value);
  }
}

export default Singleton;
