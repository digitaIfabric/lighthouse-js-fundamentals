function howManyHundreds(num, string, result){

var quotient = num / 100;
//var remainder = num % 100;
console.log(quotient)
//console.log(remainder)

return Math.floor(quotient);

}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));