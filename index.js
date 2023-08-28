import Book from './modules/book.js';
import showClock from './modules/date-time.js';

const newBook = new Book();
window.addEventListener('load', newBook.addBook);

// Show clock initially
showClock();

// Update the clock and HTML element's content every second
setInterval(showClock, 1000);
