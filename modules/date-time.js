import { DateTime } from './luxon.js';
import { showDate } from './select-elements.js';

const showClock = () => {
  const now = DateTime.local();
  const formattedDate = now.toFormat("LLL d' 'yyyy, h:mm:ss a");

  // Update the HTML element's content with the formatted time
  showDate.textContent = formattedDate;
};

export default showClock;
