function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data => {
          renderBooks(data); 
          return data; 
      })
      .catch(error => console.error("Error fetching books:", error));
}
document.addEventListener("DOMContentLoaded",function(){
  getfetchbooks()
})
