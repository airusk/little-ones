class Receptor{
  constructor(position, behavior){
    this.position = position;
    this.behavior = behavior;
    this.movementPattern = this.movementPattern.bind(this);
  }

  // default movement
  movementPattern() {
    
  }
}

export default Receptor;