import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-book',
  styleUrl: './book.css',
  templateUrl: './book.html',
})
export class Book {
readonly title = 'book-management-system';
book = {
  id: 1,
  name: 'The Great Gatsby',
  category: 'Fiction',
};

}
