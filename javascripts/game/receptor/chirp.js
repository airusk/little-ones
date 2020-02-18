import Receptor from "./receptor";

class Chirp extends Receptor {
  constructor(position, note) {
    super(position, note);
    this.soundFile = "bird_chirp_".concat(note, ".ogg");
    this.imgFile = "bird.svg";
  }
}

export default Chirp;