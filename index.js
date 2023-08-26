import Book from './modules/book.js';
import { showClock } from './modules/date-time.js';

const newBook = new Book();
window.addEventListener('load', newBook.addBook);
