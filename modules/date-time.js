import { DateTime } from './luxon.js';

const showClock = () => {
  const now = DateTime.local();
  const formattedDate = now.toFormat("LLL d' 'yyyy, h:mm:ss a");

  // Update the HTML element's content with the formatted time
  const showDate = document.querySelector('.show-date');
  showDate.textContent = formattedDate;
};

export default showClock;
