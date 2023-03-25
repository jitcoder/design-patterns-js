import DogAdapter from "./adapter/dog-adapter.js";
import Bird from './adapter/bird.js';
import Animal from "./adapter/animal.js";


const b = new Bird();
const d = new DogAdapter();

if (b instanceof Animal) {
  b.communicate();
}

if (d instanceof Animal) {
  d.communicate();
}
