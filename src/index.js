module.exports = function toReadable (number) {
    let result = "";
    let str = String(number);
    function units (u) {
        switch (u) {
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            case 10: return "ten";
            case 11: return "eleven";
            case 12: return "twelve";
            case 13: return "thirteen";
            case 14: return "fourteen";
            case 15: return "fifteen";
            case 16: return "sixteen";
            case 17: return "seventeen";
            case 18: return "eighteen";
            case 19: return "nineteen";
            default: return "";
        }
    };

    function tens (t) {
        switch (t) {
            case 2: return "twenty"
            case 3: return "thirty"
            case 4: return "forty";
            case 5: return "fifty";
            case 6: return "sixty";
            case 7: return "seventy";
            case 8: return "eighty";
            case 9: return "ninety";
        }
    };

    if (number === 0) return "zero";

    if (number < 20) {
        result = units(number);
    } else if (number < 100) result = tens(Number(str[0])) + " " + units(Number(str[1]));
   
    if (str.length === 3) {
       result = units(Math.trunc(number / 100)) + " hundred ";
       if (str[1] < 2 ) {
           result += units(Number(str.slice(1)));
       } else {
           result += tens(Number(str[1])) + " " + units(Number(str[2]));
       }  
    }
     
    if (result[result.length - 1] === " ")  result = result.slice(0, result.length - 1);
    
  return result;
}
