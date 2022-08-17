// Code your solution in this file!
const rate = 264;
const street = 42;
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - street);
}
function distanceFromHqInFeet(feet) {
  return Math.abs((feet - street) * rate);
}
function distanceTravelledInFeet(val1, val2) {
  return Math.abs((val1 - val2) * rate);
}
function calculatesFarePrice(start, destination) {
  const distance = Math.abs(start - destination);
  const distInFeet = distance * rate;
  if (distance === 1) {
    return 0;
  } else if (distInFeet >= 400 && distInFeet <= 2000) {
    return (distInFeet - 400) * 0.02;
  } else if (distInFeet > 2500) {
    return "cannot travel that far";
  } else if (distInFeet > 2000) {
    return 25;
  }
}
