export const attraction = (receptorPos, instigatorPos, distanceDelta) => {
  // position of receptor in relation to instigator
  let y = receptorPos[0]
  let x = receptorPos[1]
  
  const yRel = spaceshipOperator(y, instigatorPos[0]);
  const xRel = spaceshipOperator(x, instigatorPos[1]);

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

  return [y , x];
}

const spaceshipOperator = (rec,ins) => {
  if (rec < ins){
    return -1;
  }else if (rec > ins){
    return 1;
  }else{
    return 0;
  }
}