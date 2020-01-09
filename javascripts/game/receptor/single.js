import Receptor from "./receptor";

class Single extends Receptor {
  constructor(position){
    super(position, "#35d6ab")
    console.log("Single");
  }
}

export default Single;