
const bookNameInput = document.getElementById('book-name');
const issuedToInput = document.getElementById('issued-to');
const issueBookButton = document.querySelector('button[type="submit"]');
const issuedBooksTable = document.getElementById('issued-books').getElementsByTagName('tbody')[0];


const issuedBooks = [];


issueBookButton.addEventListener('click', function() {
 
  const bookName = bookNameInput.value;
  const issuedTo = issuedToInput.value;
  const issuedTime = new Date().toLocaleString();

 
  const issuedBook = {
    id: issuedBooks.length + 1,
    book_name: bookName,
    issued_to: issuedTo,
    issued_time: issuedTime,
    status: 'not returned'
  };
 
    issuedBooks.push(issuedBook);

  

  
  const newRow = issuedBooksTable.insertRow();
  const idCell = newRow.insertCell(0);
  const bookNameCell = newRow.insertCell(1);
  const issuedToCell = newRow.insertCell(2);
  const issuedTimeCell = newRow.insertCell(3);
  const statusCell = newRow.insertCell(4);

  idCell.innerHTML = issuedBook.id;
  bookNameCell.innerHTML = issuedBook.book_name;
  issuedToCell.innerHTML = issuedBook.issued_to;
  issuedTimeCell.innerHTML = issuedBook.issued_time;
  statusCell.innerHTML = issuedBook.status;

 
  bookNameInput.value = '';
  issuedToInput.value = '';
});



