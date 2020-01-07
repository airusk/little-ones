class Receptor{
  constructor(position, behavior){
    this.position = position;
    this.behavior = behavior;
    this.movementPattern = this.movementPattern.bind(this);
  }

  movementPattern(delta) {
    // this.position[0] += 2;
    // this.position[1] += 2;
    this.position[1] += delta;
  }
}

export default Receptor;