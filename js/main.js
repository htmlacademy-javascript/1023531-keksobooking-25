
function getRandomNumber(minValue, maxValue) {
  if(minValue < 0 || maxValue < 0 || minValue >= maxValue){
    return false;
  }
  const rand = minValue - 0.5 + Math.random() * (maxValue - minValue + 1);
  return Math.round(rand);
}

function getRandomFloat(minValue, maxValue, numberAfterComa) {
  if(minValue < 0 || maxValue < 0 || minValue >= maxValue){
    return false;
  }
  const rand = Math.random() * (maxValue - minValue) + minValue;
  return rand.toFixed(numberAfterComa);
}
