//Double using callback.

function doubleArray(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  
  function doubleCallback(num) {
    return num * 2;
  }
  
  const result = doubleArray(numbers, doubleCallback);
  console.log(result);

  