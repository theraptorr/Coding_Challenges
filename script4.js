// Arrange in alphabetical order:

function arrangeAlphabetically(books, callback) {
    const titles = books.map((book) => book.title);
    const sortedTitles = titles.sort();
  
    callback(sortedTitles);
  }
  
  // Example usage:
  const books = [
    { title: "The Great Gatsby", author: "F. Scott", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
  ];
  
  function logTitles(titles) {
    console.log("Titles in alphabetical order:", titles);
  }
  
  arrangeAlphabetically(books, logTitles);
  