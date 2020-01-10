import Receptor from "./receptor";
import * as Util from "../util/util";

class Single extends Receptor {
  constructor(position, note){
    super(position, note, "black")
    this.audio = "dog_bark_".concat(note, ".ogg");
    console.log(this.audio);
    Util.playAudio(this.audio);
  }
}

export default Single;