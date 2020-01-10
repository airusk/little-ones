class Receptor{
  constructor(position, note, fill = "white"){
    this.position = position;
    this.note = note;
    this.fill = fill;
    this.drawSelf = this.drawSelf.bind(this);
  }
  
  drawSelf(x, y, fill) {
    fill = this.fill;
    game.ctx.beginPath();
    game.ctx.arc(x, y, 12, 0, Math.PI * 2);
    game.ctx.fillStyle = fill;
    game.ctx.fill();
    game.ctx.closePath();
  }
}

export default Receptor;

// COLOR SCHEMA
// HEX	RGB	CMYK		HEX: #cf5034	R: 207	G: 80	B: 52	C: 0	M: 61	Y: 75	K: 19		HEX: #35d6ab	R: 53	G: 214	B: 171	C: 75	M: 0	Y: 20	K: 16		HEX: #6d34cf	R: 109	G: 52	B: 207	C: 47	M: 75	Y: 0	K: 19		HEX: #cf9b34	R: 207	G: 155	B: 52	C: 0	M: 25	Y: 75	K: 19