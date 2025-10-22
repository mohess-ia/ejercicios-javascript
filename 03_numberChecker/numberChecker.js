function numberChecker(number) {
  switch(number){
    case 1000:
      return true;
      break;

    case 10:
      return true;
      break;

    case 9:
      return false;
      break;

    case 6:
      return false;
      break;
    default:
      console.log("No has introducido un numero valido.")
  }
}

// Do not edit below this line
module.exports = numberChecker;

