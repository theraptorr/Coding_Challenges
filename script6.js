//Fetch results asynchronously:

async function fetchDataAsync() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Example usage:
  fetchDataAsync();
  


