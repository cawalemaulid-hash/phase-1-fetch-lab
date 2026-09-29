function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => {
      renderBooks(books);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => {
      renderBooks(books);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});   
// describe( "index.js", () => {
//   describe( 'fetchBooks()', () => {

//     beforeEach( () => {
//       window.document.body.innerHTML = '<main></main>'
//       window.fetch = require( 'node-fetch' );
//     } );

//     it( "sends a fetch request to 'https://anapioficeandfire.com/api/books'", async () => {
//       chai.spy.on( window, 'fetch' );
//       await fetchBooks()
//       expect( window.fetch, "A fetch to the API was not found" )
//         .to.have.been.called.with( 'https://anapioficeandfire.com/api/books' );
//     } )

//     it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
//       chai.spy.on( window, 'renderBooks' );
//       await fetchBooks().then(() => {
//         expect( window.renderBooks ).to.have.been.called();
//       })
//     } )
//   } )
// })

