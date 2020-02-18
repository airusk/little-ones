# little ones

## [Live Demo!](https://airusk.github.io/little-ones/)

little ones is an web-based audio sandbox using purely JavaScript, HTML, and CSS.

<img src="https://github.com/airusk/little-ones/blob/master/readme-assets/main.png" align="center">

## Technologies

* JavaScript
* NPM
* HTML
* CSS


## Features

### Game Loop
The game loop is handed the game object to update canvas. ```lastTick``` holds the most recent time stamp to measure when the next update will happen. ```tickLength``` ( every 16ms here) reflects how often game updates.

```javascript
export const loop = (game) => {
  const mainLoop = (tFrame) => {
    game.stopMainLoop = window.requestAnimationFrame(mainLoop);
    var nextTick = game.lastTick + game.tickLength;
    var numTicks = 0;

    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - game.lastTick;
      numTicks = Math.floor(timeSinceTick / game.tickLength);
    }

    queueUpdates(numTicks);
  }
  const queueUpdates = (numTicks) => {
    for (let i = 0; i < numTicks; i++) {
      game.lastTick = game.lastTick + game.tickLength;
      game.update(game.lastTick);
    }
  }

  game.lastTick = performance.now();
  game.lastRender = game.lastTick;
  game.tickLength = 16;

  mainLoop(performance.now());
};
```

### Placing Nodes & Switching Tracks

```javascript
class Receptor{
  constructor(position, note){
    this.position = position;
    this.note = note;
    this.drawSelf = this.drawSelf.bind(this);
  }
  drawSelf(x, y) {
    let img = new Image(38,38);
    img.src = `./assets/img/${this.imgFile}`;
    game.ctx.drawImage(img, x-19, y-19, img.width, img.height);
  }
}
```
Barks are objects that extend the Receptor class which hold their position on the canvas (to derive the note) and associate the sound file stored. The type of Receptor (Bark, Meow, etc.) determines the image representation on the canvas.

```javascript
import Receptor from "./receptor";

class Bark extends Receptor {
  constructor(position, note){
    super(position, note);
    this.soundFile = "dog_bark_".concat(note, ".ogg");
    this.imgFile = "dog.svg";
  }
}

export default Bark;
```

These receptors are reprensented as circular SVGs and are visually linked together in the order they will be played. Each track is actually stored on an array and used as a queue of Receptors.

<img src="https://github.com/airusk/little-ones/blob/master/readme-assets/tracks.png" align="center">


### Putting it All Together

It's much more amusing with sound. Try it [live!](https://airusk.github.io/little-ones/)

<img src="https://github.com/airusk/little-ones/blob/master/readme-assets/little-ones-demo.gif" align="center">

### Future Goals

In the future, I would like to: 
 * add a sidebar to choose different sounds from
 * alter the audio file divining function to take into account the vertical position and change octaves
 * create a way to save and load audio snippets
