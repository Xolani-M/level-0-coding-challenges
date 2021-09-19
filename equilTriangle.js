let equilateralTriangle = (x,y,z) =>{
    let area = (x + y + z) / 2; 
    console.log(Math.sqrt(area * (area - x) * (area - y) * (area - z)));
}
equilateralTriangle(6,6,6);
