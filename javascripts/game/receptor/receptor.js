class Receptor{
  constructor(position, note){
    this.position = position;
    this.note = note;
    this.drawSelf = this.drawSelf.bind(this);
  }
  
  // drawSelf(x, y, fill) {
  //   fill = this.fill;
  //   game.ctx.beginPath();
  //   game.ctx.arc(x, y, 12, 0, Math.PI * 2);
  //   game.ctx.fillStyle = fill;
  //   game.ctx.fill();
  //   game.ctx.closePath();
  // }
  drawSelf(x, y) {
    let img = new Image(60,60);
    img.src = `./assets/img/${this.imgFile}`;
    game.ctx.drawImage(img, x-30, y-30, img.width, img.height);
  }
}

export default Receptor;

// COLOR SCHEMA
// HEX	RGB	CMYK		HEX: #cf5034	R: 207	G: 80	B: 52	C: 0	M: 61	Y: 75	K: 19		HEX: #35d6ab	R: 53	G: 214	B: 171	C: 75	M: 0	Y: 20	K: 16		HEX: #6d34cf	R: 109	G: 52	B: 207	C: 47	M: 75	Y: 0	K: 19		HEX: #cf9b34	R: 207	G: 155	B: 52	C: 0	M: 25	Y: 75	K: 19