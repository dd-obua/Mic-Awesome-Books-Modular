import showClock from './modules/date-time.js';
import { books } from './modules/main.js';
import { renderBooks, addBook } from './modules/main.js';
import {
  addToList,
  displayBookList,
  displayContactInfo,
} from './modules/toggle-display.js';
import {
  addLink,
  listLink,
  contactLink,
  addBtn,
} from './modules/select-elements.js';

// Show clock
showClock(); // Show clock initially
setInterval(showClock, 1000); // Update the clock and HTML element's content every second

// Display book list
renderBooks();
displayBookList();

// Toggle display
addLink.addEventListener('click', addToList);
listLink.addEventListener('click', displayBookList);
contactLink.addEventListener('click', displayContactInfo);

// Add book
addBtn.addEventListener('click', addBook);
