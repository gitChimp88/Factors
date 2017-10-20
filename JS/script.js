function getAllFactorsFor(remainder) {
   
    var factors = [];
  
    for (var i = 2; i <= remainder; i++) {
        while (remainder % i === 0) {
            factors.push(i);
            remainder = remainder / i;
      
        }
    }

    return factors;
}

getAllFactorsFor(102);