class Receptor{
  constructor(position, behavior){
    this.position = position;
    this.behavior = behavior;
    this.movementPattern = this.movementPattern.bind(this);
  }

  movementPattern() {
    
  }
}

export default Receptor;