
export const drawBall = (x , y) => {
  game.ctx.beginPath();
  game.ctx.arc(x, y, 10, 0, Math.PI * 2);
  game.ctx.fillStyle = "#0095DD";
  game.ctx.fill();
  game.ctx.closePath();
}

export const drawConnection = (pos1, pos2) =>{
  game.ctx.beginPath();
  game.ctx.moveTo(...pos1);
  game.ctx.lineTo(...pos2);
  game.ctx.strokeStyle = "white";
  game.ctx.stroke();
  game.ctx.closePath();
}