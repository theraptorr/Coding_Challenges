function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
  
    function logAge() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    return logAge;
  }
  
  // Example usage:
  const personDetails = {
    firstName: "Prince",
    lastName: "Kumar",
    age: 23,
  };
  
  const logAgeCallback = ageInDays(personDetails);
  logAgeCallback();
  