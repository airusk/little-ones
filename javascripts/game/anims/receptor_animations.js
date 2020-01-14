export const drawConnection = (pos1, pos2) =>{
  game.ctx.beginPath();
  game.ctx.moveTo(...pos1);
  game.ctx.lineTo(...pos2);
  game.ctx.strokeStyle = "black";
  game.ctx.stroke();
  game.ctx.closePath();
}