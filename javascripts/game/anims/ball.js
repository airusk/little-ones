
export const drawBall = (x , y) => {
  game.ctx.beginPath();
  game.ctx.arc(x, y, 10, 0, Math.PI * 2);
  game.ctx.fillStyle = "#0095DD";
  game.ctx.fill();
  game.ctx.closePath();
}