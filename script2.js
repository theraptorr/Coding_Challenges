//String Manipulation.

function manipulateString(inputString) {
    const manipulatedString = inputString.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    return logString;
  }
  
  // Example usage:
  const logCallback = manipulateString("Hello, world!");
  logCallback();