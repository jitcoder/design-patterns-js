import Animal from "./animal.js";

export default class Bird extends Animal {
  communicate() {
    console.log('chirp');
  }
}