import { DateTime } from './luxon.js';

export const showClock = () => {
  const now = DateTime.local();
  const formattedDate = now.toFormat("LLL d' 'yyyy, h:mm:ss a");

  // Update the HTML element's content with the formatted time
  const showDate = document.querySelector('.show-date');
  showDate.textContent = formattedDate;
};

// Call the function initially
showClock();

// Update the clock and HTML element's content every second
setInterval(showClock, 1000);
