function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  arr.forEach(obj => {
    obj.orbitalPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(obj.avgAlt + earthRadius,3)/GM));
  delete obj.avgAlt;
  })
  
  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
