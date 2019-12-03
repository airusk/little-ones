import Receptor from "../receptor/receptor";
import * as Behavior from "../behaviors";

export const distanceDelta = (startTime, totalTime, rate) =>{
  let timeElapsed = (new Date() - startTime) / 1000; // time elapsed in seconds
  let distance = rate * timeElapsed / totalTime
  // console.log("time elapsed: "+ timeElapsed);
  // debugger
  return (rate * timeElapsed / totalTime);
}

export const receptorGenerator = (total, maxHeight, maxWidth) => {
  let receptors = [];
  for (let i = 0; i < total; i++) {
    const receptor = new Receptor(randomPos(maxHeight,maxWidth), Behavior.repulsion);
    receptors.push(receptor);
  }
  return receptors;
}

const randomPos = (maxHeight, maxWidth) =>(
  [Math.random() * maxHeight, Math.random() * maxWidth]
)