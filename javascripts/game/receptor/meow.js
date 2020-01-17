import Receptor from "./receptor";

class Meow extends Receptor {
  constructor(position, note) {
    super(position, note);
    this.soundFile = "cat_meow_".concat(note, ".ogg");
    this.imgFile = "cat.svg";
  }
}

export default Meow;