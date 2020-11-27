let jsondata;

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
    main.appendChild(h2)
  })
}


  fetch('https://anapioficeandfire.com/api/books').then(
    function(u){ return u.json();}
  ).then(
    function(json){
      jsondata = json;
    }
  )
  // This returns what its supposed to in console But waht to do with it from there, returns A feast for crows.
// console.log(jsondata[4].name)

// In console this returns a particulars books characters 
// jsondata[1]["characters"].length

// function showFifthBook() {
//   const main = document.querySelector('main')
//   const fifthBook = document.createElement('h3')
//   fifthBook.innerText = "Fifth Book"
//   main.appendChild(fifthBook)
//   const bookName = document.createElement('p')
//   bookName.innerHTML = jsondata[4].name
//   fifthBook.appendChild(bookName)
// }


document.addEventListener('DOMContentLoaded', function() {
 fetchBooks()
})


