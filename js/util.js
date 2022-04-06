
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

const generateAvatarNumber = () => {
  const randomNumber = getRandomNumber(0,10);
  return (randomNumber > 9) ? String(randomNumber): `0${ randomNumber}`;
};

const generateUniqeArrayValues = (array) => {
  const uniqeValues = [];
  for(let i = 0; i <= getRandomNumber(1, array.length); i++) {
    const index = getRandomNumber(0, array.length - 1);
    if(!uniqeValues.includes(array[index])) {
      uniqeValues.push(array[index]);
    }
  }
  return uniqeValues;
};

export {generateAvatarNumber, getRandomFloat, generateUniqeArrayValues, getRandomNumber};
