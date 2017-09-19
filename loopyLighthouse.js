function loopyLighthouse(range,multiples,words){

  var word1 = words[0];
  var word2 = words[1];
  var multiple1 = multiples[0];
  var multiple2 = multiples[1];
  var multiple3 = multiple1 * multiple2;
  var range1 = range[0];
  var range2 =  range[1] + 1;

  for (var ii = range1; ii < range2; ii++){
    // if multiple of 3 and 4, print "LoopyLighthouse"
    if (ii % multiple3 === 0){
      console.log(word1 + word2)
    }
    // if multiple of 3, print "Loopy"
    else if (ii % multiple1 ===  0){
      console.log(word1)
    }
    // if multiple of 4, print "Lighthouse"
    else if (ii % multiple2 === 0){
      console.log(word2)
    }
    else   {
      console.log(ii)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);