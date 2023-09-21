const randomNum = function* (end) {
  while (true) {
    let random = Math.floor(Math.random() * end) + 1;
    yield random;
  }
};

const rand10 = randomNum(100);
