export default class Book {
  constructor() {
    this.selectElements();

    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.addBtn.addEventListener('click', this.addBook.bind(this));
    this.addLink.addEventListener('click', this.addToList.bind(this));
    this.listLink.addEventListener('click', this.displayBookList.bind(this));
    this.listContact.addEventListener(
      'click',
      this.displayContactInfo.bind(this),
    );

    this.renderBooks();
  }

  selectElements() {
    this.bookTitle = document.querySelector('#book-title');
    this.bookAuthor = document.querySelector('#book-author');
    this.addBtn = document.querySelector('#btn');
    this.listEntry = document.querySelector('#list-entry');
    this.listLink = document.querySelector('#bk-list');
    this.addLink = document.querySelector('#bk-add');
    this.listContact = document.querySelector('#bk-contact');
    this.sectionList = document.querySelector('#list');
    this.sectionNew = document.querySelector('#new');
    this.sectionContact = document.querySelector('#contact');
    this.showDate = document.querySelector('.show-date');
  }

  addBook() {
    const title = this.bookTitle.value.trim();
    const author = this.bookAuthor.value.trim();

    if (title.length > 0 && author.length > 0) {
      const book = { title, author };
      const same = this.books.some(
        (bk) => JSON.stringify(bk) === JSON.stringify(book),
      );
      if (!same) {
        this.books.push(book);
        this.updateStorage();
        this.clearInputs();
        this.renderBooks();
      }
    }
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(title, author) {
    this.books = this.books.filter(
      (book) => book.title !== title && book.author !== author,
    );
    this.updateStorage();
    this.renderBooks();
  }

  clearInputs() {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }

  renderBooks() {
    this.listEntry.innerHTML = this.books
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
        this.removeBook(title, author);
      });
    });
  }

  addToList() {
    this.sectionNew.classList.remove('hidden');
    this.sectionList.classList.add('hidden');
    this.sectionContact.classList.add('hidden');
  }

  displayBookList() {
    this.sectionList.classList.remove('hidden');
    this.sectionNew.classList.add('hidden');
    this.sectionContact.classList.add('hidden');
  }

  displayContactInfo() {
    this.sectionList.classList.add('hidden');
    this.sectionNew.classList.add('hidden');
    this.sectionContact.classList.remove('hidden');
  }
}
