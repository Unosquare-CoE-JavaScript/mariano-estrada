function toggle(...vals) {
  var unset = {};
  var cur = unset;

  return function next() {
    if (cur != unset) {
      vals.push(cur);
    }
    cur = vals.shift();
    return cur;
  };
}

var hello = toggle('hello');
var onOff = toggle('on', 'off', 'onoff');

console.log(onOff());
console.log(onOff());
console.log(onOff());
