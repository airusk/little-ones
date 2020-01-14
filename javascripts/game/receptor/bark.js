import Receptor from "./receptor";
import * as Util from "../util/util";

class Bark extends Receptor {
  constructor(position, note){
    super(position, note);
    this.soundFile = "dog_bark_".concat(note, ".ogg");
    this.imgFile = "dog.svg";
    Util.playAudio(this.soundFile);
  }
}

export default Bark;