export const attraction = (receptorPos, instigatorPos, distanceDelta, threshold = 100) => {
  // position of receptor in relation to instigator
  let y = receptorPos[0]
  let x = receptorPos[1]
  
  const yRel = spaceshipOperator(y, instigatorPos[0]);
  const xRel = spaceshipOperator(x, instigatorPos[1]);

  if (inThreshold(...receptorPos,...instigatorPos, threshold)){
    switch(yRel){
      case (-1):
        y += distanceDelta;
        break;
      case (1):
        y -= distanceDelta;
        break;
      default:
        y = receptorPos[0];
    }
    switch (xRel) {
      case (-1):
        x += distanceDelta;
        break;
      case (1):
        x -= distanceDelta;
        break;
      default:
        x = receptorPos[0];
    }
  } 

  return [y , x];
}

export const repulsion = (receptorPos, instigatorPos, distanceDelta, threshold = 50) => {
  let y = receptorPos[0]
  let x = receptorPos[1]

  const yRel = spaceshipOperator(y, instigatorPos[0]);
  const xRel = spaceshipOperator(x, instigatorPos[1]);

  if (inThreshold(...receptorPos, ...instigatorPos, threshold)) {
    switch (yRel) {
      case (-1):
        y -= distanceDelta;
        break;
      case (1):
        y += distanceDelta;
        break;
      default:
        y = receptorPos[0];
    }
    switch (xRel) {
      case (-1):
        x -= distanceDelta;
        break;
      case (1):
        x += distanceDelta;
        break;
      default:
        x = receptorPos[0];
    }
  }

  return [y, x];
}


// helper functions
const spaceshipOperator = (rec,ins) => {
  if (rec < ins){
    return -1;
  }else if (rec > ins){
    return 1;
  }else{
    return 0;
  }
}

const inThreshold = (y1,x1,y2,x2, threshold) => (
  (Math.abs(y1 - y2) < threshold) && (Math.abs(x1 - x2) < threshold)
);