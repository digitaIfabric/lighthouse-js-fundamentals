function range(start,end,step) {

  if (start > end) {
    return []
  }
  else if ((start === undefined) || (end === undefined) || (step === undefined)){
    return [];
  }
  else if ( step < 0 ){
    return [];
  }

  else {
    var ii = start;
    var array = [ii];

    while ( ii <= end - step ) {
      array.push( ii + step );
      ii = ii + step;
    }
    return array
  }

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));