import { sectionList, sectionNew, sectionContact } from './select-elements.js';

// Toggle display
const addToList = () => {
  sectionNew.classList.remove('hidden');
  sectionList.classList.add('hidden');
  sectionContact.classList.add('hidden');
};

const displayBookList = () => {
  sectionList.classList.remove('hidden');
  sectionNew.classList.add('hidden');
  sectionContact.classList.add('hidden');
};  

const displayContactInfo = () => {
  sectionList.classList.add('hidden');
  sectionNew.classList.add('hidden');
  sectionContact.classList.remove('hidden');
};

export { addToList, displayBookList, displayContactInfo };
