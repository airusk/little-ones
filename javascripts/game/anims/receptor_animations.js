export const drawConnection = (pos1, pos2) => {
  game.ctx.beginPath();
  game.ctx.moveTo(...pos1);
  game.ctx.lineTo(...pos2);
  game.ctx.lineWidth = 5;
  game.ctx.strokeStyle = "gray";
  game.ctx.stroke();
  game.ctx.closePath();
};

export const drawActiveConnection = (pos1, pos2) => {
  game.ctx.beginPath();
  game.ctx.moveTo(...pos1);
  game.ctx.lineTo(...pos2);
  game.ctx.lineWidth = 5;
  game.ctx.strokeStyle = "black";
  game.ctx.stroke();
  game.ctx.closePath();
};

export const drawOutline = (x, y) => {
  game.overlayCtx.beginPath();
  game.overlayCtx.strokeStyle = "#5f68fb";
  game.overlayCtx.lineWidth = 5;
  game.overlayCtx.arc(x, y, 20, 0, Math.PI * 2);
  game.overlayCtx.stroke();
  game.overlayCtx.closePath();
};