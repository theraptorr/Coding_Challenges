//Error Handling

function fetchDataWithErrorHandler() {
    fetch("https://jsonplaceholder.typicode.com/posts/123456789")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error.message));
  }
  
  // Example usage:
  fetchDataWithErrorHandler();
  