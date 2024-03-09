//Greeting Promise:

function createGreetingPromise(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Name is required.");
      }
    });
  }
  
  // Example usage:
  const name = "Mithun";
  
  createGreetingPromise(name)
    .then((greeting) => console.log(greeting))
    .catch((error) => console.error(error));
  