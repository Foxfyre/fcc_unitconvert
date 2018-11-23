/*
*
*
*       Complete the handler logic below
*       
*       
*/

const math = require("mathjs");

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.split(/(\D+)$/g);
    
    if (result[0].match(/\/|\./g)) {
      return math.eval(result[0]);
    } else {
      return result[0];
    }
  };
  
  this.getUnit = function(input) {
    let arr = input.split(/(\D+)$/g);
    let str = arr[1]
    return str.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) { // convert the units
    let str = initUnit
    if (str === "gal") { return "l"; }
    else if (str === "l") { return "gal"; }
    else if (str === "lb") { return "kg"; }
    else if (str === "kg") { return "lb"; }
    else if (str === "mi") { return "km"; }
    else if (str === "km") { return "mi"; }
    else { return "error"; }
  };

  this.spellOutUnit = function(unit) {
    const unitLong = {
      gal: "Gallon",
      l: "Liter",
      kg: "Kilogram",
      lb: "Pound",
      mi: "Mile",
      km: "Kilometer"
    }
    return unitLong[unit] || "error"
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    function round(x) {
      return Number.parseFloat(x).toFixed(5);
    }

    if (initUnit === "gal") { return round(initNum * galToL); }
    else if (initUnit === "l") { return round(initNum / galToL); }
    else if (initUnit === "lb") { return round(initNum * lbsToKg); }
    else if (initUnit === "kg") { return round(initNum / lbsToKg); }
    else if (initUnit === "mi") { return round(initNum * miToKm); }
    else if (initUnit === "km") { return round(initNum / miToKm); }
    else { return "error"; }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {    
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit} `;
  };
  
}

module.exports = ConvertHandler;
