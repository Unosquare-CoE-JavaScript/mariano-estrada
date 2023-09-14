function useCalc(calc, keys) {
  return [...keys].reduce(function showDisplay(display, key) {
    var ret = String(calc(key));
    return display + (ret != "" && key == "=" ? "=" : "") + ret;
  }, "");
}

//-----------------------------------------------------

function formatTotal(display) {
  if (Number.isFinite(display)) {
    // constrain display to max 11 chars
    let maxDigits = 11;
    // reserve space for "e+" notation?
    if (Math.abs(display) > 99999999999) {
      maxDigits -= 6;
    }
    // reserve space for "-"?
    if (display < 0) {
      maxDigits--;
    }
    // whole number?
    if (Number.isInteger(display)) {
      display = display.toPrecision(maxDigits).replace(/\.0+$/, "");
    }
    // decimal
    else {
      // reserve space for "."
      maxDigits--;
      // reserve space for leading "0"?
      if (Math.abs(display) >= 0 && Math.abs(display) < 1) {
        maxDigits--;
      }
      display = display.toPrecision(maxDigits).replace(/0+$/, "");
    }
  } else {
    display = "ERR";
  }
  return display;
}

//-----------------------------------------------------

//Usecalc and formatTotal are necessary tools 

function calculator() {
  var currentTotal = 0;
  var currentVal = "";
  var currentOper = "=";
  return pressKey;
  function pressKey(key) {
    if (/\d/.test(key)) {
      currentVal += key;
      return key;
    }
    else if (/[+*/-]/.test(key)) {
      if (currentOper != "=" && currentVal != "") {
        pressKey("=");
      } else if (currentVal != "") {
        currentTotal = Number(currentVal);
      }
      currentOper = key;
      currentVal = "";
      return key;
    }
    else if (key == "=" && currentOper != "=") {
      currentTotal = op(currentTotal, currentOper, Number(currentVal));
      currentOper = "=";
      currentVal = "";
      return formatTotal(currentTotal);
    }
    return "";
  }

  function op(val1, oper, val2) {
    var ops = {
      "+": (v1, v2) => v1 + v2,
      "-": (v1, v2) => v1 - v2,
      "*": (v1, v2) => v1 * v2,
      "/": (v1, v2) => v1 / v2,
    };
    return ops[oper](val1, val2);
  }
}
var calc = calculator();

console.log(useCalc(calc, "4+3="));
