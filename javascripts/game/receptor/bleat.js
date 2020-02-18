import Receptor from "./receptor";

class Bleat extends Receptor {
  constructor(position, note) {
    super(position, note);
    this.soundFile = "goat_bleat_".concat(note, ".ogg");
    this.imgFile = "goat.svg";
  }
}

export default Bleat;