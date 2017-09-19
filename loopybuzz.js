for (var ii = 100; ii < 201; ii++){
  // if multiple of 3 and 4, print "LoopyLighthouse"
  if (ii % 12 === 0){
    console.log("LoopyLighthouse")
  }
  // if multiple of 3, print "Loopy"
  else if (ii % 3 ===  0){
     console.log("Loopy")
  }
  // if multiple of 4, print "Lighthouse"
  else if (ii % 4 === 0){
    console.log("Lighthouse")
  }
  else   {
    console.log(ii)
  }
}