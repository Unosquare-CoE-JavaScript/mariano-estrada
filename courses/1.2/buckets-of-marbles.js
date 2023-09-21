const totalNumber = 100;

// Finding Prime numbers
// Sieve of eratosthenes is an algorythm made to find prime numbers in any given limit
let findPrimes = (totalNumber) => {
  var sieve = Array(totalNumber).fill(true);
  var max = Math.sqrt(totalNumber);

  for (let i = 2; i < max; i++) {
    if (sieve[i]) {
      let j = Math.pow(i, 2);

      for (let k = j; k < totalNumber; k += i) {
        sieve[k] = false;
      }
    }
  }
  return sieve
    .map(function getPrimes(flag, prime) {
      if (flag) {
        return prime;
      }
      return flag;
    })
    .filter(function onlyPrimes(v) {
      return !!v;
    })
    .slice(1);
};

console.log(findPrimes(totalNumber));
