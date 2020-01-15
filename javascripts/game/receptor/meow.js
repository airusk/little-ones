import Receptor from "./receptor";
import * as Util from "../util/util";

class Meow extends Receptor {
  constructor(position, note) {
    super(position, note);
    this.soundFile = "cat_meow_".concat(note, ".ogg");
    this.imgFile = "cat.svg";
    Util.playAudio(this.soundFile);
  }
}

export default Meow;