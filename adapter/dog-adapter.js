import Dog from './dog.js';
import Animal from './animal.js';

export default class DogAdapter extends Animal {
  #dog;

  constructor() {
    super();

    this.#dog = new Dog();
  }

  communicate() {
    this.#dog.bark();
  }
}
