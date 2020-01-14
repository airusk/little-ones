import Receptor from "./receptor";
import * as Util from "../util/util";

class Single extends Receptor {
  constructor(position, note){
    super(position, note, "black")
    this.soundFile = "dog_bark_".concat(note, ".ogg");
    console.log(this.soundFile);
    Util.playAudio(this.soundFile);
  }
}

export default Single;