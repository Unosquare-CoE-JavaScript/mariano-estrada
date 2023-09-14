function useCalc(calc, keys) {
  var keyMappings = {
    "+": "plus",
    "-": "minus",
    "*": "mult",
    "/": "div",
    "=": "eq",
  };

  return [...keys].reduce(function showDisplay(display, key) {
    var fn = keyMappings[key] || "number";
    var ret = String(calc[fn](key));
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

function calculator() {
  var currentTotal = 0;
  var currentVal = "";
  var currentOper = "=";
  var publicAPI = {
    number,
    eq,
    plus() {
      return operator("+");
    },
    minus() {
      return operator("-");
    },
    mult() {
      return operator("*");
    },
    div() {
      return operator("/");
    },
  };
  return publicAPI;

  function number(key) {
    if (/\d/.test(key)) {
      currentVal += key;
      return key;
    }
  }
  function eq() {
    if (currentOper != "=") {
      currentTotal = op(currentTotal, currentOper, Number(currentVal));
      currentOper = "=";
      currentVal = "";
      return formatTotal(currentTotal);
    }
    return "";
  }
  function operator(key) {
    if (currentOper != "=" && currentVal != "") {
      eq();
    } else if (currentVal != "") {
      currentTotal = Number(currentVal);
    }
    currentOper = key;
    currentVal = "";
    return key;
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
console.log(useCalc(calc, "4+3="))
