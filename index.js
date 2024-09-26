function distanceFromHqInBlocks(pickupLocation) {
  let hqLocation =42;
  return Math.abs(pickupLocation - hqLocation);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickupLocation) {
  let blocks = distanceFromHqInBlocks(pickupLocation) ;
  return blocks * 264;
}
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start,destination) {
  let blocksTravelled = Math.abs (destination-start);
  return blocksTravelled * 264
}
console.log(distanceFromHqInFeet(50));

function calculatesFarePrice(start,destination) {
  const distance = distanceTravelledInFeet(start,destination)
  if (distance <= 400) {
    return 0;
  }
  else if(distance >400 && distance <=2000){
    return (distance - 400) * 0.02;
}
else if(distance >=2000 && distance <2500){
    return 25;
}
else{
    return "cannot travel that far"
}
}



