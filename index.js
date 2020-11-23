function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
    .then(json => renderBooks(json)); 
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    const h3 = document.createElement('h3')
    h3.innerHTML = book.numberOfPages

    main.appendChild(h2)
    main.appendChild(h3)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
