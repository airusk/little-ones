class Receptor{
  constructor(position, type){
    this.position = position;
    this.type = type;
  }
  
  drawSelf(x, y, fill = "#fff") {
    game.ctx.beginPath();
    game.ctx.arc(x, y, 10, 0, Math.PI * 2);
    game.ctx.fillStyle = fill;
    game.ctx.fill();
    game.ctx.closePath();
  }
}

export default Receptor;