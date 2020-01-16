import Receptor from "./receptor";

class Bark extends Receptor {
  constructor(position, note){
    super(position, note);
    this.soundFile = "dog_bark_".concat(note, ".ogg");
    this.imgFile = "dog.svg";
  }
}

export default Bark;