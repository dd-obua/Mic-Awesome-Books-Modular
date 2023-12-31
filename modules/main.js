import { bookTitle, bookAuthor, listEntry } from './select-elements.js';

let books = JSON.parse(localStorage.getItem('books')) || [];

// Update storage
const updateStorage = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

// Clear input fields
const clearInputs = () => {
  bookTitle.value = '';
  bookAuthor.value = '';
};

// Render book
const renderBooks = () => {
  listEntry.innerHTML = books
    .map(
      (book) => `
          <li class="book-card">
            <p class="entry">
              <span class="book-title">"${book.title}"</span> by
              <span class="book-author">${book.author}</span>
            </p>
            <button class="remove-btn">Remove</button>
          </li>
        `,
    )
    .join('');

  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.book-card');
      const title = card.querySelector('.book-title').innerText;
      const author = card.querySelector('.book-author').innerText;

      // Remove book
      books = books.filter(
        (book) => book.title !== title && book.author !== author,
      );
      updateStorage();
      renderBooks();
    });
  });
};

// Add book
const addBook = () => {
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();

  if (title.length > 0 && author.length > 0) {
    const book = { title, author };
    const same = books.some((bk) => JSON.stringify(bk) === JSON.stringify(book));
    if (!same) {
      books.push(book);
      updateStorage();
      clearInputs();
      renderBooks();
    }
  }
};

export { renderBooks, addBook };
