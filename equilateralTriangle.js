let equilateralTriangle = (x,y,z) =>{
    let area = (x + y + z) / 2;
    return Math.sqrt(area * (area - x) * (area - y) * (area - z));
}
console.log(equilateralTriangle(6,6,6));

